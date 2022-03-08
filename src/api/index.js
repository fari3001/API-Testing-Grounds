import axios from 'axios';

const URL = 'https://booking-com.p.rapidapi.com/v1/hotels/photos'
const options = {
  params: {locale: 'en-gb', hotel_id: '1377073'},
  headers: {
    'x-rapidapi-host': 'booking-com.p.rapidapi.com',
    'x-rapidapi-key': '22264506a0msha725dfa36378936p1e6addjsnd2c98d708a0d'
  }
};

// export const getAirportImage = async () => {
//   try {
//     const {data} = await axios.get(URL, options);
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }


export const getAirportImage = async () => {
  try {
    const {data} = await axios.get('https://booking-com.p.rapidapi.com/v1/hotels/photos',
    {
      params: {locale: 'en-gb', hotel_id: '1377073'},
      headers: {
        'x-rapidapi-host': 'booking-com.p.rapidapi.com',
        'x-rapidapi-key': '22264506a0msha725dfa36378936p1e6addjsnd2c98d708a0d'
      }
    })
    return data
  } catch (error) { 
    console.log(error)
  }
}

