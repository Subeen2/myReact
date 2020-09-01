import React, {useCallback} from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';


const App=()=>{
  const [category, setCategory] = React.useState('all');
  const onSelect = useCallback((category)=>{
    return(
      setCategory(category)
    );
  },[]);
 return(<>
   <Categories onSelect={onSelect} category={category} />
  <NewsList category={category}/>
  </>
 );
}

export default App;
// const [data,setData] = React.useState(null);    //배열의 초기값은 null

// const onClick = async ()=>{
//   try{  //async과 try catch문은 셋뚯세뚜
//      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//       setData(response.data);
//   }
//   catch(e){
//     console.log(e);
//   }
  
// }

// return(
//   <div>
//   <div>
//     <button onClick={onClick}>불러오기</button>
//   </div>
//   {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//   </div>
// );