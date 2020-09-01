import React , {useState , useReducer, useContext} from 'react';
import Table from './Table';

const initialState = { // 초기값
  name : '',
  population : [1,2,3,4],
  data : 0,
}

export const CLICK_CELL = 'CLICK_CELL';

const reducer = (state, action) => {
  switch (action.type) {
    case CLICK_CELL:
        console.log("row : "+action.row+" ,cell : "+action.cell);

      return {
        ...state,
        data :action.data+1,
      };
      break;

    case dafault :
      return;
    }
}

const Practice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {name, population, data} = state;

  return (
    <>
     <Table population={population} dispatch={dispatch} data={data} />
    </>
  )

};

export default Practice;
