import { getDictionaries } from '@/dictionary/DictionaryContext';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { walk, Break, compare } from 'walkjs'
import _ from 'lodash'

describe('Dictionary', () => {
	it('contains all entries in all languages', () => {
		let result = true
		let errorMsg = ""
		
		const performCompare = () => {
			const dictionaries = getDictionaries()
			if (dictionaries.length <= 1) {
				return result
			} else {
				for (let i = 0; i < dictionaries.length - 1; i++) {
					for (let j = i + 1; j < dictionaries.length; j++) {
						const targetDict = dictionaries[i].dict
						const targetDictName = dictionaries[i].name
						const currentDict = dictionaries[j].dict
						const currentDictName = dictionaries[j].name
						walk(targetDict, {
							onVisit: {
								callback: node => {
									const path = node.getPath()
									if (path.length > 0) {
										const checkInTarget = _.get(currentDict, path, undefined)
										if (!checkInTarget) {
											result = false
											errorMsg = `path ${path} is missing from dictionary ${currentDictName} but appears in ${targetDictName}`
											throw new Break()
										}
									}
								}
							}
						})
						if (!result) {
							return result
						}
					}
				}
			}
			return result
		}
		expect(performCompare(), errorMsg).toBeTruthy()
	})
})