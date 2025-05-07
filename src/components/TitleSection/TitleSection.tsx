import { useEffect, useState } from "react";
import Button from "../Button/Button"
import './index.css'
import { useNavigate } from 'react-router-dom';


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

        const navigate = useNavigate();

        const handleClick = () => {
          navigate('/search');
  };
  


  return (
    <div
		className="TitleSection_mainDiv"
      style={{
        display: 'flex',
        alignItems: 'center', 
				width: '90%',
        margin: '69px',
				
        height: "fit-content",
      }}
    >
      <div
			className="TitleSection_textdiv"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}  >
        <div
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <h1 className="titleSectionH1"
        style={{ textTransform:'uppercase', fontWeight: '900', 
					
					 margin:'0'}}
        >
          сервис по поиску публикаций о компании по его ИНН</h1>
        <p className="titleSectionP"
         style={{ fontWeight: '400'}}
        >
        Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
        </p>
        </div>
        <Button  onClickFunc={handleClick} btnText="Запросить данные" bg="#5970FF" textColor="white"
				 maxWidth={screenWidth >= 842 ? 355 : screenWidth >= 842 ? 289 : 335}
				 />
      </div>
      <img className="titleSectionImg"
      style={{height:'auto'}}
        src='../src/icons/TitlePic.svg' />
    </div>
  )
}

export default TitleSection