import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchSection from "../../components/SearchSection/SearchSection";




const SearchPage = ()=>{
	
	return (
		<div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
		<Header />
		<SearchSection />
		<Footer />
		</div>
		
	)
}

export default SearchPage