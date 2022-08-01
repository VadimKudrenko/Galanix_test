import React from 'react'

export default function ResultList({listItem, addToFavorite, removeFromFavorite}) {

  const getChecked = (target) => {

    if (target.checked === true) {
      addToFavorite(listItem);
    }
    else {
      removeFromFavorite(listItem);
    }

  }
  return (
    <div>
      <li className='result-list'>
        <div className='result-list__item result-list__item-id'><p>{listItem.id}</p></div>
        <div className='result-list__item result-list__item-alpha-two-code'><p>{listItem.alpha_two_code}</p></div>
        <div className='result-list__item result-list__item-country'><p>{listItem.country}</p></div>
        <div className='result-list__item result-list__item-domains'>{listItem.domains.map((item, index) => <p key={index}>{item}</p>)}</div>
        <div className='result-list__item result-list__item-name'><p>{listItem.name}</p></div>
        <div className='result-list__item result-list__item-web-pages'>{listItem.web_pages.map((item, index) => <a key={index} href={item}>{item}</a>)}</div>
        <div className='result-list__item result-list__item-favorite'><input type="checkbox" onChange={(e) => getChecked(e.target)} checked={listItem.checked}  name='favorite' /></div>
      </li>
    </div>
  )
}
