import React, {useState, useEffect} from 'react'

const TrailerCard = (props) => {
    let runRefs = [];
    const [nameVideo, setNamevideo] = useState("Avengers End");
    const [name, setName] = useState(false);
    
    const getFuction = (e) => {
        props.getName(e.textContent)
        setNamevideo(e.textContent)
    }
    
    return(
        
        <>
            <div className="bg-05 h-100 overflow-y-scroll scrollbars  ">
                {
                props.arrayTrailer.map((data, indexi) => {
                    return(
                        <div  key={data.key}id={"card-" + indexi} className={`my-class cursor-pointer rounded-lg p-2 flex my-5 flex-col md:flex-row-reverse justify-end mx-4 hover:bg-07 duration-500 md:static relative${nameVideo === data.name ? "bg-07" : ""}`}  onClick={() => getFuction(runRefs[indexi])}> 
                            <div className="my-class m-0 flex flex-col md:block md:mx-4 text-white">
                                <h3 ref={ref => runRefs[indexi] = ref} className="font-bold lg:text-2xl text-base md:my-0 my-3">{data.name}</h3>
                                <span className="inline-block md:static absolute -bottom-3 lg:text-base text-sm">{data.duration}</span>
                            </div>
                            <video className="w-36 rounded-lg">
                                <source src={data.src} type={data.type}/>
                            </video>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default TrailerCard