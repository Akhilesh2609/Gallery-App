import axios from "axios" ;
import {useState,useEffect} from  'react';
const count=1;
function LoadImages(){
    const[state,setState]=useState([])
    useEffect(()=>{
        axios
        .get("https://api.unsplash.com/photos?client_id=F1x8oIoXmXd5NQpR1aAInA9vwkS35Vs2SgNY6VAzwfo")
        .then((data)=>{
            setState(data.data)
        })
    },[count])
    return state;
}
function Searchimages(query){
    const[state,setState]=useState([])
    useEffect(()=>{
        axios
        .get("https://api.unsplash.com/search/photos?query="+query+"&client_id=F1x8oIoXmXd5NQpR1aAInA9vwkS35Vs2SgNY6VAzwfo")
        .then((data)=>{
            setState(data.data.results)
        })
    },[query])
    return state;
}
export{LoadImages}
export {Searchimages}