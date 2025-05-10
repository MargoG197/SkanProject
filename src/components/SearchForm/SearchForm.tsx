import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { validateINN, validateDates } from './helperFunctions';
import "./index.css"
import { useAuth } from '../../context/AuthContext';
import { useHistogramSearchMutation, useObjectSearchMutation } from '../../services/objectSearchService';
import { THistogramData, ThistogramResult, TObjectResult } from '../../types/types';
import { useDocumentsSearchMutation } from '../../services/documentsService';

// import AuthForm from '../AuthForm/AuthForm';
type TSearchFormProps = {
  setIsSearching:React.Dispatch<React.SetStateAction<boolean>>
}

const SearchForm:React.FC<TSearchFormProps> = ({setIsSearching}) => {


  const [reqestHistogram, { }] = useHistogramSearchMutation();
  const [requestObject, { }] = useObjectSearchMutation();
  const [requestArt, { }] = useDocumentsSearchMutation();


  const [innError, setInnError] = useState<null | string>(null)
  const [startDateError, setStartDateError] = useState<null | string>(null);
  const [endDateError, setEndDateError] = useState<null | string>(null)
  const [disabled, setDisabled] = useState(true);
  const [histogramResponse, setHistogramResponse] = useState<ThistogramResult[]>([]);
  const [objectSearchResponse, setObjectSearchResponse] = useState<TObjectResult[]>([])
  const [formData, setFormData] = useState({
    inn: '',
    tone: 'any',
    documentsCount: NaN,
    startDate: '',
    endDate: '',
    completeness: {
      businessContext: false,
      mainRole: false,
      riskFactors: false,
      technicalNews: false,
      announcements: false,
      newsDigests: false,
    }
  });

  const { token } = useAuth();

  useEffect(() => {
    if (validateINN(formData.inn).isValid && formData.documentsCount && formData.endDate && formData.startDate && startDateError==null && endDateError==null) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let { name, value, type } = e.target;
    // console.log(name, value, type )
    if (name == 'inn') {
      value = value.replace(/\D/g, '')
      if (value.length === 10 || value.length === 12) {
        const result = validateINN(value)
        if (result.error) {
          setInnError(result.error)
        } else {
          setInnError(null)
        }
      }
    }
  const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCompletenessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      completeness: {
        ...prev.completeness,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleBlur = () => {
    if (formData.startDate, formData.endDate) {
      const result = validateDates(formData.startDate, formData.endDate);
      console.log(result)
      if (result.isValid == false) {
        result.errors.startDate ? setStartDateError(result.errors.startDate) : result.errors.dateRange ?setStartDateError(result.errors.dateRange) : setStartDateError(null)
        result.errors.endDate ? setEndDateError(result.errors.endDate) : setEndDateError(null);
      } else {
        setStartDateError(null);
        setEndDateError(null)
      }
    }
  };


  async function sendForm() {



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
      try {
        const result = await reqestHistogram({ data: obj, token: token }).unwrap();
        const result2 = await requestObject({ data: obj, token: token }).unwrap();
        setHistogramResponse(result.data);
        setObjectSearchResponse(result2.items)
        setIsSearching(true)
        console.log(result, "reqestHistogram")
        console.log(result2, "requestObject")
    } catch (err){
   console.log(err)
      }
    }
  }


  async function requestArticles(arr:string[]) {
    // {ids: string[]}
    if (token) {
      try {
        const articles = await requestArt({ idObj: {ids: arr }, token: token }).unwrap();
        console.log(articles, "articles")
      } catch (err) {
        console.log(err)
      }
    }
}

  let count = 0;
  let lastIndex = 10;

  useEffect(() => {
    const arr: string[] = [];
    const objForAction = objectSearchResponse.slice(count, lastIndex)
    objForAction.forEach(item => arr.push(item.encodedId));
    console.log({ids: arr }, "arr")
    requestArticles(arr)
  }, [objectSearchResponse])


  return (
    <form 
      className='searchForm_form'
      onSubmit={handleSubmit}
      style={{
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0 1px 10px rgba(0,0,0,0.4)',
        display: 'flex',
        justifyContent: 'space-between',
        height: '534px',
        boxSizing:'border-box',
      }}
    >
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around',}}>
        {/* ИНН компании */}
        <div style={{ height: '93px', display: 'flex', flexDirection: 'column', justifyContent:'space-around'}}>
        <label style={{ display: 'block', }}>
          ИНН компании*
        </label>
          <input
          placeholder='10 цифр'
          type="text"
          name="inn"
          value={formData.inn}
          onChange={handleChange}
          required
          style={{
            height:'43px',
            padding: '3px 10px',
            boxSizing:'border-box',
            border: innError ? '1px solid red' :'1px solid #d1d5db',
            borderRadius: '8px',
            outline: innError ? '1px solid red' :'1px solid #d1d5db',
            boxShadow: '0 0 0 2px rgba(59, 130, 246, 0)',
            transition: 'box-shadow 0.2s, border-color 0.2s'
          }}
          />
          {innError && <p style={{ color:'red', padding:'0', margin:'0', fontSize:'12px' }}>{innError}</p>}
      </div>
      {/* Тональность */}
      <div style={{ height: '93px', display: 'flex', flexDirection: 'column', justifyContent:'space-around'}} >
        <label style={{ display: 'block' }}>
          Тональность
        </label>
        <select
          name="tone"
          value={formData.tone}
          onChange={handleChange}
          style={{
            height:'43px',
            padding: '3px 10px',
            boxSizing:'border-box',
            border: '1px solid #d1d5db',
            borderRadius: '0.375rem',
            outline: 'none',
            boxShadow: '0 0 0 2px rgba(59, 130, 246, 0)',
            transition: 'box-shadow 0.2s, border-color 0.2s'
          }}
        >
          <option value="any">Любая</option>
          <option value="positive">Позитивная</option>
          <option value="negative">Негативная</option>
          <option value="neutral">Нейтральная</option>
        </select>
      </div>
      {/* Количество документов */}
      <div style={{ height: '93px', display: 'flex', flexDirection: 'column', justifyContent:'space-around'}}>
        <label style={{ display: 'block',  }}>
          Количество документов в выдаче*
        </label>
        <input
          type="number"
          name="documentsCount"
          placeholder='от 1 до 1000'
          min="1"
          max="1000"
          value={formData.documentsCount}
          onChange={handleChange}
          required
          style={{
            height:'43px',
            padding: '3px 10px',
            boxSizing:'border-box',
            border: '1px solid #d1d5db',
            borderRadius: '0.375rem',
            outline: 'none',
            boxShadow: '0 0 0 2px rgba(59, 130, 246, 0)',
            transition: 'box-shadow 0.2s, border-color 0.2s'
          }}
        />
      </div>
      {/* Диапазон дат */}
      <div >
        <label style={{ display: 'block', color: '#374151', marginBottom: '0.25rem' }}>
          Диапазон поиска*
        </label>
        <div  className='searchForm_dates' style={{ display: 'flex', width:'100%',  }}>
          <div>
              <input
              className='searchForm_dateInput'
              onBlur={handleBlur}
              type="date"
              placeholder='Дата начала'
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              style={{
                border: startDateError ? "1px solid red" : '1px solid #d1d5db',
                borderRadius: '4px',
                outline: 'none',
                height: '43px',
              }}
              />
               {startDateError && <p style={{ color:'red', padding:'0', margin:'0', fontSize:'12px', maxWidth:'214px'}}>{startDateError}</p>}
            </div>
            <div>
              <input
              onBlur={handleBlur}
              className='searchForm_dateInput'
              type="date"
              name="endDate"
              placeholder='Дата конца'
              value={formData.endDate}
              onChange={handleChange}
                required
              style={{
                borderRadius: '4px',
                outline: 'none',
                height: '43px',
                border: endDateError ? "1px solid red" : '1px solid #d1d5db'
                }}
              />
              {endDateError && <p style={{ color:'red', padding:'0', margin:'0', fontSize:'12px'}}>{endDateError}</p>}
          </div>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection:'column', justifyContent:'space-between', marginTop:'20px'}}>
        <div>
        <div className='searchForm_ticksSection' style={{  flexDirection: 'column', gap: '15px' }}>
            {[
            { id: 'fullness', label: 'Признак максимальной полноты', disabled:false},
            { id: 'businessContext', label: 'Упоминания в бизнес-контексте', disabled:false },
            { id: 'mainRole', label: 'Главная роль в публикации', disabled:false},
            { id: 'riskFactors', label: 'Публикации только с риск-факторами' , disabled:true},
            { id: 'technicalNews', label: 'Включать технические новости рынков', disabled:true },
            { id: 'announcements', label: 'Включать анонсы и календари' , disabled:false},
            { id: 'newsDigests', label: 'Включать сводки новостей', disabled:true }
          ].map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                id={item.id}
                name={item.id}
                checked={formData.completeness[item.id as keyof typeof formData.completeness]}
                onChange={handleCompletenessChange}
                disabled={item.disabled}
                style={{
                  height: '1rem',
                  width: '1rem',
                  borderRadius: '0.25rem',
                  marginRight: '0.5rem',
                }}
              />
              <label htmlFor={item.id} style={{ color: `${item.disabled==true ? 'gray' : 'black'}`}}>
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>
        {/* Кнопка поиска */}
      <div className='searchForm_buttonDiv'>
      <Button onClickFunc={sendForm} btnText="Поиск" bg='#5970FF' textColor='#FFFFFF' maxWidth={305} disabled={disabled} />
      <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '1rem', margin:'0'}}>
      * Обязательные к заполнению поля
      </p>
      </div>
      </div> 
    </form>
  );
}

export default  SearchForm