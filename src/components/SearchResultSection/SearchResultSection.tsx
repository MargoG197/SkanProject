import { TArtcile } from "../../types/types";
import ArticleCard from "../cards/ArticleCard/ArticleCard";
import HistogramTable from "../HistogramTable/HistogramTable"




const SearchResultSection = () => {
  


  const articles: TArtcile[] = [
    {
      date: "13.09.2021",
      source: "Комсомольская правда KP.RU",
      title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
      category: "Технические новости",
      content: [
        "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 88 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, MTC, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.",
        "Принципы SkillFactory: акцент на практике, забота о студентах и ориентире на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комбинации курса. А карьеры центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами."
      ],
      readMoreLink: "#",
      wordCount: 2543
    },
    {
      date: "13.09.2021",
      source: "Комсомольская правда KP.RU",
      title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
      category: "Технические новости",
      content: [
        "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 88 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, MTC, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.",
        "Принципы SkillFactory: акцент на практике, забота о студентах и ориентире на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комбинации курса. А карьеры центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами."
      ],
      readMoreLink: "#",
      wordCount: 2543
  }];


  const histogramArr = [{ date: '20.09.1989', total: 980, risks: 10 },
    { date: '20.09.1990', total: 70, risks: 10 },
    { date: '20.09.1991', total: 50, risks: 54 },
    { date: '20.09.1992', total: 78, risks: 11 },
    { date: '20.09.1993', total: 67, risks: 10 },
    { date: '20.09.1994', total: 4, risks: 93 },
    { date: '20.09.1995', total: 5, risks: 46 },
    { date: '20.09.1996', total: 532, risks: 27 },
    { date: '20.09.1997', total: 51, risks: 65 },
    { date: '20.09.1998', total: 5, risks: 772 },
    { date: '20.09.1999', total: 5, risks: 267 },
    { date: '20.09.2000', total: 54, risks: 1845 },
    { date: '20.09.2001', total: 7, risks: 123 },
    { date: '20.09.2002', total: 84, risks: 34 },
    { date: '20.09.2003', total: 5, risks: 45 },
    { date: '20.09.2004', total: 98, risks: 67 },
  ]


  return (
    <div style={{display:'flex', flexDirection:'column', width: '90%', height: 'fit-content', justifyContent:'space-between', gap:'70px'}}>
      <div style={{display:'flex', width: '100%', height: 'fit-content', justifyContent:'space-between', gap:'70px'}}>
        <div style={{display:'flex', flexDirection:'column', width: '70%', height: 'fit-content', maxWidth:'509px'}}>
          <h1  style={{ fontSize: '40px', fontWeight:'900', textTransform:'uppercase' }}>Ищем. Скоро будут результаты</h1>
          <p  style={{fontSize:'20px', }}>Поиск может занять некоторое время, просим сохранять терпение.</p>
        </div>
        <img style={{width: '30%', height: 'auto',}} src="../../../src/icons/searchLady.svg"/>
      </div>
      <HistogramTable cardsArray={histogramArr}/>
      <div style={{ display: 'flex', width: '100%', gap: '38px', margin: '50px 0',}}>
        {articles.map((article) => (
        <ArticleCard data={article} />
      ))}
      </div>
    </div>

  )
}

export default SearchResultSection