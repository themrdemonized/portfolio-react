import Animatable from "@/components/Animatable"
import { useDict } from "@/dictionary/DictionaryContext"
import { HeadTags } from "./_app"
import { Typography } from "@mui/joy"

export default function Hobbies() {
	const {dict} = useDict()
	return (
	<>
		<HeadTags
			title={dict.hobbies.title}
		/>
		<Animatable>
			<div>
				<Typography level="h1">
					{dict.hobbies.title}
				</Typography>
			</div>
		</Animatable>
	</>
	)
}
