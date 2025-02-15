import React, {useState, useEffect} from 'react';


const StockBox = (props) => {
  let name;
  let symbol;
  if(props.stockName){
    name = props.stockName;
    symbol = props.stockSymbol;
  }
  return (
    <div className= "stockBox" onClick = {()=> props.togglePopup(name,symbol)}>
      <p>{name}</p>
    </div>
  );
}

export default StockBox;