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
				<Typography level="body-md" marginBottom={2}>
					As a favourite hobby I like to create mods for S.T.A.L.K.E.R. Anomaly based on XRay-Monolith engine and work with Unreal Engine 5.
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					I strive as a gameplay modder and I really enjoy adding new features and overhauling existing gameplay mechanics. I created over 60 mods for Anomaly, ranging from simple Quality of Life changes to big gameplay overhauls.
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					My ModDB page with all my mods: <MyLink href="https://www.moddb.com/mods/stalker-anomaly/addons" target="_blank" rel="noopener noreferrer">https://www.moddb.com/members/themrdemonized/addons</MyLink>
				</Typography>
				<Typography level="body-md" marginBottom={0}>
					One of my biggest projects for Anomaly is <b>Perk Based Artefacts</b> mod. Its a massive 10k lines of Lua code mod that overhauls whole artefact system by adding fully scripted unique special abilities and perks, taking inspiration from games such as Fallout, Borderlands, etc.
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
					Here are some showcases of the mod made by Anomaly Youtubers.
				</Typography>
				<div className="mb-2">
					<div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/nvtcv7ba154?si=l4xWfiPwj6hwwU7B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
				</div>
				<div className="mb-2">
					<div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/j2KsV3QEkto?si=lu2omNa9pm8NdQId&amp;start=18" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
				</div>
				<div className="mb-6">
					<div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/Shqkhb9z9BA?si=dTENWJL20dkgRI94" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
				</div>
				<Typography level="body-md" marginBottom={0}>
					My most popular mod for Anomaly is <b>Weapon Cover Tilt</b>. This mod adds procedural first person animations that raise the gun up when player is near a wall. Currently it has over <b>{wctDownloads}</b> downloads and counting.
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
				<div className="flex justify-center mb-6">
					<Image 
						src="https://media.moddb.com/images/downloads/1/234/233184/1.gif"
						width={480}
						height={320}
						alt="Weapon Cover Tilt"
						loading="lazy"
					/>
				</div>
				<Typography level="body-md" marginBottom={0}>
					Also I create tools for other modders to help with development.
				</Typography>
				<Typography level="body-md" marginBottom={0}>
					Here for example I made HUD editor that allows to change position and rotation of 3rd person model of weapon with a simple mouse drag. Also it allows manipulating models in 3rd person mode on an NPC model for precise repositions.
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
				<div className="mb-6">
					<div className="flex justify-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/REU6a9yMJOU?si=5VXLvYDutNMaK8gf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
				</div>
				<Typography level="body-md" marginBottom={0}>
					I maintain my own fork of XRay-Monolith engine (C++) that contains new features added to the engine, as well as features developed and donated by wonderful S.T.A.L.K.E.R. Anomaly community members. The engine is built using Github Actions CI with Visual Studio 2022.
				</Typography>
				<Typography level="body-md" marginBottom={4}>
					<MyLink target="_blank" rel="noopener noreferrer" href="https://github.com/themrdemonized/xray-monolith">
						<Github />
						<span>Github link to XRay-Monolith repo</span>
					</MyLink>
				</Typography>
				
				<Typography level="h2" marginBottom={2}>
					Unreal Engine
				</Typography>
				<Typography level="body-md" marginBottom={0}>
					In October 2022 I was contacted by NightmareFuelGames and was offered to join them in development of a survival co-op FPS game, inspired by S.T.A.L.K.E.R, DayZ, Hunt: Showdown and Escape From Tarkov.
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					<MyLink target="_blank" rel="noopener noreferrer" href="https://nightmarefuelgames.com/">
						<Link />
						<span>NightmareFuelGames</span>
					</MyLink>
				</Typography>
				<Typography level="body-md" marginBottom={4}>
					<Image 
						src={ue3Pic}
						alt="Unreal Engine 5"
						loading="lazy"
					/>
				</Typography>
				<Typography level="body-md" marginBottom={2}>
					I joined NightmareFuelGames as a Lead Programmer. My goal here is to work on Animation Programming, Items Interaction Programming such as weapons, PDA and melee items, participate in code reviews and maintain our project repo in Perforce 
				</Typography>
				<div className="flex justify-center mb-4">
					<Image 
						src={ue2Pic}
						alt="Unreal Engine 5"
						loading="lazy"
					/>
				</div>
			</div>
		</Animatable>
	</>
	)
}
