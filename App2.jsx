import React,{useState, useCallback} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import NewsList from './NewsList';
import Category from './Category';

const App2 =()=>{
    // const [data, setData] = useState(null);

    // const onClick = async ()=>{
    //     try {
    //         const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=ad1fa575117745028e186102a0dfe27d',);
    //         setData(response);
    //     }
    //     catch(e){
    //         console.log(e);
    //     } 
    // };
 
    //  return (
    //      <div>
    //     <div>
    //         <button onClick={onClick}>불러오기</button>
    //     </div>
    //     {data && <textarea row={7} value={JSON.stringify(data,null,2)}></textarea>}
    //     </div>
    // );
    const [category, setCategory] = useState('all');
    const onSelect =useCallback(category=>{
        setCategory(category);
    });
    return(
        <>
        <Category onSelect={onSelect} category={category} />
        <NewsList category={category}></NewsList>
        </>
    );
}

export default App2;