import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Detail() {
    const [state, setState] = useState({});
    const [loader, setLoader] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        setLoader(true)

        axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(({ data }) => {
                setLoader(false)
                setState(data)
            })
            .catch(err => console.log(err))
    }, [])

    
  if(loader){
    return <div class="loader"></div>
  }
    return (
        <div>
            <h1>{state.username}-{state.id}</h1>
            <h1>{state.email}</h1>
            <h1>{state.phone}</h1>
            <h1>{state.website}</h1>

            <a style={
                {
                    cursor: 'pointer'
                }
            } onClick={() => {
                navigate('/')
            }}>go back</a>
        </div>
    )
}
