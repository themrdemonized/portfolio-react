import Animatable from "@/components/Animatable"
import { useDict } from "@/dictionary/DictionaryContext"
import Head from "next/head"
import { HeadTags } from "./_app"

export default function Hobbies() {
	const {dict} = useDict()
	return (
	<>
		<HeadTags
			title={dict.hobbies.title}
		/>
		<Animatable>
			<div>
				<h1>
					This is hobbies page
				</h1>
			</div>
		</Animatable>
	</>
	)
}
