import React from 'react';

const Lists = ({list}) =>{
  var shoppinglist = list.map(a => {
    return (
      <div className = "item" key = {a.id}>
      <li> {a.content} </li>
      </div>
    )
  })
  return(
    <div className = "shoppinglist">
    {shoppinglist}
    </div>
  )
}

export default Lists;
