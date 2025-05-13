import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchSection from "../../components/SearchSection/SearchSection";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useHistogramSearchMutation, useObjectSearchMutation } from '../../services/objectSearchService';
import { THistogramData, ThistogramResult, TObjectResult } from '../../types/types';
// import { useDocumentsSearchMutation } from '../../services/documentsService';
import SearchResultSection from "../../components/SearchResultSection/SearchResultSection";
import { useNavigate } from 'react-router-dom';


const SearchPage = () => {
	const [reqestHistogram, { }] = useHistogramSearchMutation();
	const [requestObject, { }] = useObjectSearchMutation();
	const {isAuthenticated, token} = useAuth();
	const [isSearching, setIsSearching] = useState(false)


	const [histogramResponse, setHistogramResponse] = useState<ThistogramResult>([]);
	const [objectSearchResponse, setObjectSearchResponse] = useState<TObjectResult[]>([])
  const [openResults, setOpenResults]  = useState(false)
	
		async function sendForm(formData:any) {
			const obj:THistogramData  = {
				"issueDateInterval": {
					"startDate": formData.startDate,
					"endDate": formData.endDate
				},
				"searchContext": {
					"targetSearchEntitiesContext": {
						"targetSearchEntities": [
							{
								type: "company",
								sparkId: null,
								entityId: null,
								"inn": formData.inn,
								"maxFullness": true,
								"inBusinessNews": null
							}
						],
						"onlyMainRole": true,
						"tonality": formData.tone,
						"onlyWithRiskFactors": false,
						"riskFactors": {
							"and": [],
							"or": [],
							"not": []
						},
						"themes": {
							"and": [],
							"or": [],
							"not": []
						}
					},
					"themesFilter": {
						"and": [],
						"or": [],
						"not": []
					}
				},
				"searchArea": {
					"includedSources": [],
					"excludedSources": [],
					"includedSourceGroups": [],
					"excludedSourceGroups": []
				},
				"attributeFilters": {
					"excludeTechNews": true,
					"excludeAnnouncements": true,
					"excludeDigests": true
				},
				"similarMode": "duplicates",
				"limit": formData.documentsCount,
				"sortType": "sourceInfluence",
				"sortDirectionType": "desc",
				"intervalType": "month",
				"histogramTypes": [
					"totalDocuments",
					"riskFactors"
				]
			}
	
			
	
			if (token) {
				setOpenResults(true)
				setIsSearching(true)
				try {
					const result = await reqestHistogram({ data: obj, token: token }).unwrap();
					const result2 = await requestObject({ data: obj, token: token }).unwrap();
					setHistogramResponse(result.data);
					setObjectSearchResponse(result2.items)
					setIsSearching(false)
				} catch (err) {
					setIsSearching(false)
		 console.log(err)
				}
			}
		}


	 
	
	
		const navigate = useNavigate();

	const redirect = () => {
		navigate('/login');
	}

	useEffect(() => {
		if (!isAuthenticated && !localStorage.getItem('token')&& !token) {
			redirect()
		}
	}, [isAuthenticated])
	
	return (
		<div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
		<Header />
			{!openResults && <SearchSection sendForm={sendForm} />}
			{openResults && <SearchResultSection
				isSearching={isSearching}
				histogramResponse={histogramResponse}
				objectSearchResponse={objectSearchResponse}
			/>}
		<Footer />
		</div>
		
	)
}

export default SearchPage