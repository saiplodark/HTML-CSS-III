import React from 'react';

class Banner extends React.Component {
    constructor(){
        super()
        this.state={
            toggleSideBar:false
        }
    }
    toggleSideBarFunc(){
        this.setState((prevState)=>{
            return{
                toggleSideBar: !prevState.toggleSideBar
            } 
        })
    }
    
    render(){

        return (
            <header>
                <div>
                    <div className="logo">
                        <a href="#">Start Bootstrap</a>
                    </div>
                    <button onClick={()=>this.toggleSideBarFunc()}>Click!</button>
                    <nav className={this.state.toggleSideBar? "show":""}>
                        <ul>
                            <li>
                                <a href="#/services">Services</a>
                            </li>
                            <li>
                                <a href="#/portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#/about">About</a>
                            </li>
                            <li>
                                <a href="#/team">Team</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    };
 }

export default Banner;