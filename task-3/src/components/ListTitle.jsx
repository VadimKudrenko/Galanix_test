import React from 'react'

export default function ListTitle({favoriteCounter}) {
  return (
    <div className='result-list result-list-title'>
      <div className='result-list__item result-list__item-title result-list__item-id'><p>id</p></div>
      <div className='result-list__item result-list__item-title result-list__item-alpha-two-code'><p>Alpha two code</p></div>
      <div className='result-list__item result-list__item-title result-list__item-country'><p>Country</p></div>
      <div className='result-list__item result-list__item-title result-list__item-domains'><p>Domains</p></div>
      <div className='result-list__item result-list__item-title result-list__item-name'><p>Name</p></div>
      <div className='result-list__item result-list__item-title result-list__item-web-pages'><p>Web-pages</p></div>
      {favoriteCounter === 0 
        ?
        <div className='result-list__item result-list__item-title result-list__item-favorite'><p>Favorite</p></div>
        :
        <div className='result-list__item result-list__item-title result-list__item-favorite'><p>Added to favorite: {favoriteCounter}</p></div>
      }
    </div>
  )
}
