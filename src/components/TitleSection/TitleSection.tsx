import { useEffect, useState } from "react";
import Button from "../Button/Button"




const TitleSection = () => {
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
      // Определяем ширину карточки и количество видимых карточек
      useEffect(() => {
        const handleResize = () => {
          const newWidth = window.innerWidth;
          setScreenWidth(newWidth);
        };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Инициализация при монтировании
    
        return () => window.removeEventListener('resize', handleResize);
        }, []);



  return (
    <div
      style={{
        display: 'flex',
        flexDirection: `${screenWidth >= 676 ? "row" : "column"}`,
        alignItems: 'center', width: '100%',
        marginLeft: '20px',
        justifyContent: `${screenWidth >= 1360 ? 'space-between' : "center"}`,
        maxWidth: '1320px',
        height: "fit-content",
        margin: "69px 0"
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: `${screenWidth >= 842 ? "flex-start" : "center"}`,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: `${screenWidth >= 842 ? "70px" : "30px"}`,
          width: `${screenWidth >= 1360 ? "100%" : screenWidth >= 842 ? "500px" : "400px"}`
        }}  >
        <div
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <h1
        style={{ textTransform:'uppercase', fontWeight: '900', fontSize:`${screenWidth >= 1360 ? "60px": screenWidth >= 842 ? "40px" : "28px"}`, margin:'0'}}
        >
          сервис по поиску публикаций о компании по его ИНН</h1>
        <p
         style={{ fontWeight: '400', fontSize:`${screenWidth >= 842 ? '20px': '18px'}`, maxWidth:`${screenWidth >= 676?"": '327px'}`}}
        >
        Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
        </p>
        </div>
        <Button  onClickFunc={()=>{}} btnText="Запросить данные" bg="#5970FF" textColor="white" maxWidth={screenWidth >= 842 ? 355 : screenWidth >= 842 ? 289 : 335}/>
      </div>
      <img
      style={{width:`${screenWidth >= 1360 ? "629px": screenWidth >= 842 ? "500px" : '347px'}`, height:'auto'}}
        src='../src/icons/TitlePic.svg' />
    </div>
  )
}

export default TitleSection