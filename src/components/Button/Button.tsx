import './index.css'


type TButtonProps = {
  onClickFunc: () => void
  btnText: string
  bg: string
  textColor:string
}


const Button:React.FC<TButtonProps> = ({onClickFunc, btnText, bg, textColor}) => {
  
  return (
    <>
      <button
      className='button'
      onClick={onClickFunc}
      style={{
      
        height: '59px',
      padding: '12px 0',
      backgroundColor: `${bg}`,
      color: `${textColor}`,
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
        }}>{btnText}</button>
    </>
    
  )
}

export default Button;