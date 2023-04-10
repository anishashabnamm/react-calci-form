import axios from "axios";

import React, { Component } from 'react'

export class Api extends Component {
    constructor (props){
        super(props)

        this.state = {
            apipost:[],
            errormessage:''
        }
    }
    componentDidMount()
    {
        axios.get('https://rickandmortyapi.com/api/character/?page=19')
        .then(response =>{
            console.log(response)
            this.setState({apipost:response.data.results})
        })

        .catch(error=>{
            console.log(error)
            this.setState({errormessage:"Error"})
        })
    }
  render() {
    const {apipost,errormessage}=this.state
    return (
        <React.Fragment>
            <div>Rick And Morty</div>
            <div>
                {apipost.length?apipost.map(a=> <div key={a.id}>{a.name}<br></br><img src={a.image} alt="loading"></img></div>):null}
                {errormessage?<div>{errormessage}</div>:null}
            </div>
        </React.Fragment>
    )
  }
}

export default Api