import React, {useContext,useState,memo} from 'react';
import {CLICK_CELL} from './main';

const Td =  memo(({rowIndex, cellIndex,population,dispatch}) => {

  const [data,setData] = useState(0);



  const onClickTd = () => {
    //setData(data+1);
    dispatch({type : CLICK_CELL, row : rowIndex, cell : cellIndex ,data:setData(data+1)});
  };

  return (
      <td onClick={onClickTd}>{data}</td>
  );

});

export default Td;
