import React, {useEffect, useState, useRef} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link';
import {connect} from 'react-redux'

const BarRight = (props) => {
    const router = useRouter();
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
        src: '/search'
    },
    {
        name: 'Review',
        src: '/review'
    }];
    
    return (
        <>
            <div className={`md:hidden fixed right-0 top-0 h-full bg-101 z-20 duration-500 ${props.show ? "w-full" : "w-0"}`}>
                <div className="mx-4">
                    <div className="my-8 cursor-pointer w-8 px-2 py-5 pr-10" onClick={props.hideBar}>
                        <div className="text-white w-8 border-2 border-white rounded-lg transform rotate-45 -my-1"></div>
                        <div className="text-white w-8 border-2 border-white rounded-lg -rotate-45 transform"></div>
                    </div>
                </div>
                <div className="mx-4">
                    <ul>
                    {
                        header.map((data,index) => {
                            return (
                                <>
                                    <li className="font-bold text-white my-8" onClick={props.hideBar}>
                                            <Link key={index}href={data.src} ><a className={`p-4 ${data.src === router.pathname ? "border-b-4 border-grey" : ""}`} >{data.name}</a></Link>
                                    </li>
                                </>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        show : state.show
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hideBar: () => dispatch({type: "HIDEBAR"})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BarRight)