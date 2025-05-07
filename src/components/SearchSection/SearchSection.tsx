import SearchForm from "../SearchForm/SearchForm";


const SearchSection = () => {
  

  return (
    
    <div style={{
      width:'100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      boxSizing: 'border-box',
      marginBottom: '64px',
      marginTop:'69px',
    }}>
      <div
      style={{
        width:'90%',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
      }}
      >
        <div className="searchTitle" style={{
          display: 'flex',
          height: '214px',
          width: '100%',
           marginBottom:'47px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width:'50%',
        }}>
            <h1 style={{fontSize:'40px', fontWeight: '900', textTransform:'uppercase' }}> Найдите необходимые данные в пару кликов.</h1>
          <p style={{fontSize:'20px'}}>Задайте параметры поиска. <br />Чем больше заполните, тем точнее поиск</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              width:'50%',
            }}
          >
            <img src="../../../src/icons/Document.svg" style={{width:'91px', height:'auto'}}/>
            <img src="../../../src/icons/Folders.svg" style={{width:'140px', height:'auto'}} /> 
          </div>
      </div>
        <div className="searchArea" style={{ width: '100%', display: 'flex', alignItems:'center', justifyContent:'space-between' }}>
         <div style={{width:'50%'}}>
        <SearchForm />
          </div>
        <img src="../../../src/icons/SearchPic.svg" style={{width:'40%', height:'auto'}}/>
        </div>
        
   </div>
    </div>
  );

}

export default SearchSection