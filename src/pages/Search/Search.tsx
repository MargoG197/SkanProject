import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchSection from "../../components/SearchSection/SearchSection";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useHistogramSearchMutation, useObjectSearchMutation } from '../../services/objectSearchService';
import { THistogramData, ThistogramResult, TObjectResult } from '../../types/types';
import { useDocumentsSearchMutation } from '../../services/documentsService';
import SearchResultSection from "../../components/SearchResultSection/SearchResultSection";



const SearchPage = ()=>{
	const [reqestHistogram, {}] = useHistogramSearchMutation();
  const [requestObject, { }] = useObjectSearchMutation();
  const [requestArt, { }] = useDocumentsSearchMutation();

	const [isSearching, setIsSearching] = useState(false)
	const [isSearchingArticles, setIsSearchingArticles] = useState(false)
	const { token } = useAuth();
	const [histogramResponse, setHistogramResponse] = useState<ThistogramResult>([]);
	const [objectSearchResponse, setObjectSearchResponse] = useState<TObjectResult[]>([])
	const [articles, setArticles] = useState<any[]>([])
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
					console.log(result, "reqestHistogram")
					console.log(result2, "requestObject")
				} catch (err) {
					setIsSearching(false)
		 console.log(err)
				}
			}
		}


	  async function requestArticles(arr:string[]) {
			// {ids: string[]}
			if (token) {
				setIsSearchingArticles(true)
				try {
					const result = await requestArt({ idObj: {ids: arr }, token: token }).unwrap();
					console.log(result, "articles")
					setArticles(result)
					setIsSearchingArticles(false)
				} catch (err) {
					console.log(err)
					setIsSearchingArticles(false)
				}
			}
	}
	
		let count = 0;
		let lastIndex = 10;
	
	useEffect(() => {
		if (objectSearchResponse.length >0) {
				const arr: string[] = [];
			const objForAction = objectSearchResponse.slice(count, lastIndex)
			objForAction.forEach(item => arr.push(item.encodedId));
			console.log({ids: arr }, "arr")
			requestArticles(arr)
			}
			
		}, [objectSearchResponse])
	
	
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
				isSearchingArticles={isSearchingArticles}
				isSearching={isSearching}
				histogramResponse={histogramResponse}
        articles={articles}
			/>}
		<Footer />
		</div>
		
	)
}

export default SearchPage