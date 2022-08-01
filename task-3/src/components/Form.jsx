import { useState } from 'react'

export default function Form({addToStorage, storageClean, favoriteClean}) {
  const [country, setCountry] = useState('') ;

  const getCountry = async (country) => {
    let url = 'http://universities.hipolabs.com/search?country=' + country;

    let response = await fetch(url);
    let result = await response.json();

    let resultList = result.map((item, index) => {
      const newListItem = {
        // id: Date.now(),
        id: index + 1,
        checked: false,
        ...item,
      }
      return newListItem
    })
    addToStorage(resultList);
  }
 
  return (
    <div className='form-wrapper'>
      <input className='form-input' onChange={ (e) => setCountry(e.target.value) } type='text' value={country} placeholder='write country'></input>
      <button className='form-btn' onClick={ () => {getCountry(country); setCountry('');}}>Confirm</button>
      <button className='form-btn' onClick={() => { storageClean(); favoriteClean() }}>Reset</button>
    </div>
  )
}
