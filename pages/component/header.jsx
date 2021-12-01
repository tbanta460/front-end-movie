import React, {useRef} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Image from 'next/image'

function Header (props) {
    const forClass = {
        show: "w-32 md:w-auto px-3 ",
        hide: "w-0 px-0 lg:px-3"
    }
    const getValue = useRef(null)
    const router = useRouter();
    const [update, setUpdate] = useState(false)
    const [click, setClick] = useState(false)
    const header = [{
        name: 'Home',
        src: '/'
    },
    {
        name: 'Recommended',
        src: '/recomended'
    },
    {
        name: 'Video',
        src: '/video'
    },
    {
        name: 'Review',
        src: '/review'
    }]
    useEffect(() => {
        if(update){
            props.forUpdate(false)
        }
        setUpdate(false)
    })
    const handleEvent = (e) => {
        if(e.keyCode === 13 ){
            changeClick(false)
            router.push({
                pathname: '/search',
                query: {name: getValue.current.value.toUpperCase()}
            })
        }else if (e.keyCode === 27){
            changeClick(false)
        }
        if(router.pathname === '/search' && e.keyCode === 13){
            setUpdate(true)
        }
    }
    const changeClick = (e = false) => {
        setClick(e)
    }
    const longLine = (e) => {
        if(e.target.nodeName === "IMG"){
            changeClick(true)
        } 
    }
    return(
        <>  
                <div className="bg-06">
                    <div className="mx-auto lg:grid-cols-01 grid-cols-001 items-center grid p-4">
                        <div className="flex">
                            <h2 className="md:ml-5 m-0 font-bold text-white">MY Movie</h2>
                        </div>
                        <div className="w-3/4 hidden md:inline-block">
                            <ul className="flex flex-row justify-around">
                                {header.map((data,index) => {
                                    return (
                                        <li className="font-bold text-white">
                                            <Link key={index} href={data.src} ><a className={`p-4 ${data.src === router.pathname ? "border-b-4 border-orange" : ""}`} >{data.name}</a></Link>
                                        </li>)
                                })}
                            </ul>
                        </div>
                        <div className="relative flex lg:justify-around items-center" >
                            <label htmlFor="search" >
                                <Image src="./icon/search.svg" alt="icon search" className="w-7 inline-block " onClick={longLine}/>
                            </label>
                            <input name="search"ref={getValue}type="text" id="search"className={`focus:outline-none duration-300 border-b-2 lg:w-auto bg-transparent text-white ${click ? forClass.show : forClass.hide}`} placeholder="Search" onKeyUp={handleEvent}/>
                            <div className="flex justify-around hidden lg:block">
                                <Image src="./icon/facebook.svg" alt="icon facebook" className="w-10 inline-block cursor-pointer"/>
                                <Image src="./icon/instagram.svg" alt="icon instagram" className="w-10 inline-block mx-6 cursor-pointer"/>
                                <Image src="./icon/twitter.svg" alt="icon twitter" className="w-10 inline-block cursor-pointer"/>
                            </div>
                        </div>
                        <div className="grid md:hidden justify-end items-end cursor-pointer" onClick={props.showBar}>
                            <div className="text-white w-8 border-2 border-white rounded-lg"></div>
                            <div className="text-white w-8 my-1 border-2 border-white rounded-lg"></div>
                            <div className="text-white w-8 border-2 border-white rounded-lg"></div>
                        </div>
                    </div>
                </div>
        </>
    )
}
const mapStateToProps =  state => {
    return {
        show: state.show
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showBar: () => dispatch({type: "SHOWBAR"})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)