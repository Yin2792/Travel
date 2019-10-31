import React from 'react'
import {Link} from 'react-router-dom'
const data =[
    {
        id:1,
        name:'one',
        country:'bagan'
    },
    {
        id:2,
        name:'two',
        country:'mandalay'
    }
]
export const Links = () =>{

    return (
        <div>
         {data.map((v,k)=>{
             return (
                 

                 <a href={`/destination/${v.country}/${v.id}`} key={k}>{v.name}</a>
                 
             )
         })}
        </div>
    )


}