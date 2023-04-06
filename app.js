const express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 4000;

app.get('/api/menu/', (req, res) => {});

app.get('/api/restaurants/', async (req, res) => {
  const { lat, lng } = req.query;
  const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;
  const data = await axios.get(url);
  res.send(data);
});
app.listen(PORT);

// export const IMG_CDN =
//   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';

// // https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/

// export const FETCH_MENU_URL =
//   'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.322232&lng=78.085605&restaurantId=';
// // export const FETCH_MENU_URL =
// //   'https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/v4/full?lat=30.322232&lng=78.085605&menuId=';

// export const FETCH_RESTAURANTS_URL =
//   'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.322232&lng=78.085605&page_type=DESKTOP_WEB_LISTING';

// export const RESTAURANT_CAROUSELS_API =
//   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/';
