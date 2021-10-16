import React from 'react'
import {useEffect, useCallback, useState} from 'react'

const FetchData = () => {
    const [error, setError] = useState();
    const [load, setLoad] = useState();
    const [items, setItems] = useState();
    const fetchData = useCallback(() => {
        fecth('http://localhost:3010/movie')
        .then(res => res.json())
        .then(respone => {
            setLoad(true);
            setItems(respone);
        })
        .catch(error => {
            setError(error)
        });
    });

    useEffect(() => {
        fetchData()
    })

    return {items, load, error}
}

export default FetchData