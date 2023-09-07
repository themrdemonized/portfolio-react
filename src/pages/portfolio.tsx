import Animatable from "@/components/Animatable"
import PortfolioCard from "@/components/PortfolioCard/PortfolioCard"
import { useDict } from "@/dictionary/DictionaryContext"
import { Typography } from "@mui/joy"

import Image from "next/image"
import YARLImageSlide from "@/components/YARLImageSlide/YARLImageSlide"
import { Lightbox } from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Inline } from "yet-another-react-lightbox/plugins"
import portfolioPic from "@/../public/assets/portfolio_preview.jpg"
import rescriptPic1 from "@/../public/assets/rescript_preview.jpg"
import rescriptPic2 from "@/../public/assets/rescript_preview2.jpg"

import { useState } from "react"
import YARLCarousel from "@/components/YARLCarousel/YARLCarousel"

export default function Portfolio() {
	const {dict} = useDict()
	return (
		<Animatable>
			<Typography level="h1" marginBottom={4}>
				My Portfolio
			</Typography>
			<div className="flex flex-col gap-6">
				<PortfolioCard
					title={dict.portfolio.portfolio_site.title}
					description={dict.portfolio.portfolio_site.description}
					stack={dict.portfolio.portfolio_site.stack}
					date={dict.portfolio.portfolio_site.date}
					images={[portfolioPic]}
				/>
				<PortfolioCard
					title={dict.portfolio.rescript_elements.title}
					description={dict.portfolio.rescript_elements.description}
					stack={dict.portfolio.rescript_elements.stack}
					date={dict.portfolio.rescript_elements.date}
					images={[rescriptPic1, rescriptPic2]}
				/>
				<PortfolioCard
					title={dict.portfolio.dvipraz.title}
					description={dict.portfolio.dvipraz.description}
					stack={dict.portfolio.dvipraz.stack}
					date={dict.portfolio.dvipraz.date}
					images={[portfolioPic]}
				/>
				<PortfolioCard
					title={dict.portfolio.dvipraz_lk.title}
					description={dict.portfolio.dvipraz_lk.description}
					stack={dict.portfolio.dvipraz_lk.stack}
					date={dict.portfolio.dvipraz_lk.date}
					images={[portfolioPic]}
				/>
				<PortfolioCard
					title={dict.portfolio.uipdv.title}
					description={dict.portfolio.uipdv.description}
					stack={dict.portfolio.uipdv.stack}
					date={dict.portfolio.uipdv.date}
					images={[portfolioPic]}
				/>
				<PortfolioCard
					title={dict.portfolio.lstar.title}
					description={dict.portfolio.lstar.description}
					stack={dict.portfolio.lstar.stack}
					date={dict.portfolio.lstar.date}
					images={[portfolioPic]}
				/>
				<PortfolioCard
					title={dict.portfolio.vss.title}
					description={dict.portfolio.vss.description}
					stack={dict.portfolio.vss.stack}
					date={dict.portfolio.vss.date}
					images={[portfolioPic]}
				/>
				<PortfolioCard
					title={dict.portfolio.asiazip.title}
					description={dict.portfolio.asiazip.description}
					stack={dict.portfolio.asiazip.stack}
					date={dict.portfolio.asiazip.date}
					images={[portfolioPic]}
				/>
			</div>
		</Animatable>
	)
}
