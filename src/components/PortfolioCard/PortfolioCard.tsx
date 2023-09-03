import { AspectRatio, Card, CardContent, Typography } from "@mui/joy"

interface PortfolioCardProps {
  title: string,
  subtitle?: string,
  images: React.ReactNode,
  description: string | React.ReactNode
}

export default function PortfolioCard(props: PortfolioCardProps) {
  return (
    <Card variant="outlined" sx={{
      width: `100%`,
    }}>
      <Typography level="title-lg">{props.title}</Typography>
      <Typography level="body-sm">{props.subtitle}</Typography>
      <AspectRatio ratio={"16/9"} >
        {props.images}
      </AspectRatio>
      <CardContent>
        {props.description}
      </CardContent>
    </Card>
  )
}