import '@/styles/globals.scss'
import '@/styles/tailwind.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { CssVarsProvider, CssBaseline } from '@mui/joy'

import Head from 'next/head'
import '@fontsource/inter';
import { AnimatePresence } from 'framer-motion'
import { Sheet } from "@mui/joy"
import { DictProvider, useDict } from '@/dictionary/DictionaryContext'


interface headTagsProps {
	title?: string,
}
export function HeadTags({title} : headTagsProps) {
	const {dict} = useDict()
	const headTitle = title ? `${title} | ${dict.head.title}` : `${dict.head.title}`
	return (
		<Head>
			<title key="title">{headTitle}</title>
			<meta property="og:title" content={headTitle} key="og:title" />
		</Head>
	)
}

export default function App({ Component, pageProps }: AppProps) {
	return (
			<CssVarsProvider
				defaultMode='system'
				modeStorageKey='system-theme-mode-key'
			>
			<CssBaseline />
				<DictProvider>
					<div className='min-h-screen flex flex-col'>
						<Head>
							<meta name="viewport" content="initial-scale=1, width=device-width" />
						</Head>
						<Header />
						<Sheet 
							component="main"
							className={`flex-1 flex flex-col items-center justify-between p-4 sm:p-16`}
						>
							<AnimatePresence
								mode='wait'
								// initial={false}
							>
									<Sheet
										className={`max-w-2xl w-full flex-1 flex flex-col`}
									>
										<Component {...pageProps} />
									</Sheet>
							</AnimatePresence>
						</Sheet>
					</div>
				</DictProvider>
		</CssVarsProvider>
	)
}
