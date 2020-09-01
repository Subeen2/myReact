import React , {memo} from 'react';
import Td from './Td';

const Tr = memo(({population,rowIndex,dispatch,data}) => {
  return (
    <tr>
      {Array(population.length).fill().map((td, i) => (
       <Td key={i} rowIndex={rowIndex} dispatch={dispatch} cellIndex={i} data={data} population={population}>{''}</Td>
        )
      )}
    </tr>
  );
});

export default Tr;
