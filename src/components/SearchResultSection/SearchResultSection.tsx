import React from "react";
import { TArticleResponse, ThistogramResult } from "../../types/types";
import ArticleCard from "../cards/ArticleCard/ArticleCard";
import HistogramTable from "../HistogramTable/HistogramTable"
import "./index.css"

type TSearchResultsSectionProps = {
  isSearchingArticles:boolean
	isSearching:boolean
	histogramResponse: ThistogramResult
  articles: TArticleResponse
}

const SearchResultSection:React.FC<TSearchResultsSectionProps> = ({isSearchingArticles,	isSearching,	histogramResponse,  articles}) => {
  
console.log(articles, 'articles')




  return (
    <div className="searchResultsPage" style={{display:'flex', flexDirection:'column',  height: 'fit-content', justifyContent:'space-between', gap:'70px'}}>
      <div className="searchResultsSection_textDiv" style={{display:'flex', width: '100%', height: 'fit-content', justifyContent:'space-between', }}>
        <div style={{display:'flex', flexDirection:'column', width: '70%', height: 'fit-content', maxWidth:'509px'}}>
          <h1  style={{ fontSize: '40px', fontWeight:'900', textTransform:'uppercase' }}>Ищем. Скоро будут результаты</h1>
          <p  style={{fontSize:'20px', }}>Поиск может занять некоторое время, просим сохранять терпение.</p>
        </div>
        <img  className="searchResultsSection_textDiv_img"  src="../../../src/icons/searchLady.svg"/>
      </div>
      <HistogramTable cardsArray={histogramResponse} isLoading={isSearching} />
      {isSearchingArticles ? <div className="loader"></div>  : 
      <div className="articlesCardSection" style={{ display: 'flex', overflowX:'hidden', flexWrap:'wrap'}}>
      {articles.map((article) => (
        <React.Fragment key={article.ok.id}>
          <ArticleCard data={article.ok}  />
        </React.Fragment>
    ))}
    </div>}
      
    </div>

  )
}

export default SearchResultSection