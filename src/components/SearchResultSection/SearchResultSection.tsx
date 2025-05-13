import React, { useEffect, useState } from "react";
import { TArticleResponse, ThistogramResult, TObjectResult } from "../../types/types";
import ArticleCard from "../cards/ArticleCard/ArticleCard";
import HistogramTable from "../HistogramTable/HistogramTable"
import "./index.css"
import Button from "../Button/Button";
import { useDocumentsSearchMutation } from "../../services/documentsService";
import { useAuth } from "../../context/AuthContext";

type TSearchResultsSectionProps = {
  isSearching: boolean
  histogramResponse: ThistogramResult
  objectSearchResponse: TObjectResult[]
}

const SearchResultSection: React.FC<TSearchResultsSectionProps> = ({
  isSearching,
  histogramResponse,
  objectSearchResponse
}) => {
  const { token } = useAuth();
  const [requestArt] = useDocumentsSearchMutation();
  const [isSearchingArticles, setIsSearchingArticles] = useState(false);
  const [articles, setArticles] = useState<TArticleResponse>([]);

  const [currentBatch, setCurrentBatch] = useState(0);
  const batchSize = 10;
  const [hasMoreArticles, setHasMoreArticles] = useState(true);


  async function requestArticles(ids: string[]) {
    if (!token || !ids.length) return;
    setIsSearchingArticles(true);
    try {
      const result = await requestArt({ idObj: { ids }, token }).unwrap();
      setArticles(prev => [...prev, ...result]);
    } catch (err) {
      console.error("Error loading articles:", err);
    } finally {
      setIsSearchingArticles(false);
    }
  }


  const loadNextBatch = () => {
    if (!hasMoreArticles || isSearchingArticles) return;
    const nextBatch = currentBatch + 1;
    const startIndex = nextBatch * batchSize;
    const endIndex = startIndex + batchSize;
    
    if (startIndex >= objectSearchResponse.length) {
      setHasMoreArticles(false);
      return;
    }
    if (endIndex >= objectSearchResponse.length) {
      setHasMoreArticles(false);
    }

    const batchIds = objectSearchResponse
      .slice(startIndex, endIndex)
      .map(item => item.encodedId);

    setCurrentBatch(nextBatch);
    requestArticles(batchIds);
  };

  // загружаем первые результаты при открытии страницы
  useEffect(() => {
    if (objectSearchResponse.length > 0) {
      setHasMoreArticles(objectSearchResponse.length > batchSize);
      const initialBatch = objectSearchResponse
        .slice(0, batchSize)
        .map(item => item.encodedId);
      requestArticles(initialBatch);
    }
  }, [objectSearchResponse]);

  return (
    <div className="searchResultsPage" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      marginBottom: '100px', 
      height: 'fit-content', 
      justifyContent: 'space-between', 
      gap: '70px'
    }}>
      <div className="searchResultsSection_textDiv" style={{
        display: 'flex', 
        width: '100%', 
        height: 'fit-content', 
        justifyContent: 'space-between'
      }}>
        <div style={{
          display: 'flex', 
          flexDirection: 'column', 
          width: '70%', 
          height: 'fit-content', 
          maxWidth: '509px'
        }}>
          <h1 style={{ fontSize: '40px', fontWeight: '900', textTransform: 'uppercase' }}>
            {isSearching ? "Ищем. Скоро будут результаты" : "Результаты поиска"}
          </h1>
          <p style={{ fontSize: '20px' }}>
            {isSearching ? "Поиск может занять некоторое время, просим сохранять терпение." : ""}
          </p>
        </div>
        {isSearching && <img className="searchResultsSection_textDiv_img" src="../../../src/icons/searchLady.svg" />}
      </div>

      <HistogramTable cardsArray={histogramResponse} isLoading={isSearching} />
        <div className="articlesCardSection" style={{
          display: 'flex',
          overflowX: 'hidden',
          flexWrap: 'wrap',
          overflowY: 'visible',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {articles.map((article) => (
            <ArticleCard key={article.ok.id} data={article.ok} />
          ))}
        </div>
      {(hasMoreArticles && !isSearching && articles.length > 0 ) ?(
        <Button 
          onClickFunc={loadNextBatch} 
          btnText={isSearchingArticles ? 'Загрузка...' : 'Показать больше'} 
          bg='#5970FF' 
          textColor='#fff' 
          maxWidth={355}
          disabled={isSearchingArticles}
        />
      ):( articles.length != 0 &&<p> Все результаты загружены</p> ) }
    </div>
  );
}

export default SearchResultSection;