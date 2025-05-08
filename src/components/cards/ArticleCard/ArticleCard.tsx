import { TArtcile } from "../../../types/types"
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";


type TArticleCardProps = {
  data:  TArtcile;
}


const ArticleCard:React.FC<TArticleCardProps> = ({data}) => {
  

  const navigate = useNavigate();
  
  const handleClick = () => {
  navigate(data.readMoreLink);
};

  return (
    <div style={{
      maxWidth: "641px",
      maxHeight:'694px',
      padding: "19px 30px 35px",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
      border: "1px solid #eaeaea",
      fontFamily: "Arial, sans-serif",
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
        color: "#949494"
      }}>
        <p>{data.date}</p>
        <p style={{textDecoration:'underline'}}>{data.source}</p>

      </div>
      {/* Основной заголовок */}
      <h2 style={{
        margin: "0 0 16px 0",
        fontSize: "22px",
        lineHeight: "1.3",
        color: "#222"
      }}>
        {data.title}
      </h2>

      {/* Категория */}
      <div style={{
        display: "inline-block",
        padding: "4px 8px",
        backgroundColor: "#FFB64F",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "500",
        marginBottom: "16px"
      }}>
        {data.category}
      </div>
      <div style={{width:'100%', height:'158px', maxHeight:'158px', backgroundColor:'green', borderRadius:'8px', marginBottom:'20px', textAlign:'center', }}>pictute space</div>
      {/* Текст статьи */}
      <div style={{
        marginBottom: "20px",
        lineHeight: "1.6",
        fontSize: "15px"
      }}>
        {data.content.map((paragraph, index) => (
          <p key={index} style={{ margin: "0 0 12px 0" }}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Футер карточки */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "14px",
        color: "#666",
        paddingTop: "16px"
      }}>
        <Button onClickFunc={handleClick} btnText="Читать в источнике" bg='#7CE3E1' textColor='black' maxWidth={223} />
        <span>{data.wordCount.toLocaleString()} слова</span>
      </div>
    </div>
  )
}

export default ArticleCard