import React, { useState } from 'react'
import { Content, Image } from './elements/bagan'
import './destination.css'
import Table from './components/table'
import ShowLogin from './components/showlogin'
import { tupleTypeAnnotation } from '@babel/types'
const Images = ['image1.jpg', 'image2.jpg']
const Tour = [
    {
        id: 1,
        name: "Arrive in Bagan",
        image: "image3.jpg"
    },
    {
        id: 2,
        name: 'Temple Tour Of Bagan',
        image: "image4.jpg"
    },
    {
        id: 1,
        name: "Visit Mount Popa&More Temples",
        image: "image5.jpg"
    },

]
const categories = [
    {
        id: 1,
        name: 'Watching Sunset'
    },
    {
        id: 2,
        name: "Riding Air Ballon"
    },
    {
        id: 4,
        name: "Riding E-bike"
    }
]
const smallTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est."
const paragraph = "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula."
const Destination = (props) => {
    const [width, setWidth] = useState(window.innerWidth)
    window.onresize = () => setWidth(window.innerWidth)
    const [showHide, setShowHide] = useState(true)
    // const HandleZindex = (e) => {
    //     e.preventDefault()
    //     setShowHide(true)
    // }
    console.log(width)
    // console.log(props.match.params.id)

    return (

        <div className="container-fluid">
            <ShowLogin showHide={showHide} />
            <div className="container pt-4 mt-4" style={{ color: ' #4d5656 ' }}>
               
                <div className="row">
                    <div className="col-md-9">
                        <Content title={'Bagan'} smallTitle={smallTitle} paragraph={paragraph} />
                        <div className="row">

                            {Images.map((val, key) => {

                                return (
                                    <div className="col-md-6 col-sm-6 py-1" key={key}>
                                        <div className="ImageHover" style={{ overflow: 'hidden' }}>
                                            <Image images={val} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="py-1">
                            <h2>Good To Know</h2>
                            <div className="py-2">
                                <Table />
                            </div>
                            <Content title={'Bagan'} paragraph={paragraph} />
                            <div className="row">

                                {Images.map((val, key) => {

                                    return (
                                        <div className="col-md-6 col-sm-6 py-1" key={key}>
                                            <div className="ImageHover my-1" style={{ overflow: 'hidden' }}>
                                                <Image images={val} />
                                            </div>
                                            <div className="ImageHover my-1" style={{ overflow: 'hidden' }}>
                                                <Image images={val} />
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <h5>Tours</h5>
                        {Tour.map((val, key) => {

                            return (
                                <div className="d-flex my-4" key={key}>
                                    <Image images={val.image} style={{ height: '100px', width: '100px', cursor: 'pointer' }} />
                                    <div className="flex-row mx-2">
                                        {val.name}
                                    </div>
                                </div>

                            )
                        })}
                        <div className="my-3 py-3 ">
                            <h3>Categories</h3>
                            {categories.map((val, k) => {
                                return (<div className="my-4 category" key={k}>
                                    <a href='/' style={{ color: '#a6acaf', cursor: 'pointer', textDecoration: 'none' }}><span>{val.name}</span></a>
                                </div>
                                )
                            })}
                        </div>

                        <div className="py-0 my-0 mx-0">

                            <h3>Instagram</h3>


                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row pl-0 pr-0 mr-0">
                                        <div className="col-md-4 col-sm-4">
                                            <img src={require('./images/image1.jpg')} style={width < 730 ? { height: '175px', width: '175px' } : { height: '90px', width: '90px', cursor: 'pointer' }} />
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <img src={require('./images/image1.jpg')} style={width < 730 ? { height: '175px', width: '175px' } : { height: '90px', width: '90px', cursor: 'pointer' }} />
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <img src={require('./images/image1.jpg')} style={width < 730 ? { height: '175px', width: '175px' } : { height: '90px', width: '90px', cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                    <div className="row pl-0 pr-0 mr-0">
                                        <div className="col-md-4 col-sm-4">
                                            <img src={require('./images/image3.jpg')} style={width < 730 ? { height: '175px', width: '175px' } : { height: '90px', width: '90px', cursor: 'pointer' }} />
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <img src={require('./images/image3.jpg')} style={width < 730 ? { height: '175px', width: '175px' } : { height: '90px', width: '90px', cursor: 'pointer' }} />
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <img src={require('./images/image3.jpg')} style={width < 730 ? { height: '175px', width: '175px' } : { height: '90px', width: '90px', cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default Destination