import React, {Component} from 'react'
import Genre from './genre';
import CardRec from './card/cardrec'
import {connect} from 'react-redux'
import ViewMore from './viewMore/viewMore'
import Loading from '../dataApi/loading'
import Image from 'next/image'

class GetData extends Component{
    constructor(props){
        super(props);
        this.state = {
            arrData: [],
            arrForTrends: null,
            arrForRecomend: null,
            changeGenre: "",
            change: false,
            showGenre: false,
            error: null
        }
        this.showWidthGenre = this.showWidthGenre.bind(this)
    }
    componentDidMount(){
        this.fetchData()
    }
    componentDidUpdate(){
        if(this.state.change){
            this.setState({
                arrForTrends: [],
                change: false
            })
        }
    }

    fetchData = () => {
        fetch('http://localhost:3010/movie')
        .then(data => data.json())
        .then(async data => {
            let forTrends
            let forRecomends
            if(this.state.changeGenre !== ""){
                let filterDataNew = await this.filterData(data);
                if(filterDataNew.length > 6){
                    forTrends = filterDataNew.slice(0,6)
                } else {
                    forTrends = filterDataNew
                }
            } else {
                forTrends = Array.from(data).slice(0,6);
            }
            forRecomends = Array.from(data).slice(6,11);
            this.setState({
                arrForTrends: forTrends,
                arrForRecomend: forRecomends,
            });
        })
        .catch(error => {
            this.setState({error: error})
        })
    }
    filterData = (e) => {
        let getGenre = Array.from(e).map(data => {
            if(data.genre.includes(this.state.changeGenre)){
                return data
            } else {
                return null
            }
        }).filter(data => {
            if(data !== null){
                return data
            }
        })
        return getGenre
    }
    genreList = (e) => {
        this.setState({
            changeGenre: e
        }, () => this.fetchData())
    }
    showWidthGenre = () => {
        let tfGenre = this.state.showGenre
        this.state.showGenre ? tfGenre = false : tfGenre = true;
        this.setState({showGenre: tfGenre})
    }
    
    render(){
        return(
            <>
            <div className="text-center bg-05">
                <div className="w-11/12 mx-auto pt-10 box-border">
                    <div className="flex flex-row px-9 md:px-14">
                        <Image src="./icon/trend.svg" className="w-3 mr-3 text-white"/>
                        <h2 className="font-bold text-lg text-white">Trends Now</h2>
                    </div>
                    <div>
                        <span className="text-white inline-block">Genre</span>
                        <div className="mx-2 lg:hidden arrow10 inline-block " onClick={this.showWidthGenre}></div>
                        <Genre getGenre={(e) => this.genreList(e)} changeGenre={(e) => {
                            this.setState({
                                change: e
                            }, () => this.fetchData())
                        }} showGenre={this.state.showGenre}/>
                    </div>
                    <div className="w-11/12 overflow-x-scroll lg:overflow-visible mx-auto scrollbars scrollbar">
                        <div id="card-trends"className="relative widthrem lg:w-auto flex flex-row box-border">
                        {
                            this.state.arrForTrends 
                            ?
                                this.state.error !== null ? <div>Error: {error.message}</div> : this.state.arrForTrends.map((data,index) => {
                                return  (<>
                                            <CardRec image={data.img} data={data} key={index}/>
                                        </>)
                                })
                            :
                                <Loading />

                            
                        }
                        </div>
                    </div>
                        <ViewMore />
                    <div className="flex flex-row px-9 md:px-14 justify-start items-center">
                        <Image className="w-3 mr-3 text-white" src="./icon/star.svg" alt="recomendation" />
                        <span className="font-bold text-lg text-white">Recommendation</span>
                    </div> 
                    <div className="w-11/12 overflow-x-scroll lg:overflow-visible mx-auto scrollbars scrollbar">
                        <div className="flex flex-row widthrem lg:w-auto p-0">
                            {
                                this.state.arrForRecomend
                                ?
                                this.state.error !== null ? <div>Error: {error.message}</div> : this.state.arrForRecomend.map((data,index) => {
                                    return <CardRec image={data.img} data={data} key={index}/>
                                })
                                :
                                <Loading />
                            }
                        </div>
                    </div>
                    <ViewMore />
                </div>
            </div>
            <div>{this.props.dapatData}</div>
            </>
        )
    }
}

export default GetData
 