import Animatable from "@/components/Animatable"
import PortfolioCard from "@/components/PortfolioCard/PortfolioCard"
import { useDict } from "@/dictionary/DictionaryContext"
import { Typography } from "@mui/joy"
import { getHeadTags } from "./_app"

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import portfolioPic from "@/../public/assets/portfolio_preview.jpg"
import rescriptPic1 from "@/../public/assets/rescript_preview.jpg"
import rescriptPic2 from "@/../public/assets/rescript_preview2.jpg"
import rescriptPic3 from "@/../public/assets/rescript_preview3.jpg"
import dviprazPic1 from "@/../public/assets/dvipraz1.jpg"
import dviprazPic2 from "@/../public/assets/dvipraz2.jpg"
import dviprazLkPic1 from "@/../public/assets/dviprazlk1.jpg"
import dviprazLkPic2 from "@/../public/assets/dviprazlk2.jpg"
import dviprazLkPic3 from "@/../public/assets/dviprazlk3.jpg"
import dviprazLkPic4 from "@/../public/assets/dviprazlk4.jpg"
import dviprazLkPic5 from "@/../public/assets/dviprazlk5.jpg"
import uipPic1 from "@/../public/assets/uip1.jpg"
import uipPic2 from "@/../public/assets/uip2.jpg"
import uipPic3 from "@/../public/assets/uip3.jpg"
import lstarPic1 from "@/../public/assets/lstar1.jpg"
import lstarPic2 from "@/../public/assets/lstar2.jpg"
import lstarPic3 from "@/../public/assets/lstar3.jpg"
import vssPic1 from "@/../public/assets/vss1.jpg"
import vssPic2 from "@/../public/assets/vss2.jpg"
import vssPic3 from "@/../public/assets/vss3.jpg"
import asiazipPic1 from "@/../public/assets/asiazip1.jpg"
import asiazipPic2 from "@/../public/assets/asiazip2.jpg"
import asiazipPic3 from "@/../public/assets/asiazip3.jpg"

import MyLink from "@/components/Link/MyLink"

import Github from "@mui/icons-material/GitHub"
import Link from "@mui/icons-material/Link"

export default function Portfolio() {
	const {dict} = useDict()
	return (
		<>
			{getHeadTags({title: dict.portfolio.title})}
			<Animatable>
				<Typography level="h1" marginBottom={4}>
					{dict.portfolio.title}
				</Typography>
				<div className="flex flex-col gap-6">
					<PortfolioCard
						title={dict.portfolio.portfolio_site.title}
						description={dict.portfolio.portfolio_site.description}
						stack={dict.portfolio.portfolio_site.stack}
						date={dict.portfolio.portfolio_site.date}
						images={[portfolioPic]}
						links={
							<>
								<div>
									<MyLink target="_blank" rel="noopener noreferrer" href="https://github.com/themrdemonized/portfolio-react">
										<Github />
										<span>Github</span>
									</MyLink>
								</div>
							</>
						}
					/>
					<PortfolioCard
						title={dict.portfolio.rescript_elements.title}
						description={dict.portfolio.rescript_elements.description}
						stack={dict.portfolio.rescript_elements.stack}
						date={dict.portfolio.rescript_elements.date}
						images={[rescriptPic1, rescriptPic2, rescriptPic3]}
						links={
							<>
								<div>
									<MyLink target="_blank" rel="noopener noreferrer" href="https://react-nextjs-rescript-elements.vercel.app/">
										<Link />
										<span>Demo</span>
									</MyLink>
								</div>
								<div>
									<MyLink target="_blank" rel="noopener noreferrer" href="https://github.com/themrdemonized/react-nextjs-rescript-elements">
										<Github />
										<span>Github</span>
									</MyLink>
								</div>
							</>
						}
					/>
					<PortfolioCard
						title={dict.portfolio.dvipraz.title}
						description={dict.portfolio.dvipraz.description}
						stack={dict.portfolio.dvipraz.stack}
						date={dict.portfolio.dvipraz.date}
						images={[dviprazPic1, dviprazPic2]}
						links={
							<>
								<div>
									<MyLink target="_blank" rel="noopener noreferrer" href="https://dvipraz.ru/">
										<Link />
										<span>Demo</span>
									</MyLink>
								</div>
								<div>
									<MyLink target="_blank" rel="noopener noreferrer" href="https://github.com/themrdemonized/dvipras">
										<Github />
										<span>Github</span>
									</MyLink>
								</div>
							</>
						}
					/>
					<PortfolioCard
						title={dict.portfolio.dvipraz_lk.title}
						description={dict.portfolio.dvipraz_lk.description}
						stack={dict.portfolio.dvipraz_lk.stack}
						date={dict.portfolio.dvipraz_lk.date}
						images={[
							dviprazLkPic1,
							dviprazLkPic2,
							dviprazLkPic3,
							dviprazLkPic4,
							dviprazLkPic5
						]}
					/>
					<PortfolioCard
						title={dict.portfolio.uipdv.title}
						description={dict.portfolio.uipdv.description}
						stack={dict.portfolio.uipdv.stack}
						date={dict.portfolio.uipdv.date}
						images={[uipPic1, uipPic2, uipPic3]}
						links={
							<>
								<div>
									<MyLink target="_blank" rel="noopener noreferrer" href="https://uipdv.ru">
										<Link />
										<span>Demo</span>
									</MyLink>
								</div>
								<div>
									<MyLink target="_blank" rel="noopener noreferrer" href="https://github.com/themrdemonized/UIP-Laravel">
										<Github />
										<span>Github</span>
									</MyLink>
								</div>
							</>
						}
					/>
					<PortfolioCard
						title={dict.portfolio.lstar.title}
						description={dict.portfolio.lstar.description}
						stack={dict.portfolio.lstar.stack}
						date={dict.portfolio.lstar.date}
						images={[lstarPic1, lstarPic2, lstarPic3]}
						links={
							<>
								<div>
									<MyLink target="_blank" rel="noopener noreferrer" href="https://l-star.ru">
										<Link />
										<span>Demo</span>
									</MyLink>
								</div>
								<div>
									<MyLink target="_blank" rel="noopener noreferrer" href="https://github.com/themrdemonized/Little-Star-Store-OpenCart">
										<Github />
										<span>Github</span>
									</MyLink>
								</div>
							</>
						}
					/>
					<PortfolioCard
						title={dict.portfolio.vss.title}
						description={dict.portfolio.vss.description}
						stack={dict.portfolio.vss.stack}
						date={dict.portfolio.vss.date}
						images={[vssPic1, vssPic2, vssPic3]}
						links={
							<>
								<div>
									<MyLink target="_blank" rel="noopener noreferrer" href="https://ventstroysnab.ru/">
										<Link />
										<span>Demo</span>
									</MyLink>
								</div>
							</>
						}
					/>
					<PortfolioCard
						title={dict.portfolio.asiazip.title}
						description={dict.portfolio.asiazip.description}
						stack={dict.portfolio.asiazip.stack}
						date={dict.portfolio.asiazip.date}
						images={[asiazipPic1, asiazipPic2, asiazipPic3]}
						links={
							<>
								<div>
									<MyLink target="_blank" rel="noopener noreferrer" href="https://asiazip.ru">
										<Link />
										<span>Demo</span>
									</MyLink>
								</div>
							</>
						}
					/>
				</div>
			</Animatable>
		</>
	)
}
