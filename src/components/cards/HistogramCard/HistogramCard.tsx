import React from "react"

type THistogramCardProps = {
  data: {
  date: string
  total: number
  risks:number
  }
}

const HistogramCard: React.FC<THistogramCardProps> = ({data}) => {
  


  return (
    <div style={{
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      border: "1px solid #e0e0e0",
      display: "flex",
      flexDirection: "column",
      justifyContent:'space-between',
      alignItems: "center",
      width: '133px'
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