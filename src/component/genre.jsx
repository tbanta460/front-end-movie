import React, {Component} from 'react';
class Genre extends Component{
    constructor(props){
        super(props);
        this.state = {
            arrGenre: [
                {
                    name:"Horror",
                    key: "100"
                },
                {
                    name:"Thriller",
                    key: "101"
                },
                {
                    name:"Drama",
                    key: "102"
                },
                {
                    name:"Romance",
                    key: "103"
                },
                {
                    name:"Adventure",
                    key: "104"
                },
                {
                    name:"Fantasy",
                    key: "105"
                },
                {
                    name:"Crime",
                    key: "106"
                },
                {
                    name:"Mystery",
                    key: "107"
                },
                {
                    name:"Wastern",
                    key: "108"
                },
                {
                    name:"Biography",
                    key: "109"
                },
                {
                    name:"Sci-Fi",
                    key: "110"
                },
                {
                    name:"Action",
                    key: "111"
                }
                
                
            ],
            genre: "",
            update: false,
            show: false
        }
    }
    handleAktif = (e) => {
        const getSelection = this.state.arrGenre.map(data => {
            return data.name
        }).filter(data => {
            if(data === e.target.textContent){
                return data
            }
        });
        this.setState({
            genre: getSelection
        }, () => this.sendGenre(this.state.genre))
        
    }
    componentDidUpdate(){
        if(this.state.update){
            this.props.changeGenre(this.state.update);
            this.setState({
                update: false
            })
        }
    }
    sendGenre = (e) => {
        this.props.getGenre(e[0]);
        this.setState({update:true})
    }
    render(){
        const tfGenre = this.props.showGenre
        return(
            <>
            <div className={` my-4 lg:h-full lg:block duration-500 ${tfGenre ? "h-full" : "hidden" }`}>
                <div className="lg:flex grid grid-cols-2 md:grid-cols-3 lg:flex-row px-14">
                    {
                        this.state.arrGenre.map((data,index) => {
                            return(
                                
                                    <div key={data.key}className={`lg:text-left text-center px-3 py-2 hover:bg-101 cursor-pointer text-white duration-500 rounded-lg mx-2 ${this.state.genre == data.name ? "bg-101" : ""}`} onClick={this.handleAktif}>
                                        {
                                            data.name
                                        }
                                    </div>
                                
                            )
                        })
                    }
                </div>
            </div>
            </>
        )
    }
}
export default Genre