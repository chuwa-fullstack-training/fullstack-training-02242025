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

const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/hw2", async (req, res) => {
  const { query1, query2 } = req.query;

  if (!query1 || !query2) {
    return res
      .status(400)
      .json({ error: "Both query1 and query2 parameters are required." });
  }

  try {
    const [response1, response2] = await Promise.all([
      axios.get("https://hn.algolia.com/api/v1/search", {
        params: { query: query1, tags: "story" },
      }),
      axios.get("https://hn.algolia.com/api/v1/search", {
        params: { query: query2, tags: "story" },
      }),
    ]);

    const hit1 = response1.data.hits[0];
    const hit2 = response2.data.hits[0];

    const result = {
      [query1]: hit1
        ? {
            created_at: hit1.created_at,
            title: hit1.title,
          }
        : {},
      [query2]: hit2
        ? {
            created_at: hit2.created_at,
            title: hit2.title,
          }
        : {},
    };

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
