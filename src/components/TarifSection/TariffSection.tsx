import { prices } from "../../mockData/mockData";
import TarifCard from "../TariffCard/TariffCard";
import React from "react";


const TariffSection = () => {
  

  return (
    <div style={{
      display: 'flex',
      flexDirection:'column',
     maxWidth: '1320px',
      justifyContent: 'space-between',
      alignSelf:'center'
    }}>
      <div
         style={{
          fontWeight: '900',
          fontSize: '45px',
          marginBottom: '70px',
          justifyItems: 'flex-start'
        }}
      >
        Наши тарифы
    </div>
      
       <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '37px',
        justifySelf: 'center'
      }}
    >
     
      {
      prices.map((price, index) =>
      <React.Fragment key={index}>
        <TarifCard isActive={ index == 0 ? true : false} tarif={price}/>
      </React.Fragment> 
    )
    } 
    </div>
    </div>
   
    
  )
}

export default TariffSection;