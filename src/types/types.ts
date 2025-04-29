type TTariff = {
  name: "Beginner" | "Pro" | "Business"
  description: string
  price: number
  priceWithDiscount: number
  priceCondition: string | null
  includedInPrice: string[]
  bg: string
  svg: string
  textColor:string
}


export type { TTariff }

