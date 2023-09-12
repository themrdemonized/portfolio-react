import { getDictionaries } from '@/dictionary/DictionaryContext';
import '@testing-library/jest-dom';
import { compare } from 'walkjs'

describe('Dictionary', () => {
	it('contains all entries in all languages', () => {
		const performCompare = () : [boolean, string] => {
			const dictionaries = getDictionaries()
			let result = true
			let errorMsg = ""
			if (dictionaries.length <= 1) {
				return [true, ""]
			} else {
				for (let i = 0; i < dictionaries.length - 1; i++) {
					for (let j = i + 1; j < dictionaries.length; j++) {
						const targetDict = dictionaries[i].dict
						const targetDictName = dictionaries[i].name
						const currentDict = dictionaries[j].dict
						const currentDictName = dictionaries[j].name

						const comparisons = compare(targetDict, currentDict, true, undefined, (a, b) => !(a.val === undefined || b.val === undefined))
						for (const c of comparisons) {
							if (c.hasDifference) {
								const errorMsg = c.difference === 'added' ? `path ${c.path} is missing in dictionary ${targetDictName} against ${currentDictName}` : `path ${c.path} is missing in dictionary ${currentDictName} against ${targetDictName}`
								return [false, errorMsg]
							}
						}
					}
				}
			}
			return [true, ""]
		}
		let [result, errorMsg] = performCompare()
		expect(result, errorMsg).toBeTruthy()
	})
})