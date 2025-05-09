import React from "react"
import "./index.css";



type THistogramCardProps = {
  data: {
  date: string
  total: number
  risks:number
  }
}

const HistogramCard: React.FC<THistogramCardProps> = ({data}) => {
  


  return (
    <div className="histogramCard" style={{
      margin: "16px 0",
      padding:"4px 0",
      borderLeft:"2px solid #e0e0e0",
      display: "flex",
      flexDirection: "column",
      justifyContent:'space-between',
      alignItems: "center",
      width: '133px',
      height: '155px',
      minWidth: '133px',
      minHeight: '155px',
    }}>
      {/* Дата */}
      <div style={{
        fontSize: "18px",
        fontWeight: "500",
      }}>
        {data.date}
      </div>
      {/* Общее количество */}
      <div style={{
        fontSize: "18px",
        fontWeight: "600",
      }}>
        {data.total}
      </div>
      {/* Риски */}
      <div style={{
        fontSize: "18px",
        fontWeight: "500",
      }}>
        <span>{data.risks}</span>
      </div>
    </div>)
}

export default HistogramCard