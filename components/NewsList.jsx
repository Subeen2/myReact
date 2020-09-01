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


const SampleArticle = {
    title: 'sample',
    description :'sample',
    url : 'https://www.naver.com',
    urlToImage: 'https://via.placeholder.com/160',
}

const NewsList = ({category}) =>{
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const query = category === 'all' ? '' : `&category=${category}`
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ad1fa575117745028e186102a0dfe27d`,);
                setData(response.data.articles);
            }
            catch(e){
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    },[category]);

    if(loading){
        return (
            <NewsListBlock>로딩 중</NewsListBlock>
        );
    }

    if(!data){
        return null;
    }

    return(
        <NewsListBlock>
            {data.map((article)=>{
                return(
                    <NewsItem article={article} />
                );
            })}
        </NewsListBlock>
    );
    }

export default NewsList; 