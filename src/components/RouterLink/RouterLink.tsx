import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { LinkProps as JoyLinkProps } from "@mui/joy/Link"
import MyLink from "@/components/Link/MyLink"

type RouterLinkProps = JoyLinkProps & NextLinkProps

export default function RouterLink({ children, href, ...rest }: RouterLinkProps) {
	return (
		<MyLink
			component={NextLink}
			href={href}
			{...rest}
		>
			{children}
		</MyLink>
	)
}