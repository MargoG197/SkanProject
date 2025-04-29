import { TTariff } from "../types/types"

export const prices:TTariff[] = [
  {
    name: "Beginner",
    description: "Для небольшого исследования",
    price: 1200,
    priceWithDiscount: 799,
    priceCondition: "или 150 ₽/мес. при рассрочке на 24 мес.",
    includedInPrice: ["Безлимитная история запросов", "Безопасная сделка", "Поддержка 24/7"],
    bg: '#FFB64F',
    svg: '../src/icons/beginner.svg',
    textColor: "#000000"

  },
  {
    name:  "Pro",
    description: "Для HR и фрилансеров",
    price: 2600,
    priceWithDiscount: 1299,
    priceCondition: "или 279 ₽/мес. при рассрочке на 24 мес.",
    includedInPrice: ["Все пункты тарифа Beginner", "Экспорт истории", "Рекомендации по приоритетам"],
    bg: '#7CE3E1',
    svg: '../src/icons/pro.svg',
    textColor: "#000000"
  },
  {
    name: "Business",
    description: "Для корпоративных клиентов",
    price: 3700,
    priceWithDiscount: 2379,
    priceCondition: null,
    includedInPrice: ["Все пункты тарифа Pro", "Безлимитное количество запросов", "Приоритетная поддержка"],
    bg: '#000000',
    svg: '../src/icons/business.svg',
    textColor: "#FFFFFF"
}
]