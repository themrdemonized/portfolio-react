import Animatable from "@/components/Animatable"
import { useDict } from "@/dictionary/DictionaryContext"
import Head from "next/head"
import { getHeadTags } from "./_app"

export default function Hobbies() {
	const {dict} = useDict()
	return (
	<>
		{getHeadTags({title: dict.hobbies.title})}
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
