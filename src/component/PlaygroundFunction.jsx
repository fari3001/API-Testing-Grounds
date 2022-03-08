import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'


export default function PlaygroundFunction() {
    
     const [image, setImage] = useState([])

    useEffect(() => {
      var axios = require("axios").default;

      var options = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/photos',
        params: {hotel_id: '1377073', locale: 'en-gb'},
        headers: {
          'x-rapidapi-host': 'booking-com.p.rapidapi.com',
          'x-rapidapi-key': '6688b15502msh8d61a3e27f34e98p143d5ejsnad6acb6d31cb'
        }
      };
      
      axios.request(options).then(function (response) {
        const image = response.data
        setImage(image)
        console.log(response.data );


      }).catch(function (error) {
        console.error(error);
      });
    }, [])


  return (
    <ul>
        {image.map(el =>
            <img src={el.url_max} alt={el.photo_id} />
            // (el.ml_tags.map(e => <h1>{e.tag_name}</h1>))
            )
        }
      </ul>
  )
}
