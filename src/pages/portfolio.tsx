import Animatable from "@/components/Animatable"
import PortfolioCard from "@/components/PortfolioCard/PortfolioCard"
import { Typography } from "@mui/joy"

export default function Portfolio() {
	return (
		<Animatable>
			<Typography level="h1" marginBottom={4}>
				My Portfolio
			</Typography>
			<div className="flex flex-col gap-6">
				<PortfolioCard
					title="This Portfolio"
					description="Portfolio itself"
					images={
						<img
							src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
							srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
							loading="lazy"
							alt=""
						/>
					}
				></PortfolioCard>
				<PortfolioCard
					title="This Portfolio"
					description="Portfolio itself"
					images={
						<></>
					}
				></PortfolioCard>
			</div>
		</Animatable>
	)
}
