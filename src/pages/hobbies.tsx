import Animatable from "@/components/Animatable"
import { useDict } from "@/dictionary/DictionaryContext"
import { HeadTags } from "./_app"
import { Typography } from "@mui/joy"
import MyLink from "@/components/Link/MyLink"

export default function Hobbies() {
	const {dict} = useDict()
	return (
	<>
		<HeadTags
			title={dict.hobbies.title}
		/>
		<Animatable>
			<div>
				<Typography level="h1" marginBottom={4}>
					{dict.hobbies.title}
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					As a favourite hobby I like to create mods for S.T.A.L.K.E.R. Anomaly based on XRay-Monolith engine and work with Unreal Engine 5.
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					I strive as a gameplay modder and I really enjoy adding new features and overhauling existing gameplay mechanics.
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					Also i maintain own fork of XRay-Monolith engine that contains my own features to the engine, as well as features developed and donated by beautiful S.T.A.L.K.E.R. Anomaly community members.
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					Paragraph about Unreal Engine and NightmareFuelGames
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					My ModDB page with all my mods: <MyLink href="https://www.moddb.com/mods/stalker-anomaly/addons" target="_blank" rel="noopener noreferrer">https://www.moddb.com/members/themrdemonized/addons</MyLink>
				</Typography>
			</div>
		</Animatable>
	</>
	)
}
