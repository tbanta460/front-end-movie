import React, {Component} from 'react';

class InfoMovie extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const lengthText = 100;
        const dataProps = this.props.data
        return (
            <>
                <div className="bg-white w-64 absolute z-10 x15 hidden md:block rounded-md p-2 text-left">
                    <div>
                        <div>
                            <span className="inline-block mt-2 font-bold">{dataProps.nama}</span>
                            <p className="my-4 text-sm">{dataProps.sipno.length > lengthText ? dataProps.sipno.slice(0, lengthText) + '...' : dataProps.sipno}</p>
                            <div>
                                <ul className="flex flex-row flex-wrap mx-auto">
                                    {dataProps.genre.map((data,index) => {
                                        return (
                                            <li key={index}className="text-xs mx-1 my-1 bg-101 rounded-md p-2">{data}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default InfoMovie