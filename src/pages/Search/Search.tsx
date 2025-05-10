import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchSection from "../../components/SearchSection/SearchSection";
import { useState } from "react";
// import SearchResultSection from "../../components/SearchResultSection/SearchResultSection";




const SearchPage = ()=>{
	
const [isSearching, setIsSearching] = useState(false)



	return (
		<div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
		<Header />
			<SearchSection setIsSearching={setIsSearching} />
			{/* <SearchResultSection /> */}
		<Footer />
		</div>
		
	)
}

export default SearchPage