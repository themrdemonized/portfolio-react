import JoyLink, { LinkProps as JoyLinkProps } from "@mui/joy/Link"
import clsx from "clsx"
import styles from "./MyLink.module.scss"

export default function MyLink({ children, className, ...rest }: JoyLinkProps) {
	const cl = className?.split(' ').reduce((acc, value) => { return {...acc, [value]: true} }, {})
	return (
		<JoyLink
			{...rest}
			className={clsx({
				...cl,
				[styles.link]: true
			})}
		>
			{children}
		</JoyLink>
	)
}