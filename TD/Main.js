import React from "react"

export default function Main (props){
    const {buddy} = props
    return (
         <div className = "streamer" >
         <div className="streamer-block">
         
      <a className="image-link" href ={buddy.twitch} target="_blank" rel="noopener noreferrer">   <img className = "streamer--pic" src= {`./Images/${buddy.profilePic}`}/></a>
      
            <div className = "info-box">
            <h2 className="streamer--name">{buddy.username}</h2>
            <p className = "streamer--about">{buddy.about}</p>
            <h4 >Followers</h4><span className = "follows">{buddy.followers}</span>
            <h4>Categories</h4><p className = "categories"> {buddy.categories}</p>
    </div>
         </div>
        </div>
    )
}

    