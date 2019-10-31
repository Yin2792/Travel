import React, { useState } from 'react'
import { Content, Image } from './elements/bagan'
import './destination.css'
import Table from './components/table'
import ShowLogin from './components/showlogin'
const BaganFacts = [
    {
        id: 1,
        smallTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est.",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: "image1.jpg",
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '104'

    },
    {
        id: 2,
        smallTitle: "Mandalay,Third Largest Place,one of the fascinating place in Myanmar",
        paragraphs: "Mandalay was founded in 1857 by King Mindon, replacing Amarapura as the new royal capital of the Konbaung dynasty. It was Burma's final royal capital before the kingdom's annexation by the British Empire in 1885. Under British rule, Mandalay remained commercially and culturally important despite the rise of Yangon, the new capital of British Burma. The city suffered extensive destruction during the Japanese conquest of Burma in the Second World War. In 1948, Mandalay became part of the newly independent Union of Burma.",
        image: 'image3.jpg',
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    }
]

const Tour = {

    "Facts": [
        {
            "bagan": [
                {
                    id: 1,
                    name:"Arrive in Bagan",
                    image: "image3.jpg"
                },
                {
                    id: 2,
                    name: "Temple Tour Of Bagan",
                    image: "image4.jpg"
                },
                {
                    id: 3,
                    name: "Visit Mount Popa&More Temples",
                    image: "image5.jpg"
                }
            ],
            "mandalay": [
                {
                    id: 1,
                    name:"Arrive in Mandaly",
                    image:"image4.jpg"
                },
                {
                    id: 2,
                    name:"Temple Tour Of Mandalay",
                    image:"image3.jpg"
                },
                {
                    id: 3,
                    name:"Visit Mandaly Hill",
                    image:"image5.jpg"
                }
            ]
        }
    ]


}
const Categories = {


    "bagan": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
    "mandalay": [
        {
            id: 1,
            name: "City being full of culture",

        },
        {
            id: 2,
            name: 'Hill walking on Mandalay Hill',

        },
        {
            id: 3,
            name: "Feeling the rual along irrawaddy river",

        }
    ]


}


const Destination = (props) => {
    const id = props.match.params.id
    const name = props.match.params.name

    const [width, setWidth] = useState(window.innerWidth)
    window.onresize = () => setWidth(window.innerWidth)
    const [showHide, setShowHide] = useState(true)
    // const HandleZindex = (e) => {
    //     e.preventDefault()
    //     setShowHide(true)
    // }
    console.log(width)
    const tour = Tour.Facts.reduce((r, c) => {
        return c
    })
    const HandleClick = ()=>{
        window.location.href='/tour'
    }
    return (


        <div className="container-fluid">
            <ShowLogin showHide={showHide} />
            <div className="container pt-4 mt-4" style={{ color: ' #4d5656 ' }}>

                <div className="row">

                    {BaganFacts.map((val, k) => {

                        if (id == val.id) {

                            const tableLists = [val.country, val.visa, val.language, val.currency, val.area]
                            return (
                                <div className="col-md-9" key={k}>
                                    <Content title={name.toUpperCase()} smallTitle={val.smallTitle} paragraph={val.paragraphs} />
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 py-1">
                                            <div className="ImageHover" style={{ overflow: 'hidden' }}>
                                                <Image images={val.image} />

                                            </div>

                                        </div>
                                        <div className="col-md-6 col-sm-6 py-1">
                                            <div className="ImageHover" style={{ overflow: 'hidden' }}>
                                                <Image images={val.image} />

                                            </div>

                                        </div>
                                    </div>
                                    <div className="py-1">
                                        <h2>Good To Know</h2>
                                        <div className="py-2">
                                            <Table lists={tableLists} />
                                        </div>
                                        <Content title={name.toUpperCase()} paragraph={val.paragraphs} />
                                        <div className="row">

                                            <div className="col-md-6 col-sm-6 py-1">
                                                <div className="ImageHover my-1" style={{ overflow: 'hidden' }}>
                                                    <Image images={val.image} />
                                                </div>
                                                <div className="ImageHover my-1" style={{ overflow: 'hidden' }}>
                                                    <Image images={val.image} />
                                                </div>

                                            </div>
                                            <div className="col-md-6 col-sm-6 py-1">
                                                <div className="ImageHover my-1" style={{ overflow: 'hidden' }}>
                                                    <Image images={val.image} />
                                                </div>
                                                <div className="ImageHover my-1" style={{ overflow: 'hidden' }}>
                                                    <Image images={val.image} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}


                    <div className="col-md-3">
                        <h5>Tours</h5>
                        {id == 1 ? tour.bagan.map((val, k) => {

                            return (
                                <a href="/" style={{color:'#4d5656 ',textDecoration:'none'}}>
                                <div className="d-flex my-4" key={k}>
                                    <Image images={val.image} style={{ height: '100px', width: '100px', cursor: 'pointer' }} />
                                    <div className="flex-row mx-2">
                                        {val.name}
                                    </div>
                                    
                                </div>
                                </a>
                            )
                        }) :
                            tour.mandalay.map((val, k) => {
                                console.log(val)
                                return (
                                    <a href="/tour" style={{color:'#4d5656 ',textDecoration:'none'}}>
                                    <div className="d-flex my-4" key={k}>
                                        <Image images={val.image} style={{ height: '100px', width: '100px', cursor: 'pointer' }} />
                                        <div className="flex-row mx-2">
                                            {val.name}
                                        </div>
                                    </div>
                                    </a>
                                )
                            })




                        }

                        <div className="my-3 py-3 ">
                            <h3>Categories</h3>
                            {id == 1 ? Categories.bagan.map((val, k) => {

                                return (<div className="my-4 category" key={k}>
                                    <a href='/tours' style={{ color: '#a6acaf', cursor: 'pointer', textDecoration: 'none' }}><span>{val.name}</span></a>
                                </div>
                                )
                            }) :
                                Categories.mandalay.map((val, k) => {

                                    return (<div className="my-4 category" key={k}>
                                        <a href='/tours' style={{ color: '#a6acaf', cursor: 'pointer', textDecoration: 'none' }}><span>{val.name}</span></a>
                                    </div>
                                    )
                                })




                            }
                        </div>

                        <div className="py-0 my-0 mx-0">

                            <h3>Instagram</h3>


                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row pl-0 pr-0 mr-0">
                                        <div className="col-md-4 col-sm-4">
                                            <img src={require('./images/image1.jpg')} style={width < 730 ? { height: '175px', width: '175px' } : { height: '90px', width: '90px' }} />
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <img src={require('./images/image1.jpg')} style={width < 730 ? { height: '175px', width: '175px' } : { height: '90px', width: '90px' }} />
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <img src={require('./images/image1.jpg')} style={width < 730 ? { height: '175px', width: '175px' } : { height: '90px', width: '90px' }} />
                                        </div>
                                    </div>
                                    <div className="row pl-0 pr-0 mr-0">
                                        <div className="col-md-4 col-sm-4">
                                            <img src={require('./images/image3.jpg')} style={width < 730 ? { height: '175px', width: '175px' } : { height: '90px', width: '90px' }} />
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <img src={require('./images/image3.jpg')} style={width < 730 ? { height: '175px', width: '175px' } : { height: '90px', width: '90px' }} />
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <img src={require('./images/image3.jpg')} style={width < 730 ? { height: '175px', width: '175px' } : { height: '90px', width: '90px' }} />
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