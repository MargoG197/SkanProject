import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TariffSection from "../../components/TarifSection/TariffSection";
import PicSection from "../../components/PicSection/PicSection";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";


const Main = () => {
  



  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Header />
      <AboutUsSection />
      <PicSection />
      <TariffSection />
      <Footer />
    </div>
  )

}

export default Main;