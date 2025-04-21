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
const axios = require('axios');
app.get('/hw2', async (req, res) => {
    const { query1, query2 } = req.query;

    if (!query1 || !query2) {
        return res.status(400).json({ error: 'Missing query1 or query2' });
    }

    const makeRequest = async (query) => {
        try {
            const response = await axios.get('https://hn.algolia.com/api/v1/search', {
                params: {
                    query,
                    tags: 'story',
                }
            });

            const hit = response.data.hits[0];

            if (!hit) {
                return {
                    created_at: null,
                    title: 'No result found'
                };
            }

            return {
                created_at: hit.created_at,
                title: hit.title
            };
        } catch (err) {
            return {
                created_at: null,
                title: `Error: ${err.message}`
            };
        }
    };

    const [res1, res2] = await Promise.all([
        makeRequest(query1),
        makeRequest(query2)
    ]);

    res.json({
        [query1]: res1,
        [query2]: res2
    });
});
