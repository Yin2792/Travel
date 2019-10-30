import React, { Component } from 'react'

class Table extends Component {

    render() {
        return (


            <table className="table" style={{color:'#0f0e0d'}}>
                <tbody >
                    <tr >

                        <td>Country</td>
                        <td>Myanmar</td>

                    </tr>
                    <tr >

                        <td>Visa</td>
                        <td>Visa is needed for local citizens but foreginers must need</td>
                    </tr>
                    <tr >

                        <td>Langauage Spoken</td>
                        <td>Myanmar</td>
                    </tr>
                    <tr >

                        <td>Currency Used</td>
                        <td>Kyats</td>
                    </tr>
                    <tr >

                        <td>Area(km)</td>
                        <td>430,000km2</td>
                    </tr>
                </tbody>
            </table>


        )

    }
}
export default Table
