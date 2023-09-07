import { useDict } from "@/dictionary/DictionaryContext"
import { AspectRatio, Card, CardContent, Typography } from "@mui/joy"
import { Slide } from "yet-another-react-lightbox"
import YARLCarousel from "../YARLCarousel/YARLCarousel"

interface PortfolioCardProps {
  title: string,
  subtitle?: string,
  images: Slide[],
  description: string | React.ReactNode,
  stack: string,
  date: string,
  links?: React.ReactNode
}

export default function PortfolioCard(props: PortfolioCardProps) {
  const {dict} = useDict()
  return (
    <Card variant="outlined" sx={{
      width: `100%`,
    }}>
      <Typography level="title-lg">{props.title}</Typography>
      <Typography level="body-sm">{props.subtitle}</Typography>
      <AspectRatio ratio={"16/9"} >
        <YARLCarousel
          slides={props.images}
        />
      </AspectRatio>
      <CardContent>
        <p>{props.description}</p>
        <p>{dict.stack}: {props.stack}</p>
        <p>{dict.devdate}: {props.date}</p>
        <p>{props.links}</p>
      </CardContent>
    </Card>
  )
}