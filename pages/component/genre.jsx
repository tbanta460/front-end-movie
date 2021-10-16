import React, {Component} from 'react';
class Genre extends Component{
    constructor(props){
        super(props);
        this.state = {
            arrGenre: ["Horror", "Thriller", "Drama", "Romance", "Adventure", "Fantasy", "Crime", "Mystery", "Wastern", "Biography", "Sci-Fi", "Action"],
            genre: "",
            update: false,
            show: false
        }
    }
    handleAktif = (e) => {
        const getSelection = this.state.arrGenre.map(data => {
            return data
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
    // componentWillUpdate(){
    //     let showGenre = this.state.show;
    //     let forGenre = this.props.showGenre
    //     if(forGenre !== undefined){
    //         if(forGenre.className === "arrow" && showGenre){
    //             console.log('berarti ii true')
    //             showGenre = false
    //         }else {
    //             console.log('berarti ini false')
    //             showGenre = true
    //         }
    //     }
    //     this.setState({show:showGenre})
    // }
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
                        this.state.arrGenre.map(data => {
                            return(
                                <>
                                    <div className={`lg:text-left text-center px-3 py-2 hover:bg-101 cursor-pointer text-white duration-500 rounded-lg mx-2 ${this.state.genre == data ? "bg-101" : ""}`} onClick={this.handleAktif}>
                                        {
                                            data
                                        }
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            </>
        )
    }
}
// const Genre = () => {
//     const [genrei, setGenrei] = useState("");
//     const genres = ["Horror", "Thriller", "Drama", "Romance", "Adventure", "Fantasy", "Crime", "Mystery", "Wastern", "Biography", "Sci-Fi", "Action"];
//     const handleAktif = (e) => {
//         const getSelection = genres.map(data => {
//             return data
//         }).filter(data => {
//             if(data === e.target.textContent){
//                 return data
//             }
//         });
//         setGenrei(getSelection)
//         props.changeCard(genrei)
        
//     }
    
//     return(
//         <>
//         </>
//     )
// }
export default Genre