import * as React from "react"
import Button from "../components/Button"
import Typography from "../components/Typography"
import ProductHeroLayout from "./ProductHeroLayout"
import backgroundImage from "../../../../assets/images/wpBg.jpg"

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Пет проект Нуршинова Ануара
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Социальная сеть
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/home"
        sx={{ minWidth: 200 }}
      >
        Перейти на сайт
      </Button>
    </ProductHeroLayout>
  )
}
