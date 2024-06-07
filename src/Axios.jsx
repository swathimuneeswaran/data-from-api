import React,{useEffect, useState} from 'react'
import axios from "axios";
import "./index.css"

const Axios = () => {

    const [data,setData]=useState([])
    const [num,setNum]=useState(0)

   
    const fetchFromApi=()=>{

     const res=axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setData(res.data))
     .catch((error)=>console.log(error))
    }    

    const fetchSpecificPerson=()=>{

        const res=axios.get(`https://jsonplaceholder.typicode.com/users/${num}`)
       .then((res)=>{
        setData(res.data)
        console.log(res.data)
       })
        .catch((error)=>console.log(error))
       }    
        
            
    
       useEffect(()=>{
        if(num===0 || num==="")
            {
                fetchFromApi()
            }
            else{
                fetchSpecificPerson()
            }
       },[num])
    

  return (
    <>
    <div className="container">
        <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} placeholder='0'style={{marginTop:"30px",border:"1px solid white"}}/>
        <table>
            <thead>
                <tr>
                    <td>name</td>
                    <td>username</td>
                    <td>email</td>
                    <td>website</td>
                </tr>
            </thead>
            <tbody>
                {num===0 ? 
                (data.map((data)=>(
                    <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>{data.website}</td>
                    </tr>
                )))
                : 
                (
                <tr>
                       <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>{data.website}</td>
                </tr>
                )
                  }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Axios