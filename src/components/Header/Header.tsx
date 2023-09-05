import { Sheet } from "@mui/joy"
import styles from "./Header.module.scss"
import RouterLink from "@/components/RouterLink/RouterLink"
import DarkModeToggler from "../DarkModeToggler/DarkModeToggler"
import { useDict } from "@/dictionary/DictionaryContext"
import LanguageToggler from "../LanguageToggler/LanguageToggler"

export default function Header() {
	let {dict, context} = useDict()
	return (
		<header
		>
			<Sheet
				variant="outlined"
				className="p-4 flex items-center justify-between"
			>
				<Sheet
					className={`flex items-center gap-4`}
				>
					<RouterLink href="/">{dict.header.home}</RouterLink>
					<RouterLink href="/portfolio">{dict.header.portfolio}</RouterLink>
					<RouterLink href="/hobbies">{dict.header.hobbies}</RouterLink>
				</Sheet>
				<Sheet>
					<Sheet
						className={`flex items-center gap-4`}
					>
						<LanguageToggler />
						<DarkModeToggler />
					</Sheet>
				</Sheet>
			</Sheet>
		</header>
	)
}