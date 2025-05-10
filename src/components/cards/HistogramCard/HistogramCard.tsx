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
      borderLeft:"2px solid #e0e0e0",
      display: "flex",
    }}>
      <div>
        {data.date}
      </div>
      <div>
        {data.total}
      </div>
      <div>
      <div>{data.risks}</div>
      </div>
    </div>)
}

export default HistogramCard