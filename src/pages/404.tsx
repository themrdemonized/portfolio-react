import { Typography } from "@mui/joy";
import styles from "./404.module.scss"
import Animatable from "@/components/Animatable";

export default function Custom404() {
  return (
    <Animatable>
      <div className="flex-1 flex items-center justify-center">
        <Typography level="h1">
          <span className={styles.h1}>404</span>
        </Typography>
      </div>
    </Animatable>
  )
}