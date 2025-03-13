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
let fetch;
import("node-fetch").then((module) => {
  fetch = module.default;
});

const express = require("express");
const app = express();
const router = express.Router();

router.get("/", async (req, res) => {
  const { query1, query2 } = req.query;

  if (!query1 || !query2) {
    return res
      .status(400)
      .json({ error: "Both query1 and query2 are required" });
  }

  const fetchStory = async (query) => {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`
    );
    const data = await response.json();
    if (!data.hits || data.hits.length === 0) {
      return null;
    }
    const firstHit = data.hits[0];
    return {
      created_at: firstHit.created_at,
      title: firstHit.title,
    };
  };

  try {
    const [result1, result2] = await Promise.all([
      fetchStory(query1),
      fetchStory(query2),
    ]);

    if (!result1 || !result2) {
      return res
        .status(404)
        .json({ error: "Stories not found for one or both queries" });
    }

    res.json({
      [query1]: result1,
      [query2]: result2,
    });
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.use("/hw2", router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
