const express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 4000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/api/restaurants', async (req, res) => {
  const { lat, lng } = req.query;
  console.log(lat, lng);
  const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;
  const resturants = await axios
    .get(url, {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59',
      },
    })
    .then((res) => res.data);

  res.status(200).json(resturants);
});

app.get('/api/menu', async (req, res) => {
  const { id } = req.query;
  const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.322232&lng=78.085605&restaurantId=${id}`;

  const menu = await axios.get(url, {
    headers: {
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59',
    },
  });
  res.status(200).json(menu.data);
});

app.listen(PORT);
