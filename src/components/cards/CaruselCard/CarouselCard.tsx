import React from 'react';
import './index.css'

interface CarouselCardProps {
  svg: string
  text: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  text,
  svg
}) => {
  return (
    <div
    className='card'
    style={{
    backgroundColor: '#ffffff',
    color: '#333333',
      width: '400px',
    minWidth: '400px',
      height: '255px',
    minHeight: '255px',
    borderRadius: '12px',
    padding: '30px 24px',
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
    <img src={svg} alt="card" style={{ width: '65px', height: '79px' }} />
    <p style={{ margin: 0, textAlign:'left'}}>{text}</p>
    </div>
  );
};

export default CarouselCard;