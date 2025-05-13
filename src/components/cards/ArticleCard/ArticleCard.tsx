import { TArtcile } from "../../../types/types"
import Button from "../../Button/Button";
import { parseXmlText, countWordsAccurate } from "./helperFunction";
import "./index.css"

type TArticleCardProps = {
  data: TArtcile;
}

const ArticleCard:React.FC<TArticleCardProps> = ({data}) => {
  // console.log(data, 'data')
  const handleClick = () => {
    window.open(data.url, '_blank')
  };
  
  const cardDate = new Date(data.issueDate)
  const day = String(cardDate.getDate()).padStart(2, '0');
  const month = String(cardDate.getMonth() + 1).padStart(2, '0'); // Месяцы 0-11
  const year = cardDate.getFullYear();
  const dateString = `${day}.${month}.${year}`;

  return (
  
    <div className="articleCard" style={{
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
      border: "1px solid #eaeaea",
      color: "#333"
    }}>
      {/* Заголовок и дата */}
      <div style={{
        display: "flex",
        justifyContent: "flex-start",
        gap:'10px',
        alignItems: "center",
        marginBottom: "16px",
        fontSize: "16px",
        color: "#949494",
        cursor:''
      }}>
        <p style={{color:'#949494'}}>{dateString}</p>
        <p ><a href={data.url ? data.url : ''} style={{ textDecoration: `${data.url ? 'underline': 'none'}`, color:'#949494', cursor:`${data.url ? "pointer" : "unset"}` }}>{data.source.name}</a></p>

      </div>
      {/* Основной заголовок */}
      <h2 style={{
        margin: "0 0 16px 0",
        fontSize: "22px",
        lineHeight: "1.3",
        color: "#222"
      }}>
        {data.title.text}
      </h2>

      {/* Категория */}
      {data.attributes.isTechNews && <div style={{
        display: "inline-block",
        padding: "4px 8px",
        backgroundColor: "#FFB64F",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "500",
        marginBottom: "16px"
      }}>
       Техничские новости
      </div>}
      {!data.attributes.isTechNews && <div style={{
        display: "inline-block",
        padding: "4px 8px",
        backgroundColor: "#FFB64F",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "500",
        marginBottom: "16px"
      }}>
       Другие новости
      </div>}
      {data.attributes.isAnnouncement && <div style={{
        display: "inline-block",
        padding: "4px 8px",
        backgroundColor: "#FFB64F",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "500",
        marginBottom: "16px"
      }}>
       Анонс
      </div>}
      {data.attributes.isDigest && <div style={{
        display: "inline-block",
        padding: "4px 8px",
        backgroundColor: "#FFB64F",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "500",
        marginBottom: "16px"
      }}>
       Дайджест
      </div>}
      <div style={{
        marginBottom: "20px",
        lineHeight: "1.6",
        fontSize: "15px",
        overflowY: 'auto',
        maxHeight:'400px'
      }}>
          <div style={{ margin: "0 0 12px 0",  }}>
            {parseXmlText(data.content.markup)}
          </div>
      </div>

      {/* Футер карточки */}
      <div style={{
        display: "flex",
        justifyContent: `${data.url ? "space-between" : "flex-end"}`,
        alignItems: "center",
        fontSize: "14px",
        color: "#666",
        paddingTop: "16px",
        gap:'10px',
      }}>
        {data.url && <Button onClickFunc={handleClick} btnText="Читать в источнике" bg='#7CE3E1' textColor='black' maxWidth={223} /> } 
        <span >{countWordsAccurate(parseXmlText(data.content.markup))} слов(-a)</span>
      </div>
    </div>
  )
}

export default ArticleCard