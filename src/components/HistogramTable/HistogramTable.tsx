import React, { useEffect, useState } from "react";
import HistogramCard from "../cards/HistogramCard/HistogramCard";
import "./index.css";
import { TFinalHistogramCard, ThistogramResult } from "../../types/types";



type THistogramTableProps = {
  cardsArray: ThistogramResult
  isLoading:boolean
};

const HistogramTable: React.FC<THistogramTableProps> = ({ cardsArray,  isLoading}) => {

  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [numberOfVisibleItems, setNumberOfVisibleItems] = useState<number>(0)
  const [cards, setCards] = useState<TFinalHistogramCard[]>([])
  const [containerWidth, setContainerWidth] = useState(295)

  // Определяем ширину карточки и количество видимых карточек и ширину экрана
  useEffect(() => {

      const handleResize = () => {
        const screenWidth = window.innerWidth;
        setScreenWidth(screenWidth);
        const containerW = (screenWidth * 0.90) - (screenWidth > 404 ? 133 : 295) - (screenWidth > 404 ? 120 : 60)
        const numberOfVItems = screenWidth >= 404 ? Math.floor(containerW / 133) : Math.floor(containerW / 295);
       const contFinalWidth = (numberOfVItems * (screenWidth >= 404 ? 133 : 295)) > containerW ? (numberOfVItems-1) * (screenWidth >= 404 ? 133 : 295) : numberOfVItems * (screenWidth >= 404 ? 133 : 295)
        setContainerWidth(contFinalWidth)
        setCurrentPosition(0)
        setNumberOfVisibleItems(contFinalWidth /(screenWidth >= 404 ? 133 : 295))
    }
    
   
    window.addEventListener('resize', handleResize);
    handleResize(); // Инициализация при монтировании
     return () => { window.removeEventListener('resize', handleResize);  } 
   
 }, []);


  
  const nextSlide = () => {
    if (numberOfVisibleItems >= cardsArray[0]?.data?.length) {

    } else {
      setCurrentPosition(() =>
      (screenWidth >= 404) ? currentPosition - 134 : currentPosition - 295
    );
    setNumberOfVisibleItems(numberOfVisibleItems+1)
    }
  };

  const prevSlide = () => {
    if (screenWidth >= 404 ? numberOfVisibleItems <= Math.floor(containerWidth/134) : 1) {
      
    } else {
      setCurrentPosition(() =>
      (screenWidth >= 404) ? currentPosition + 134 : currentPosition + 295
      );
      setNumberOfVisibleItems(numberOfVisibleItems-1)
    }
  };


  useEffect(() => {
    const cardsArr:TFinalHistogramCard[] = []
    if (cardsArray.length > 0) {
 
      const riskFactors = cardsArray[0].histogramType == 'riskFactors' ? cardsArray[0] : cardsArray[1];
      const totalDocs = cardsArray[0].histogramType == 'totalDocuments' ? cardsArray[0] : cardsArray[1];
     
      riskFactors.data.forEach((i, ind) => {
        const obj = {
          date: i.date,
          riskFactors: i.value,
          totalDocs: totalDocs.data[ind].value
        }
     cardsArr.push(obj)
      })
      setCards(cardsArr)
    }
    }, [cardsArray])
  


  return (
    <div
      className="histogramTable"
      style={{
        height: "260px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "900",
            textTransform: "uppercase",
          }}
        >
          Общая сводка
        </h1>
        { !isLoading && <p style={{ fontSize: "18px", color: "#949494" }}>
          Найдено {cardsArray[0]?.data?.length} вариантов
        </p>}
        
      </div>

      <div
        className="histogramTable_carouseldiv"
        style={{
          marginBottom: "40px 0",
          display: 'flex',
          justifyContent: "flex-start",
        }}
      >
        <button onClick={prevSlide} className="histogramTable_arrow"
          style={{ border: "none", borderRadius: '8px', cursor: 'pointer', }}
        ><img src="../../../src/icons/shevron_right.svg" /></button>
        <div
          className="histogramTable_scrolldiv"
          style={{
            display: "flex",
            border: "4px solid #029491",
            borderRadius: "8px",
            width:'fit-content',
            overflowX:'hidden',
          }}>
          <div
            className="histogramTable_TableHead"
            style={{
              display: "flex",
              color: "white",
              backgroundColor: "#029491",
              alignItems: "center",
              zIndex:'3'
            }}>
            <p>Период</p>
            <p>Всего</p>
            <p>Риски</p>
          </div>
          {isLoading ? <div style={{width: '300px', display:'flex', alignItems:'center', justifyContent:'center'}}><div className="loader" ></div></div> :
           <div
            style={{
            borderRadius: "8px",
            width: `${containerWidth}px`,
            minWidth: `${containerWidth}px`,
            maxWidth:`${containerWidth}px`,
            overflow:'hidden'
              }}>
              <div style={{
                display: "flex",
                borderRadius: "8px",
                transform: `translateX(${currentPosition}px)`,
                transition: "transform 0.5s ease-in-out",
              }}>
             {cards.map((item) => (
              <React.Fragment key={item.date+item.totalDocs}>
                <HistogramCard card={item} />  
              </React.Fragment>
              ))}
              </div>
          </div>
         }
        </div>
        <button onClick={nextSlide} className="histogramTable_arrow" style={{ border: "none", borderRadius: '8px', cursor: 'pointer', }} >
          <img src="../../../src/icons/shevron_right.svg" style={{ rotate: "180deg", cursor: 'pointer' }} /></button>
      </div>
    </div>
  );
};

export default HistogramTable;

