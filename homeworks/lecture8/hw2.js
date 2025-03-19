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

const app = express();
const PORT = 3000;

app.get('/hw2', async (req, res) => {
    const { query1, query2 } = req.query;

    if (!query1 || !query2) {
        return res.status(400).json({ error: "Missing query1 or query2 parameters" });
    }

    try {
        // Fetch data concurrently
        const [response1, response2] = await Promise.all([
            axios.get(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`),
            axios.get(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`)
        ]);

        // Extract the first story from each response
        const result = {
            [query1]: response1.data.hits.length > 0 ? {
                created_at: response1.data.hits[0].created_at,
                title: response1.data.hits[0].title
            } : null,
            
            [query2]: response2.data.hits.length > 0 ? {
                created_at: response2.data.hits[0].created_at,
                title: response2.data.hits[0].title
            } : null
        };

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data from HN Algolia API" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
