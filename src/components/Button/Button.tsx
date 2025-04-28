import './index.css'


type TButtonProps = {
  onClickFunc: () => void
  btnText: string
  bg:string
}


const Button:React.FC<TButtonProps> = ({onClickFunc, btnText, bg}) => {
  
  return (
    <>
      <button
        className='button'
      onClick={onClickFunc}
      style={{
      width: '100%',
      padding: '12px 0',
      backgroundColor: `${bg}`,
      color: 'white',
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