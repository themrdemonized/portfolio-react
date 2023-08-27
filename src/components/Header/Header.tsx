import { Sheet } from "@mui/joy"
import styles from "./Header.module.scss"
import RouterLink from "@/components/RouterLink/RouterLink"
import DarkModeToggler from "../DarkModeToggler/DarkModeToggler"

export default function Header() {
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
					<RouterLink href="/">Home</RouterLink>
					<RouterLink href="/portfolio">Portfolio</RouterLink>
					<RouterLink href="/hobbies">Hobbies</RouterLink>
				</Sheet>
				<Sheet>
					<DarkModeToggler />
				</Sheet>
			</Sheet>
		</header>
	)
}