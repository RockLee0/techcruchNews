import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './Newspaper.css'

const Newspaper = () => {
    const [news,setNews]=useState([]);
    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=2fd8c5f4873141fa86836f0428d02491')
        .then(res=>res.json())
        .then(data=>setNews(data.articles))
    },[])
    return (
        <div className='news'>

<Grid container spacing={1}>


{
    news.map(nw=><Grid item xs={4} container item spacing={3}>
        <News articles={nw}></News>
          </Grid>)
}

        

</Grid>
            
        </div>
    );
};

export default Newspaper;