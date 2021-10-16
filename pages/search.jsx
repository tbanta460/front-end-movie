import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

// Component
import Header from './component/header';
import Footer from './component/footer'
import CardRec from './component/card/cardrec';
import BarRight from './component/sideBarRightForMobile/barRight'

const Searching = () => {
    const rout = useRouter();
    const [searchName,setSearchName] = useState([]);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        // fetchData()
        if(!update){
            fetchData();
        };
    });
    const fetchData = () => {
        fetch('http://localhost:3010/movie')
        .then(res => res.json())
        .then(respone => {
            const getName = Array.from(respone).map(data => {
                return data
            })
            // setNameMovie(getName)
            setUpdate(true)
            filterMovie(getName)
        })
    }
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
                    searchName.length ? searchName.map(data => <CardRec image={data.img} data={data}/>) : ""
                }
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Searching