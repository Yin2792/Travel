import React from 'react'
import {Switch,Route,WithRouter,Redirect} from 'react-router-dom'
import Destination from './destination/destination'

export const Router=()=>{

    return(
        
       
        
           
        <Switch>
            <Route path="/" component={Destination}/>
    
        </Switch>
    
        
    )
}