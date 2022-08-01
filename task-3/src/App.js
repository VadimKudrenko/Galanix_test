import './App.css';
// import { useState } from 'react'
import Form from './components/Form.jsx';
import ResultList from './components/ResultList.jsx';
import ListTitle from './components/ListTitle.jsx'

import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [storageList, setStorageList] = useLocalStorage([], 'storageList');
  const [favoriteCounter, setFavoriteCounter] = useLocalStorage(0, 'favoriteCounter');
  
  const addToStorage = (newList) => {
    setStorageList([...storageList, ...newList]);
  }
  
  const storageClean = () => {
    setStorageList([]);
  }
  
  const addToFavorite = (item) => {
    const pos = item.id - 1;
    const temp = [...storageList];
    temp[pos].checked = !temp[pos].checked
    setStorageList([...temp])
    setFavoriteCounter(favoriteCounter + 1);
  }

  const removeFromFavorite = (item) => {
    const pos = item.id - 1;
    const temp = [...storageList];
    temp[pos].checked = !temp[pos].checked;
    setStorageList([...temp])
    setFavoriteCounter(favoriteCounter - 1);
  }

  const favoriteClean = () => {
    setFavoriteCounter(0)
  }

  return (
    <div className="App">
      <div className='container'>
        <Form addToStorage={addToStorage} storageClean={storageClean} favoriteClean={favoriteClean}/>
        {storageList.length !== 0
          ?
          <div>
            <ListTitle favoriteCounter={favoriteCounter} />
            {storageList.map( (item, index) => <ResultList addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} listItem={item} setStorageList={setStorageList} key={index} />)}
          </div>
          :
          <div></div>
        }
      </div>
    </div>
  );
}

export default App;
