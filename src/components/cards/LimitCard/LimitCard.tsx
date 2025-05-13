import { useEffect, useState } from "react";
import { TAccInfo } from "../../../types/types";
import { useLazyRequestAccInfoQuery } from "../../../services/loginService";
import { useAuth } from "../../../context/AuthContext";
import "./index.css"

const LimitCard = () => {
    const { token } = useAuth(); // Получаем данные из контекста
    const [userData, setUserData] = useState<TAccInfo | null>(null);
    const [requestUserInfo, {isLoading}] = useLazyRequestAccInfoQuery();

  
  useEffect(() => {
    if (token) {
      requestUserInfoFunc()
    }
  },[token])

  async function requestUserInfoFunc(){
    if (token) {
   try {
     const result = await requestUserInfo(token).unwrap();
     setUserData(result)
    } catch (err) {
      console.log(err)
    }
    }
  }
  
  return (
    <div
      className="limitCard"
      style={{
        width: "175px",
        // minWidth:"175px",
        height: "63px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: '0 8px',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: "#D9D9D9",
        boxSizing: "border-box",
        marginRight:'20px'
      }}
    >
      {isLoading ? <div className="loader"></div> : <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              color: "#666",
              margin: "0"
            }}
          >
            Использовано компаний <b style={{
              fontSize: "14px", color: 'black'
            }}>{userData && userData.eventFiltersInfo.usedCompanyCount}</b>
          </p>
          <p
            style={{
              fontSize: "10px",
              color: "#666",
              margin: "0",
            }}
          >
            Лимит по компаниям <b style={{
              fontSize: "14px", fontWeight:'700',
              color: "#8AC540",
            }}>{userData && userData.eventFiltersInfo.companyLimit }</b>
          </p>
        </div>
      </div>
    }
      
    
    </div>
  );
};

export default LimitCard;
