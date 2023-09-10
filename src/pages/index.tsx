import Animatable from "@/components/Animatable"
import { useDict } from "@/dictionary/DictionaryContext"
import { getHeadTags } from "./_app"
import { List, ListItem, Typography } from "@mui/joy"

export default function Home() {
	const {dict} = useDict()
	const nl2p = (text: string) => {
		const lines = text.split("\n")
		const newLines = lines.map((value, index) => <Typography level="body-md" marginBottom={1} key={value}>{value}</Typography>)
		return newLines
	}
	const nl2list = (text: string) => {
		const lines = text.trim().split("\n")
		const newLines = lines.map((value, index) => <ListItem key={value} sx={{display: 'list-item'}}>
			<Typography level="body-md" marginBottom={1}>{value}</Typography>
		</ListItem>)
		return <List
		sx = {{
			listStyleType: 'disc',
			pl: 2,
			'& .MuiListItem-root': {
			 display: 'list-item',
			}
		}}
		>{newLines}</List>
	}
	return (
		<>
			{getHeadTags({title: dict.index.title})}
			<Animatable>
				<div>
					<Typography level="h1" marginBottom={8}>
						{dict.index.hello}
					</Typography>
					{nl2p(dict.index.textBegin)}
					<Typography level="h2" marginTop={4} marginBottom={4}>{dict.index.skillsTitle}</Typography>
					{nl2list(dict.index.skills)}
					<br></br>
					{nl2list(dict.index.didlist)}
					<br></br>
					{nl2p(dict.index.textEnd)}
				</div>
			</Animatable>
		</>
	)
}
