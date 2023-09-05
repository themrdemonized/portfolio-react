import { DictProvider, useDict } from '@/dictionary/DictionaryContext';
import LanguageToggler from "@/components/LanguageToggler/LanguageToggler"
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { CssVarsProvider } from '@mui/joy';
import Header from '@/components/Header/Header';

describe('LanguageToggler', () => {
	it('renders', () => {
		const { container } = render(
			<DictProvider>
				<LanguageToggler />
			</DictProvider>
		);
	})

	// it('switches dictionary', () => {
	// 	const { container } = render(
	// 		<DictProvider>
	// 			<LanguageToggler />
	// 		</DictProvider>
	// 	);

	// 	let els = container.getElementsByTagName('input')
	// 	for (let el of els) {
	// 		userEvent.click(el)
	// 		break
	// 	}	
	// })
})