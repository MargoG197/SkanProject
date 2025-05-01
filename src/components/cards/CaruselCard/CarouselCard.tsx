import React from 'react';
import './index.css'

interface CarouselCardProps {
  svg: string
  text: string;
screen: 'mobile'|'pc'
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  text,
  svg,
  screen
}) => {
  return (
    <div
    className='card'
    style={{
    backgroundColor: '#ffffff',
    color: '#333333',
    width: `${screen == 'mobile' ? 290 : 400}px`,
    minWidth: `${screen == 'mobile' ? 290 : 400}px`,
    height: `${screen == 'mobile' ? 188 : 225}px`,
    minHeight: `${screen == 'mobile' ? 188 : 225}px`,
    borderRadius: '12px',
    padding: `${screen == 'mobile' ? '12px' : '30px 24px'}` ,
    boxSizing:'border-box',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    lineHeight: '1.5',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
      }}
    >
    <img src={svg} alt="card" style={{ width: `${screen == 'mobile' ? 35 : 65}px`,
		 height: `${screen == 'mobile' ? 45 : 79}px` }} />
    <p style={{ margin: 0, textAlign:'left'}}>{text}</p>
    </div>
  );
};

export default CarouselCard;