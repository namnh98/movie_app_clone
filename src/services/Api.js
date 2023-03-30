import { useState } from 'react'

export const [Api,setApi] = useState()

export const getApi = () => {
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    
    fetch('http://localhost:3000/Movie', options)
        .then(response => response.json())
        .then((response) => {
            setApi(response.d)
        })
        .catch(err => console.error(err));
}



