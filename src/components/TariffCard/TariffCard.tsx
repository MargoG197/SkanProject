
import { TTariff } from "../../types/types";
import Button from "../Button/Button";

type TTarifCardProps = {
isActive:boolean
tarif: TTariff
}


const TarifCard: React.FC<TTarifCardProps> = ({isActive, tarif }) => {


  return (
    <div style={{
      border: isActive ? `2px solid ${tarif.bg}` : 'none',
      borderRadius: '12px',
      width: '415px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        backgroundColor: `${tarif.bg}`,
        height: '132px',
        width: '100%',
        padding: '24px',
        boxSizing: "border-box",
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        borderTop: `2px solid ${tarif.bg}`,
        position:'relative'

      }}>
   <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '24px',
          fontWeight: '600',
          color: '#333333',
        }}>{ tarif.name}</h2>
        
        </div>
        {/* Подзаголовок */}
      <p style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666666'
      }}>{ tarif.description}</p>
        <img src={tarif.svg} alt="CKAH Logo" style={{
          width: '100px',
          height: 'auto',
          position: 'absolute',
          top: '10px',
          right:'10px'
        }} />
      </div>
      <div style={{
        padding: '24px',
        boxSizing: "border-box",
        position:'relative'
      }}>
        {isActive &&
          <span style={{
            backgroundColor: '#e6f7ff',
            color: '#1890ff',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
           fontWeight: '500',
           position: 'absolute',
            right:'10px'
          }}>Текущий тариф</span>}
          {/* Цены */}
        <div style={{
        minHeight:'60px',
        marginBottom: '24px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px',
          marginBottom: '4px'
        }}>
          <span style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#333333'
          }}>{ tarif.priceWithDiscount} ₽</span>
          <span style={{
            fontSize: '16px',
            color: '#999999',
            textDecoration: 'line-through'
          }}>{tarif.price} ₽</span>
        </div>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#666666'
        }}>{tarif.priceCondition}</p>
      </div>

      <div style={{
        height: '1px',
        backgroundColor: '#f0f0f0',
        margin: '0 -24px 16px -24px'
      }} />

      {/* Список преимуществ */}
      <div style={{
        marginBottom: '24px'
      }}>
        <h3 style={{
          margin: '0 0 12px 0',
          fontSize: '16px',
          fontWeight: '600',
          color: '#333333'
        }}>В тариф входит:</h3>
        <ul style={{
          margin: 0,
          paddingLeft: '20px',
          listStyleType: 'none'
          }}>
            {tarif.includedInPrice.map((item, index) =>(
              <li key={index} style={{
            marginBottom: '8px',
            fontSize: '14px',
            color: '#333333',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: '-20px',
              color: '#1890ff'
            }}>•</span> {item}
          </li>
            ))}
        </ul>
     </div>
        <Button onClickFunc={() => { }} btnText={isActive ? "Перейти в личный кабинет" : "Подробнее"} bg={ isActive ? '#D2D2D2' : '#5970FF'} />
      </div>

      {/* Кнопка */}
    
    </div>
 ) 
}

export default TarifCard;
