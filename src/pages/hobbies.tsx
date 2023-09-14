import Animatable from "@/components/Animatable"
import { useDict } from "@/dictionary/DictionaryContext"
import { HeadTags } from "./_app"
import { Typography } from "@mui/joy"
import MyLink from "@/components/Link/MyLink"
import Github from "@mui/icons-material/GitHub"
import Link from "@mui/icons-material/Link"
import ue1Pic from "@/../public/assets/ue1.jpg"
import ue2Pic from "@/../public/assets/5_optimized.gif"
import ue3Pic from "@/../public/assets/ue3.jpg"
import ue4Pic from "@/../public/assets/ue4.jpg"
import ue5Pic from "@/../public/assets/ue5.jpg"
import Image from "next/image"

import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Hobbies() {
	const {dict} = useDict()
	const [wctDownloads, setWctDownloads] = useState("500K")

	useEffect(() => {
		let ignore = false

		const getDownloads = async () => {
			const result = await axios.get('/moddb/mods/stalker-anomaly/addons/weapon-cover-tilt-inertia') 
			if (!ignore) {
				const dom = new DOMParser().parseFromString(result.data, "text/html")
				const downloads = dom.querySelector('#downloadsinfo .table .summary a[href*="downloads"]')
				if (downloads && downloads.textContent) {
					const downloadString = downloads.textContent
					let downloadAmount = parseInt(downloadString.split(' ')[0].replace(',', ''))
					downloadAmount = Math.floor(Math.floor(downloadAmount / 5000) * 5000 / 1000)
					setWctDownloads(`${downloadAmount}K`)
				}
			}
		}
		getDownloads()

		return () => {
			ignore = true
		}
	}, [])
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
				<Typography level="body-md" marginBottom={4}>
					{dict.hobbies.beginning}
				</Typography>
				<Typography level="h2" marginBottom={2}>
					S.T.A.L.K.E.R. Anomaly
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					{dict.hobbies.anomaly.p1}
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					{dict.hobbies.anomaly.moddb_page} <MyLink href="https://www.moddb.com/mods/stalker-anomaly/addons" target="_blank" rel="noopener noreferrer">https://www.moddb.com/members/themrdemonized/addons</MyLink>
				</Typography>
				<Typography level="body-md" marginBottom={0}>
					{dict.hobbies.anomaly.pba1} <b>{dict.hobbies.anomaly.pba2}</b> {dict.hobbies.anomaly.pba3}
				</Typography>
				<Typography level="body-md" marginBottom={0}>
					<MyLink target="_blank" rel="noopener noreferrer" href="https://github.com/themrdemonized/STALKER-Anomaly-Perk-Based-Artefacts">
						<Github />
						<span>Github</span>
					</MyLink>
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					<MyLink target="_blank" rel="noopener noreferrer" href="https://www.moddb.com/mods/stalker-anomaly/addons/perk-based-artefacts-20-pba">
						<Link />
						<span>ModDB</span>
					</MyLink>
				</Typography>
				<Typography level="body-md" marginBottom={4}>
					{dict.hobbies.anomaly.pba_showcase}
				</Typography>
				<div className="mb-2">
					<div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/nvtcv7ba154?si=l4xWfiPwj6hwwU7B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
				</div>
				<div className="mb-2">
					<div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/j2KsV3QEkto?si=lu2omNa9pm8NdQId&amp;start=18" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
				</div>
				<div className="mb-8">
					<div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/Shqkhb9z9BA?si=dTENWJL20dkgRI94" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
				</div>
				<Typography level="body-md" marginBottom={0}>
					{dict.hobbies.anomaly.wct1} <b>{dict.hobbies.anomaly.wct2}</b>{dict.hobbies.anomaly.wct3} <b>{wctDownloads}</b> {dict.hobbies.anomaly.wct4}
				</Typography>
				<Typography level="body-md" marginBottom={0}>
					<MyLink target="_blank" rel="noopener noreferrer" href="https://github.com/themrdemonized/STALKER-ANOMALY-Weapon-Cover-Tilt">
						<Github />
						<span>Github</span>
					</MyLink>
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					<MyLink target="_blank" rel="noopener noreferrer" href="https://www.moddb.com/mods/stalker-anomaly/addons/weapon-cover-tilt-inertia">
						<Link />
						<span>ModDB</span>
					</MyLink>
				</Typography>
				<div className="flex justify-center mb-8">
					<Image 
						src="https://media.moddb.com/images/downloads/1/234/233184/1.gif"
						width={480}
						height={320}
						alt="Weapon Cover Tilt"
						loading="lazy"
					/>
				</div>
				<Typography level="body-md" marginBottom={0}>
					{dict.hobbies.anomaly.tools1}
				</Typography>
				<Typography level="body-md" marginBottom={0}>
					{dict.hobbies.anomaly.tools2}
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					<MyLink target="_blank" rel="noopener noreferrer" href="https://www.moddb.com/mods/stalker-anomaly/addons/draggable-hud-editor">
						<Link />
						<span>ModDB</span>
					</MyLink>
				</Typography>
				<div className="mb-2">
					<div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/sYUMyUDYZmg?si=8X1yWeXo4rYi-o_L" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
				</div>
				<div className="mb-8">
					<div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/REU6a9yMJOU?si=5VXLvYDutNMaK8gf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
				</div>
				<Typography level="body-md" marginBottom={0}>
					{dict.hobbies.anomaly.xray}
				</Typography>
				<Typography level="body-md" marginBottom={4}>
					<MyLink target="_blank" rel="noopener noreferrer" href="https://github.com/themrdemonized/xray-monolith">
						<Github />
						<span>Github</span>
					</MyLink>
				</Typography>
				
				<Typography level="h2" marginBottom={2}>
					Unreal Engine
				</Typography>
				<Typography level="body-md" marginBottom={0}>
					{dict.hobbies.ue.p1}
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					<MyLink target="_blank" rel="noopener noreferrer" href="https://nightmarefuelgames.com/">
						<Link />
						<span>NightmareFuelGames</span>
					</MyLink>
				</Typography>
				<Typography level="body-md" marginBottom={8}>
					<Image 
						src={ue3Pic}
						alt="Unreal Engine 5"
						loading="lazy"
					/>
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					{dict.hobbies.ue.goals}
				</Typography>
				<div className="flex justify-center mb-4">
					<Image 
						src={ue1Pic}
						alt="Unreal Engine 5"
						loading="lazy"
					/>
				</div>
				<div className="flex justify-center mb-8">
					<Image 
						src={ue2Pic}
						alt="Unreal Engine 5"
						loading="lazy"
					/>
				</div>
				<Typography level="body-md" marginBottom={2}>
					{dict.hobbies.ue.finish}
				</Typography>
				<div className="flex justify-center mb-4">
					<Image 
						src={ue4Pic}
						alt="Unreal Engine 5"
						loading="lazy"
					/>
				</div>
				<div className="flex justify-center mb-8">
					<Image 
						src={ue5Pic}
						alt="Unreal Engine 5"
						loading="lazy"
					/>
				</div>
			</div>
		</Animatable>
	</>
	)
}
