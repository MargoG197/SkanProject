import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TariffSection from "../../components/TarifSection/TariffSection";
import PicSection from "../../components/PicSection/PicSection";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import TitleSection from "../../components/TitleSection/TitleSection";

const Main = () => {
  



  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Header />
      <TitleSection />
      <AboutUsSection />
      <PicSection />
      <TariffSection />
      <Footer />
    </div>
  )

}

export default Main;