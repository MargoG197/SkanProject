import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import AuthForm from "../../components/AuthForm/AuthForm"


const AuthPage = () => {

  return (
    <>
  <Header />
      <div style={{
        display: 'flex',
        width: 'full',
        justifyContent: 'justifyBetween'
      }}>
  <img src='../../icons/PeopleWithKey.svg' alt="CKAH Logo" style={{ width: '100px', height: 'auto' }} />
  <AuthForm />
  </div>
  <Footer />
    </>
  )

}

export default AuthPage