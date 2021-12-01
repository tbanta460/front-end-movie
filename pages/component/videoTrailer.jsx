import React, {Component} from 'react'
import TrailerCard from './card/trailercard'
import dataTrail from '../../dataJSON/trailer.json'

class Trailer extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrVideo: [],
            trailerName: "Avengers End"
        }
    }
    componentDidMount(){
        this.runDataTrailer()
    }
    runDataTrailer = () => {
        const dataVideo = dataTrail.trailer.map(data => data)
        this.setState({
            arrVideo: dataVideo,
        })
    }
    getNames = (e) => {
        this.setState({
            trailerName: e
        }, () => this.runDataTrailer())
    }
    render(){

        return(
            <>
                <div className="w-11/12 mx-auto pt-10 box-border">
                    <div className="flex flex-row px-14">
                        <img src="./icon/play.svg" className="w-5 mr-5 text-white"width={100}height={100}/>
                        <h2 className="font-bold text-2xl text-white">Trailer</h2>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:p-14 py-5 bg-06">
                        <div className="lg:w-2/3 md:w-110 w-72 lg:mx-0 mx-auto">
                            {
                                this.state.arrVideo.map(data => {
                                    if(data.name === this.state.trailerName){
                                        return(
                                            
                                            <video className="w-11/12 mx-auto lg:py-0 py-5" controls key={data.key}>
                                                <source src={data.src} type={data.type}/>
                                            </video>
                                            
                                        )
                                    }
                                })
                            }
                        </div>
                        <div >
                            <TrailerCard arrayTrailer={this.state.arrVideo} 
                            getName={(myName) => this.getNames(myName)} />
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Trailer