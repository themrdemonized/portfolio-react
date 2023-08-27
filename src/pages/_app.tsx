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

export default function App({ Component, pageProps }: AppProps) {
	return (
	<>
		<CssVarsProvider>
			<CssBaseline />
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
				<Header />
					<Sheet 
						component="main"
						className={`flex min-h-screen flex-col items-center justify-between p-24`}>
						<AnimatePresence
							mode='wait'
							// initial={false}
						>
							<Component {...pageProps} />
						</AnimatePresence>
					</Sheet>
				<Footer />
		</CssVarsProvider>
	</>
	)
}
