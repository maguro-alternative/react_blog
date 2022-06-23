import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ws from "./back/ws.js"

import { Helmet } from "react-helmet"


function Meta(props:any){
    //console.log(typeof ws)
    //console.log(ws)
    console.log(window.location)
    return(
        <Helmet>
            <meta name="viewport" content="width=640" />
            <link rel="icon" href={props.pic}/>
            <meta className="viewport" content="width=device-width,initial-scale=1.0"/>
            <title>{props.name}</title>
            <meta property="og:title" content={props.name}/>
            <meta property="og:url" content="https://sigumataityouda.netlify.app/"/>
            <meta property="og:image" content={props.pic}/>
            <meta property="og:type" content=" website" />
            <meta property="og:description" content={props.description} /> 
            <meta property="og:site_name" content={props.name} /> 
        </Helmet>
    )
}
function Meta2(props:any){
    return(
        <Helmet>
            <script defer src="./back/sls.js"></script>
            <title>{props.name}</title>
            <meta property="og:title" content={props.name}/>
            <meta property="og:url" content="https://sigumataityouda.netlify.app/"/>
            <meta property="og:image" content="https://sigumataityouda.netlify.app/pic/zu3.png"/>
            <meta property="og:type" content=" website" />
            <meta property="og:description" content={props.description} /> 
            <meta property="og:site_name" content={props.name} /> 
        </Helmet>
    )
}
export default Meta;