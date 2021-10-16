import React, {Component } from 'react';
import Arrow from './arrow/arrow'

class Recmovie extends Component{
    constructor(props){
        super(props);
        this.state = {
            class: "",
            idElement: "",
            count: 1,
            forClass: "block"
        }
        this.eventOver = this.eventOver.bind(this);
        this.slide = React.createRef();
    }
    componentDidMount(){
        
    }
    addClass = () => {
        let opacity = "opacity-100";
        return opacity
    }
    eventOver = async (e) => {
        const targetElement = e.target.parentElement;
        let stringId = ""
        if(targetElement.id === e.target.name || e.target.nodeName === 'SPAN' || e.target.nodeName === 'IMG'){
            stringId = targetElement.id
        } else if(e.target.id === "warp-card"){
            stringId = ""
        }
        this.setState({idElement: stringId});
    }
    catchCount = (e) => {
        this.setState({count:e})
    }
    enterMouse = (e) => {
        this.setState({idElement: e.currentTarget.id})
    }
    outMouse = () => {
        this.setState({idElement: ""})
    }
    render(){
        return(
            <>
                <div className="">
                    <div id="warp-card" className="bg-06 pb-14 pt-8" >
                        <h1 className="md:ml-24 lg:my-0 my-5 md:text-left text-4xl font-bold text-white text-center">Spotlight This Week</h1>
                        <div className="lg:grid grid-cols-03 lg:m-14 mx-5 block">
                            <div ref={this.slide}className="lg:grid block grid-cols-03 items-center relative">
                                <div id="card-1"className={`lg:mb-5 2xl:m-0 transition relative lg:w-64 bg-black rounded-md transition duration-500 ease-in-out transform lg:block hover:-translate-y-1 hover:scale-110 cursor-pointer overClass ${"card-" + this.state.count === "card-1" ? "block" : "hidden"}`} onMouseEnter={this.enterMouse} onMouseLeave={this.outMouse}>
                                    <img name="card-1"src="./imgmovie/avengers.jpg" alt="avengers" className={`inline-block duration-500 ease-in-out transform  rounded-md w-full lg:h-40 h-full mx-auto opacity-40 ${this.state.idElement == 'card-1' ? "opacity-100" : ""}`}/>
                                    <span className="leading-none text-white inline-block absolute bottom-5 left-14 font-bold">Avegers: EndGame</span>
                                    <img name="icon-1" className="absolute inline-block bottom-5 left-4 w-7" src="./play.svg" alt="play"/>
                                </div>
                                <div id="card-2"className={`lg:mb-5 2xl:m-0 transition relative lg:w-64 bg-black rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer lg:block overClass ${"card-" + this.state.count === "card-2"  ? this.state.forClass  : "hidden"}`} onMouseEnter={this.enterMouse} onMouseLeave={this.outMouse}>
                                    <img name="card-2" src="./imgmovie/night.jpg" alt="night at the museum" className={`inline-block duration-500 ease-in-out transform  rounded-md w-full lg:h-40 h-full mx-auto opacity-40 ${this.state.idElement === 'card-2' ? "opacity-100" : ""}`}/>
                                    <span className="leading-none text-white inline-block absolute bottom-5 left-14 font-bold">Night At The Museum</span>
                                    <img className="absolute inline-block bottom-5 left-4 w-7" src="./play.svg" alt="play"/>
                                </div>
                                <div  id="card-3"className={`lg:mt-5 2xl:m-0 transition relative lg:w-64 bg-black rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer lg:block overClass ${"card-" + this.state.count === "card-3" ? "block" : "hidden"}`} onMouseEnter={this.enterMouse} onMouseLeave={this.outMouse}>
                                    <img name="card-3" src="./imgmovie/treaseru.jpg" alt="natioal treasure" className={`inline-block duration-500 ease-in-out transform  rounded-md w-full lg:h-40 h-full mx-auto opacity-40 ${this.state.idElement === "card-3" ? "opacity-100" : ""}`}/>
                                    <span className="text-white inline-block absolute bottom-5 left-14 font-bold leading-none">Natioal Treasure</span>
                                    <img className="absolute inline-block bottom-5 left-4 w-7" src="./play.svg" alt="play"/>
                                </div>
                                <div  id="card-4"className={`lg:mt-5 2xl:m-0 relative lg:w-64 bg-black rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer lg:block overClass ${"card-" + this.state.count === "card-4" ? "block" : "hidden"}`} onMouseEnter={this.enterMouse} onMouseLeave={this.outMouse}>
                                    <img name="card-4" src="./imgmovie/maze.jpg" alt="maze runner: the death cure" className={`inline-block duration-500 ease-in-out transform  rounded-md w-full lg:h-40 h-full mx-auto opacity-40 ${this.state.idElement === 'card-4' ? "opacity-100" : ""}`}/>
                                    <span className="leading-none text-white inline-block absolute bottom-5 left-14 font-bold">Maze Runner: The Death Cure</span>
                                    <img className="absolute inline-block bottom-5 left-4 w-7" src="./play.svg" alt="play"/>
                                </div>
                                <Arrow getElement={this.slide} sendCount={v => this.catchCount(v)}/>
                            </div>
                            <div id="hero-card"className="relative bg-black rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer hover:opacity-100 overClass hidden lg:block" onMouseEnter={this.enterMouse} onMouseLeave={this.outMouse}>
                                <img name="hero-card"className={`opacity-40 rounded-md duration-500 ${this.state.idElement === "hero-card" ? "opacity-100" : ""}`} src="./imgmovie/startwars.jpg" alt="star wars: the force awakens"/>
                                <span className="leading-none text-white inline-block absolute bottom-5 left-16 font-bold text-3xl">Star Wars: The Force Awakens</span>
                                <img className="absolute inline-block bottom-5 left-4 w-9" src="./play.svg" alt="play"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Recmovie