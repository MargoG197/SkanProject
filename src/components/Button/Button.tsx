import { JSX } from 'react'
import './index.css'


type TButtonProps = {
  onClickFunc: () => void
  btnText: string|JSX.Element
  bg: string
  textColor: string
  maxWidth?: number
  disabled?:boolean
}


const Button:React.FC<TButtonProps> = ({onClickFunc, btnText, bg, textColor, maxWidth= 355, disabled=false}) => {
  
  return (
    <>
      <button
      disabled={disabled}
      className='button'
      onClick={onClickFunc}
      style={{
      height: '59px',
      width: '100%',
      maxWidth:`${maxWidth}px`,
      padding: '12px 0',
      backgroundColor: `${bg}`,
      color: `${textColor}`,
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'background-color 0.3s',
      }}>{btnText}</button>
    </>
    
  )
}

export default Button;