import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import SearchSection from "../../components/SearchSection/SearchSection";
import SearchResultSection from "../../components/SearchResultSection/SearchResultSection";




const SearchPage = ()=>{
	






	return (
		<div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
		<Header />
			{/* <SearchSection /> */}
			<SearchResultSection />
		<Footer />
		</div>
		
	)
}

export default SearchPage