import { useEffect, useRef, useState } from "react";
import HistogramCard from "../cards/HistogramCard/HistogramCard";
import "./index.css";



type THistogramTableProps = {
  cardsArray: {
    date: string;
    total: number;
    risks: number;
  }[];
};

const HistogramTable: React.FC<THistogramTableProps> = ({ cardsArray }) => {

  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState<number>(0); // Состояние для хранения ширины
  const [numberOfVisibleItems, setNumberOfVisibleItems] = useState<number>(0)
  const blockRef = useRef<HTMLDivElement>(null);
  
      // Определяем ширину карточки и количество видимых карточек и ширину экрана
  useEffect(() => {
        
    const handleResize = () => {
      if (blockRef.current) {
        const blockWidth = blockRef.current.getBoundingClientRect().width;
        setWidth(blockWidth);

        const screenWidth = window.innerWidth;
        setScreenWidth(screenWidth);
        screenWidth >= 404 ? setNumberOfVisibleItems(Math.ceil(blockWidth/133)) : setNumberOfVisibleItems(Math.ceil(blockWidth/295))
        };
      }

    window.addEventListener('resize', handleResize);
    handleResize(); // Инициализация при монтировании
    
    return () => { window.removeEventListener('resize', handleResize);  }
        }, []);

  const nextSlide = () => {
    if (numberOfVisibleItems >= cardsArray.length) {
      
    } else {
      setCurrentPosition(() =>
      (screenWidth >= 404) ? currentPosition - 133 : currentPosition - 295
    );
    setNumberOfVisibleItems(numberOfVisibleItems+1)
    }
  };

  const prevSlide = () => {
    if (screenWidth >= 404 ? numberOfVisibleItems <= Math.ceil(width/133) : 1) {
      
    } else {
      setCurrentPosition(() =>
      (screenWidth >= 404) ? currentPosition + 133 : currentPosition + 295
      );
      setNumberOfVisibleItems(numberOfVisibleItems-1)
    }
    
  };

// console.log(width, width/133, Math.ceil(width/133), numberOfVisibleItems )


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
        <p style={{ fontSize: "18px", color: "#949494" }}>
          Найдено {cardsArray.length} вариантов
        </p>
      </div>

      <div
        className="histogramTable_carouseldiv"
        style={{
          marginBottom: "40px 0",
          display: 'flex',
          justifyContent: "space-between",
          width: '95%',
        }}
      >
        <button onClick={prevSlide} className="histogramTable_arrow" style={{border:"none", borderRadius:'8px', cursor:'pointer', }}><img  src="../../../src/icons/shevron_right.svg"/></button>
        <div
          className="histogramTable_scrolldiv"
          style={{
            display: "flex",
            border: "4px solid #029491",
            borderRadius: "8px",
            maxWidth: '95%',
            overflowX:'hidden',
          }}
        >
          <div
            className="histogramTable_TableHead"
            style={{
              display: "flex",
              
              color: "white",
              backgroundColor: "#029491",
              alignItems: "center",
              zIndex:'3'
            }}
          >
            <p>Период</p>
            <p>Всего</p>
            <p>Риски</p>
          </div>
          <div
             ref={blockRef} 
            style={{
            display: "flex",
            borderRadius: "8px",
            maxWidth: '80%',
            transform: `translateX(${currentPosition}px)`,
            transition: "transform 0.5s ease-in-out",
          }}>
            {cardsArray.map((item) => (
            <HistogramCard data={item} />
          ))}
          </div>
        </div>
        <button onClick={nextSlide} className="histogramTable_arrow" style={{ border: "none", borderRadius: '8px', cursor: 'pointer', }}>
          <img src="../../../src/icons/shevron_right.svg" style={{ rotate: "180deg", cursor: 'pointer' }} /></button>
      </div>
    </div>
  );
};

export default HistogramTable;
