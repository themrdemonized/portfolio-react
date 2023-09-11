import { DictProvider, useDict } from '@/dictionary/DictionaryContext';
import LanguageToggler from "@/components/LanguageToggler/LanguageToggler"
import { fireEvent, render, screen } from '@testing-library/react';
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

		expect(container).toBeInTheDocument();
	})

	it('default language is from navigator', () => {
		const { container } = render(
			<DictProvider>
				<LanguageToggler />
			</DictProvider>
		);
		
		const locale = window.navigator.language
		const displayed = container.querySelector('label')?.textContent || "ERROR"
		const contains = locale.includes(displayed)
		console.log(locale, displayed)
		expect(contains).toBeTruthy()
	})

	it('switches language', () => {
		const { container } = render(
			<DictProvider>
				<LanguageToggler />
			</DictProvider>
		);

		let locale = window.navigator.language
		let displayed = container.querySelector('label')?.textContent || "ERROR"
		let contains = locale.includes(displayed)
		console.log(locale, displayed)
		expect(contains).toBeTruthy()
		
		const input = screen.getByRole('checkbox')
		fireEvent.click(input)

		locale = window.navigator.language
		displayed = container.querySelector('label')?.textContent || "ERROR"
		contains = locale.includes(displayed)
		console.log(locale, displayed)
		expect(contains).toBeFalsy()
	})
})