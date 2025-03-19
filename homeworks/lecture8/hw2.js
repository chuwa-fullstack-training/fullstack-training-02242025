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
const router = express.Router();


router.get("/hw2", async (req, res) => {
    const { query1, query2 } = req.query;
    if (!query1 || !query2) {
        return res.status(400).json({ error: "Both 'query1' and 'query2' parameters are required." });
    }
    //one way
    // try{
    //     const[promise1, promise2] = await Promise.all([
    //         fetch(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`),
    //         fetch(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`)]
    //     )
    //     // fetch() does not directly return JSON
    //     const[data1, data2] = await Promise.all(promise1.json(), promise2.json())
    //     const result = {
    //         [query1]: data1.hits.length > 0 ? data1.hits[0] : null,
    //         [query2]: data2.hits.length > 0 ? data2.hits[0] : null
    //     };
    //     res.json(result)
    // } catch {
    //     res.status(500).json({ error: "Failed to fetch data from Hacker News API." });
    // }
    const fetchNews = async (query) => {
        const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}&tags=story`);
        return await response.json(); //async, .json() to parse it into a JavaScript object
    };
    try {
        const [news1, news2] = await Promise.all([fetchNews(query1). fetchNews(query2)])
        const result1 = news1.hits.length > 0 ? news1.hits[0] : null
        const result2 = news2.hits.length > 0 ? news2.hits[0] : null
        return res.json({query1 : result1, query2: result2}) //not async, server to send JSON data to the client.
    } catch {
        res.status(500).json({ error: 'Internal server error' });
    }
})
