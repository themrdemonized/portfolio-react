import NextLink, { LinkProps as NextLinkProps } from "next/link"
import JoyLink, { LinkProps as JoyLinkProps } from "@mui/joy/Link"

type RouterLinkProps = JoyLinkProps & NextLinkProps

export default function RouterLink({ children, href, ...rest }: RouterLinkProps) {
	return (
		<JoyLink
			component={NextLink}
			href={href}
			{...rest}
		>
			{children}
		</JoyLink>
	)
}