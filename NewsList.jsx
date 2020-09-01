import React ,{useState,useEffect}from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';


const NewsListBlock = styled.div`
    box-sizing : border-box;
    padding-bottom:3rem;
    width:768px;
    margin : 0 auto;
    margin-top : 2rem;
    @media screen and (max-width : 768px){
        width : 100%;
        padding-left : 1rem;
        padding-right : 1rem;
    }
    `;

   
    const NewsList=({category})=>{
        const [articles, setArticles] = useState(null);
        const [loading, setLoading] = useState(false);

        useEffect(()=>{
          const fetchData = async ()=>{
             setLoading(true);
          try {
                const query = category === 'all' ? '' : `&category=${category}`; 
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ad1fa575117745028e186102a0dfe27d`,);
                console.log(response.data.articles);
                setArticles(response.data.articles);    
            }
            catch(e){
               console.log(e);
            } 
        setLoading(false);
        }
        console.log(articles)
        fetchData();
    },[category]);
    
    if(loading){
        return <NewsListBlock> 대기 중 .. </NewsListBlock>
    }
    if(!articles){
        return null;
    }

        return(
            <NewsListBlock>
               {articles.map((i)=>{
                   return (
                    <NewsItem article={i}></NewsItem>
                   );
               })}
            </NewsListBlock>
        );
    }


export default NewsList;