/**
 * https://hn.algolia.com/api
 *
 * write a router function that takes two query parameters: query1 and query2
 * and returns the partial result from the following query in order:
 * https://hn.algolia.com/api/v1/search?query=query1&tags=story
 * https://hn.algolia.com/api/v1/search?query=query2&tags=story
 *
 * e.g. http://localhost:3000/hw2?query1=apple&query2=banana
 *
 * result from https://hn.algolia.com/api/v1/search?query=apple&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2020-11-12T21:00:12.000Z",
 *   "title": "macOS unable to open any non-Apple application",
 *   ...
 *   }
 * ]}
 * 
 * result from https://hn.algolia.com/api/v1/search?query=banana&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose",
 *   ...
 *   }
 * ]}
 * 
 * final result from http://localhost:3000/hw2?query1=apple&query2=banana:
 * {
 *   "apple":
 *   {
 *     "created_at": "2020-11-12T21:00:12.000Z",
 *     "title": "macOS unable to open any non-Apple application"
 *   },
 *  "banana":
 *  {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose"
 *  }
 * }
 */

const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/news', async (req, res)=>{
    const {query1, query2} = req.query;
    if(!query1 || !query2){
        return res.status(400).json({error: "Both query1 and query 2 must be provided."});
    }

    const fetchNews = async (query) => {
        const url = `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.hits.length > 0? data.hits[0] : null;

        } catch (error) {
            console.error(`Error fetching news for ${query}`, error);
            return null;
        }
    }

    try{
        const [query1Data, query2Data] = await Promise.all([fetchNews(query1), fetchNews(query2)]);
        res.json({
            [query1]:  { created_at: query1Data.created_at, title: query1Data.title } ,
            [query2]: { created_at: query2Data.created_at, title: query2Data.title } ,
        })
    } catch (error) {
        console.error('Error fetching news error', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

const PORT = 3000;
app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`));


