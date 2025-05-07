import { useState } from 'react';
import Button from '../Button/Button';
import { validateINN } from './helperFunctions';


const SearchForm = () => {

const [innError, setInnError] = useState<null|string>(null)

  const [formData, setFormData] = useState({
    inn: '',
    tone: 'any',
    documentsCount: 10,
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

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        width:'100%',
        padding: '21px 39px 32px 44px',
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
        <label style={{ display: 'block', fontSize: '18px', fontWeight: 400, }}>
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
            width: '242px',
            height:'43px',
            padding: '3px 10px',
            boxSizing:'border-box',
            border: '1px solid #d1d5db',
            borderRadius: '0.375rem',
            outline: 'none',
            boxShadow: '0 0 0 2px rgba(59, 130, 246, 0)',
            transition: 'box-shadow 0.2s, border-color 0.2s'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#3b82f6';
            e.target.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.5)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#d1d5db';
            e.target.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0)';
          }}
          />
          {innError && <p style={{ color:'red', padding:'0', margin:'0', fontSize:'12px' }}>{innError}</p>}
      </div>
      {/* Тональность */}
      <div style={{ height: '93px', display: 'flex', flexDirection: 'column', justifyContent:'space-around'}} >
        <label style={{ display: 'block', fontSize: '18px', fontWeight: 400, }}>
          Тональность
        </label>
        <select
          name="tone"
          value={formData.tone}
          onChange={handleChange}
          style={{
            width: '242px',
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
        <label style={{ display: 'block', fontSize: '18px', fontWeight: 400, }}>
          Количество документов в выдаче*
        </label>
        <input
          type="number"
          name="documentsCount"
          min="1"
          max="1000"
          value={formData.documentsCount}
          onChange={handleChange}
          required
          style={{
            width: '242px',
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
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>
          Диапазон поиска*
        </label>
        <div style={{ display: 'flex', width:'100%', justifyContent:'space-between' }}>
          <div>
            <input
              type="date"
              placeholder='Дата начала'
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                outline: 'none',
                height: '43px',
              }}
            />
            </div>
            <div>
            <input
              type="date"
              name="endDate"
              placeholder='Дата конца'
              value={formData.endDate}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                outline: 'none',
                height: '43px',
              }}
            />
          </div>
          </div>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
        <div
          // style={{ marginBottom: '2rem' }}
        >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
              <label htmlFor={item.id} style={{ fontSize: '0.875rem', color: `${item.disabled==true ? 'gray' : 'black'}`}}>
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>
        {/* Кнопка поиска */}
        <div>
      <Button onClickFunc={() => { }} btnText="Поиск" bg='#5970FF' textColor='#FFFFFF'/>
      <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '1rem' }}>
      <span style={{ color: '#949494' }}>*</span> Обязательные к заполнению поля
      </p>
        </div>
      
      </div> 
    </form>
  );
}

export default  SearchForm