import React, {Component} from 'react'

class Arrow extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 1,
            update: false
        }
    }
    
    counterChange = (e) => {
        this.props.sendCount(e);
    }

    handleClickPlus = () => {
        const lengthElements = this.props.getElement.current.querySelectorAll('.overClass');
        let count = this.state.count + 1;
        if(count > lengthElements.length){
            count = 1
        };
        this.setState({
            count: count,
            update:true
        },() => this.counterChange(this.state.count));
    }
    handleClickMinus = () => {
        let count = this.state.count - 1
        if(count <= 0){
            count = 3
        }
        this.setState({
            count: count,
            update:true
        },() => this.counterChange(this.state.count))
    }
    render(){
        return (
            <>
                <div className="lg:hidden">
                    <div id="arrow-right" className="duration-500 cursor-pointer absolute right-0 hover:bg-rgb-101 p-5 rounded-full md:h-14 md:w-14 h-5 w-5 md:inset-y-44 inset-y-14" onClick={this.handleClickPlus}>
                        <div className="border-2 border-white radius-md rotate-45 w-4 md:w-8 transform -my-1 opacity-100"></div>
                        <div className="border-2 border-white radius-md transform w-4 md:w-8 -rotate-45 md:my-5 my-2 opacity-100"></div>
                    </div>
                    <div id="arrow-left" className="py-5 pr-9 pl-1 duration-500 cursor-pointer absolute left-0 hover:bg-rgb-101 md:p-5 rounded-full h-5 w-5 md:h-14 md:w-14 md:inset-y-44 inset-y-14 px-2" onClick={this.handleClickMinus}>
                        <div className="border-2 border-white radius-md -rotate-45 w-4 md:w-8 transform -my-1 opacity-100"></div>
                        <div className="border-2 border-white radius-md transform w-4 md:w-8 rotate-45 md:my-5 my-2 opacity-100"></div>
                    </div>
                </div>
            </>
        )
    }
} 

export default Arrow