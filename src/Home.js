import React from "react";
import shafik from 'D:/Learning/React/Components/statecheckpoint/src/image.jpg'
import './App.css';


export default class Home extends React.Component {
    state = {
        Person: {
            fullName: "Sara Mahmoud",
            bio: "I am software engineer",
            imgSrc: { shafik },
            profession: "Frond-end engineer"
        },
      
        count: 0,
        block: null
    };

 
      componentDidMount() {
         let interval = setInterval(() => this.setState(prev=>({ count : prev.count+1})),1000);
         this.setState(prev => ({...prev,block :interval}))
    
      }
      componentWillUnmount() {
        console.log("unmounted")
        clearInterval(this.state.block)
    
       }
    
    render() {
        const{fullName,bio,profession}=this.state.Person
        return (
            <div className='app'>
                
                    <>
                        <h1>{fullName}</h1>
                        <h1>{bio}</h1>
                        <img src={shafik} alt="Baseet" className='image' />
                        <h1>{profession}</h1>
                        <br></br>
                        <h1>This data is been showed for {this.state.count} secs</h1>

                    </>
               
            </div>
        )
    }


}