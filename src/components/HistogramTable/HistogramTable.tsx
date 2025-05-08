import HistogramCard from "../cards/HistogramCard/HistogramCard"




type THistogramTableProps = {
  cardsArray: {
  date: string
  total: number
  risks:number}[]
}



const HistogramTable:React.FC<THistogramTableProps> = ({cardsArray}) => {
  

  return (
    <div className="histogramTable"
    style={{height: '260px', width: '100%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'flex-start'}}
    >
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
      <h1 style={{ fontSize: '30px', fontWeight:'900', textTransform:'uppercase' }}>Общая сводка</h1>
      <p style={{fontSize:'18px', color:'#949494'}}>Найдено {cardsArray.length} вариантов</p>
      </div>
      
      <div className="histogramTable_carouseldiv">
        <div className="histogramTable_scrolldiv" style={{ display: 'flex', border:'1px solid #029491', borderRadius:'8px'  }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-beetween',
          color: 'white',
          backgroundColor: '#029491',
            width: '133px',
          alignItems:'center'
        }}><p>Период</p>
          <p>Всего</p>
          <p>Риски</p>
        </div>
          {cardsArray.map((item) => (
            <HistogramCard data={item} />
         ))}
      </div>
      </div>
      
    </div>
  )
  
}

export default HistogramTable