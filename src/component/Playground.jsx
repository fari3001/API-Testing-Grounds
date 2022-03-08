import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PersonList() {


  const [person, setPerson] = useState([])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
          console.log(res.data)
        const persons = res.data;
        setPerson(persons);
      })
  }, []);


  // const options = {
  //   method: 'GET',
  //   url: 'https://aerisweather1.p.rapidapi.com/sunmoon/ankara,tr',
  //   headers: {
  //     'x-rapidapi-host': 'aerisweather1.p.rapidapi.com',
  //     'x-rapidapi-key': '6688b15502msh8d61a3e27f34e98p143d5ejsnad6acb6d31cb'
  //   }
  // };

  //   useEffect(() => {
  //   axios.get(options)
  //   .then(res => {
  //   console.log(res.data)
  //     const dog = res.data;
  //     setPerson(dog);
  //   })
  // }, []);

  // var options = {
  //   method: 'GET',
  //   url: 'https://aerisweather1.p.rapidapi.com/sunmoon/ankara,tr',
  //   headers: {
  //     'x-rapidapi-host': 'aerisweather1.p.rapidapi.com',
  //     'x-rapidapi-key': '6688b15502msh8d61a3e27f34e98p143d5ejsnad6acb6d31cb'
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
  
  // useEffect(() => {

  // })

  
    return (
      <ul>
        {person.map(el =>
              <li key={el.id}>{el.phone}</li>
            )
        }
      </ul>
    )
}