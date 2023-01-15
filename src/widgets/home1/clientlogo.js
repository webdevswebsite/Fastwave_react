import React, { Component } from 'react';

class Clientlogo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="d-flex flex-wrap align-items-center text-center bg-white shadow">
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/01.png`).default} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/02.png`).default} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/03.png`).default} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/04.png`).default} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/05.png`).default} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/06.png`).default} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/07.png`).default} alt="" />
                </div>
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/08.png`).default} alt="" />
                </div>
            </div>
        );
    }
}

export default Clientlogo;