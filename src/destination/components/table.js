import React, { Component } from 'react'

const Table =(props)=>{
        const {lists} =props
        
        return (
          
          
            <table className="table" style={{color:'#0f0e0d'}}>
                <tbody >
                    <tr >

                        <td>Country</td>
                        <td>{lists[0]}</td>

                    </tr>
                    <tr >

                        <td>Visa</td>
                        <td>{lists[1]}</td>
                    </tr>
                    <tr >

                        <td>Langauage Spoken</td>
                        <td>{lists[2]}</td>
                    </tr>
                    <tr >

                        <td>Currency Used</td>
                        <td>{lists[3]}</td>
                    </tr>
                    <tr >

                        <td>Area(km)</td>
                        <td>{lists[4]}</td>
                    </tr>
                </tbody>
            </table>


        )


}
export default Table
