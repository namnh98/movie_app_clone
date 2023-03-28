import { useState } from 'react'

export const [Api,setApi] = useState()

export const getApi = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b9d118b523mshe3bb6f7ad775535p1c1b6djsncb9dacb40429',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
    
    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
        .then(response => response.json())
        .then((response) => {
            setApi(response.d)
        })
        .catch(err => console.error(err));
    
}



