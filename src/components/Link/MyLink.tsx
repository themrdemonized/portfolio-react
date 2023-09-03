import JoyLink, { LinkProps as JoyLinkProps } from "@mui/joy/Link"
import clsx from "clsx"
import styles from "./MyLink.module.scss"

export default function MyLink({ children, ...rest }: JoyLinkProps) {
	return (
		<JoyLink
			{...rest}
			className={clsx({
				[styles.link]: true
			})}
		>
			{children}
		</JoyLink>
	)
}