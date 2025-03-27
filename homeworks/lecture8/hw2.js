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
const axios = require('axios');
const router = express.Router();

router.get('/search', async (req, res)=> {
    try{
        const {query1, query2} = req.query;

        if(!query1 || !query2){
            return res.status(400).json({error: 'Both query 1 and query 2 are required'});
        }

        const [result1, result2] = await Promise.all([fetchApiResult(query1), fetchApiResult(query2)]);
        const response = {
            [query1]: result1.length>0? formatRes(result1[0]):null,
            [query2]: result2.length>0? formatRes(result2[0]):null,
        };
        res.json(response);
    }
    catch(e){
        console.error('Error:', e);
        res.status(500).send('Internal Server Error.');
    }
});

async function fetchApiResult(query) {
    const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story`;
    const response = await axios.get(url);
    return response.data.hits;
}

function formatRes(item){
    return{
        created_at: item.created_at,
        title: item.title,
        url: item.url,
        author: item.author,
        points: item.points,
        objectID: item.objectID
    }
}

module.exports = router;
