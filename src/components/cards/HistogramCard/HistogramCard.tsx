import React from "react"
import "./index.css";
import { TFinalHistogramCard } from "../../../types/types";



type THistogramCardProps = {
 card:TFinalHistogramCard
}

const HistogramCard: React.FC<THistogramCardProps> = ({card}) => {
  
  const cardDate = new Date(card.date)
  const day = String(cardDate.getDate()).padStart(2, '0');
  const month = String(cardDate.getMonth() + 1).padStart(2, '0'); // Месяцы 0-11
  const year = cardDate.getFullYear();
  const dateString = `${day} ${month}, ${year}`;


  return (
    <div className="histogramCard" style={{
      borderLeft:"2px solid #e0e0e0",
      display: "flex",
    }}>
      <div>
        {dateString}
      </div>
      <div>
        {card.totalDocs}
      </div>
      <div>
      <div>{card.riskFactors}</div>
      </div>
    </div>)
}

export default HistogramCard