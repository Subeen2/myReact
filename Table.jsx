import React,{memo} from 'react';
import Tr from './Tr';

const Table = memo(({population,dispatch,data}) => {
  return (
    <table>

      {Array(population.length).fill().map((tr, i) => (<Tr key={i} rowIndex={i} data={data} dispatch={dispatch} population={population} />))}

    </table>
  );
});

export default Table;
