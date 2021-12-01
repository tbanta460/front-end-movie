import React, {useState} from 'react'
import InfoMovie from '../informationForMovie/infomovie'

const CardRec = (props) => {
    const [update, setUpdate] = useState(false)
    const showInfo = (e) => {
        if(e.currentTarget.nodeName === "DIV"){
            setUpdate(true)
        }
    }

    const hideInfo = (e) => {
        if(e.currentTarget.nodeName === "DIV"){
            setUpdate(false)
        }
    }

    return (
        <>  <div className="relative rouded-md m-5" onMouseEnter={showInfo} onMouseOut={hideInfo}>
            {update ? <InfoMovie data={props.data}/> : ""}
                <div className="" >
                    <img className="object-cover relative rounded-md w-40 h-60 inline-block transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer" src={props.data.img}/> 
                </div>
            </div>
        </>
    )
}

export default CardRec