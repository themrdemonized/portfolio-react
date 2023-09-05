import Header from "@/components/Header/Header";
import { DictProvider } from '@/dictionary/DictionaryContext'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CssVarsProvider } from "@mui/joy";

describe('Header', () => {
	it('renders a heading', () => {
		const { container } = render(
			<CssVarsProvider>
				<DictProvider>
					<Header />
				</DictProvider>
			</CssVarsProvider>
			
		);

		expect(container).toBeInTheDocument();
	})
})