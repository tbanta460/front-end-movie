import React, {useState, useEffect, useCallback} from 'react';
import {useRouter} from 'next/router';

// Component
import Header from '../src/component/header';
import Footer from '../src/component/footer'
import CardRec from '../src/component/card/cardrec';
import BarRight from '../src/component/sideBarRightForMobile/barRight'

const Searching = () => {
    const rout = useRouter();
    const [searchName,setSearchName] = useState([]);
    const [update, setUpdate] = useState(false);
    const fetchMyData = useCallback(() => {
        if(!update){
             fetch('https://mylistmovie.herokuapp.com/movie')
            .then(res => res.json())
            .then(respone => {
                const getName = Array.from(respone).map(data => {
                    return data
                })
                setUpdate(true)
                filterMovie(getName)
            })
        }
    },[update])
    useEffect(() => {
        fetchMyData();
    },[fetchMyData]);
   
    const filterMovie = (nameMovie) => {
        let arrMovie = []
        const valueSearch = rout.query.name
        if(valueSearch !== ""){
            for(let i = 0; i < nameMovie.length; i++){
                let textMovie = nameMovie[i].nama.toUpperCase();
                if(textMovie.indexOf(valueSearch) > -1){
                    arrMovie.push(nameMovie[i])
                }
            }
        }else {
            arrMovie = [];
        }
        
        setSearchName(arrMovie)
    }  
    const handlePropsUpdate = (tf) => {
        setUpdate(tf)
    }
   
    return (
        <>
        <div className="bg-06 ">
            <Header forUpdate={(tf) => handlePropsUpdate(tf)}/>
            <BarRight forUpdate={(tf) => handlePropsUpdate(tf)}/>
            <div className="w-11/12 mx-auto">
                <h2 className="text-white font-bold p-14 text-3xl">Showing all results for <span className="italic">{rout.query.name}</span></h2>
                <div className="grid grid-cols-2 lg:flex flex-wrap items-center justify-start">
                {
                    searchName.length ? searchName.map(data => <CardRec image={data.img} data={data} key={data.key}/>) : ""
                }
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Searching