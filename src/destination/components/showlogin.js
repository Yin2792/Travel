import React, { Component, useState } from 'react'
export const ShowLogin = (props) => {

    const [showHide, setHide] = useState(props.showHide)
    const [ColorChange, setColor] = useState(1)
    const [HoverColor,setHover] = useState(false)

    const HandleLogin = (num) => {
        setColor(num)

    }
    const HandleSignin = (num) => {
        setColor(num)

    }
    const HideZindex = () => {
        setHide(false)
    }
    const HandleEnter= () =>{
        setHover(true)
    }
    const HandleLeave= () =>{
        setHover(false)
    }
    
    return (
        <div className="row">
    
            <div style={{
                display: showHide ? 'block' : 'none', zIndex: "1",
                background: 'rgba(0,0,0,0.8)', position: 'fixed', height: "100%", width: "100%", left: 0, right: 0, color: '#bbbebf'
            }}>

                <div style={{ margin: "auto", width: "375px", backgroundColor: 'white', zIndex: '-1' }}>
                    <div style={{ width: '100%', position: 'relative', boxSizing: 'border-box', backgroundColor: 'rgba(0,0,0,0.8)' }} >
                        <ul className="nav my-3">
                            <li className="nav-item" onClick={() => HandleSignin(1)} >
                                <a className="active nav-link py-3 px-3" data-toggle="tab" href="#nav-signin" style={ColorChange == 1 ? { color: 'red', backgroundColor: 'white' } : { color: '#bbbebf' }}>Sign Up</a>
                            </li>
                            <li className="nav-item" onClick={() => HandleLogin(2)} >
                                <a className="nav-link py-3 px-3" data-toggle="tab" href="#nav-login" style={ColorChange == 1 ? { color: '#bbbebf' } : { backgroundColor: 'white', color: 'red' }}>Log In</a>
                            </li>
                            <li className="nav-item" style={{ cursor: 'pointer' }}>
                                <a className="nav-link py-3 px-3" onClick={() => HideZindex()}>x</a>
                            </li>

                        </ul>
                    </div>
                    <div class="tab-content" id="nav-tabContent">
                        <div style={{ backgroundColor: '#fff', padding: "5px", position: "relative", width: '100%', height: '400px' }} className="tab-pane active justify-content-center" id="nav-signin">

                            <form>

                                <div class="form-group px-3">
                                    <label for="exampleFormControlInput1">User Name</label>
                                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name" />
                                </div>
                                <div class="form-group px-3">
                                    <label for="exampleFormControlInput1">password</label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password" />
                                </div>
                                <div class="form-group px-3">
                                    <label for="exampleFormControlInput1">Confirm password</label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="confirm password" />
                                </div>

                                <div className="d-flex justify-content-center" style={{
                                    height: '40px', margin: 'auto', cursor: "pointer",
                                    width: "90%", backgroundColor: 'red', position: 'relative'
                                }}>
                                    <button type="submit" className="btn" style={{ backgroundColor: 'red', color: 'white' }}>Register</button>
                                </div>
                            </form>
                        </div>
                        <div style={{ backgroundColor: '#fff', position: "relative", width: '100%', height: '350px', padding: "5px" }} className="tab-pane justify-content-center" id="nav-login">

                            <form>

                                <div class="form-group px-3">
                                    <label for="exampleFormControlInput1">User Name</label>
                                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name" />
                                </div>
                                <div class="form-group px-3">
                                    <label for="exampleFormControlInput1">password</label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password" />
                                </div>
                                <div class="form-row px-3">
                                <div class="col-auto my-1">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="autoSizingCheck2" />
                                        <label class="form-check-label" for="autoSizingCheck2">
                                            Remember me
                                    </label>
                                    </div>
                                </div>
                               
                                    <div class="col-auto my-1">
                                        <a href="#" style={{textDecoration:'none', color:HoverColor?'red':'#bbbebf'}} onMouseEnter={()=>HandleEnter()} onMouseLeave={()=>HandleLeave()}>Forget Passord?</a>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center" style={{
                                    height: '40px', margin: 'auto', cursor: "pointer",
                                    width: "90%", backgroundColor: 'red', position: 'relative'
                                }}>
                                    <button type="submit" className="btn" style={{ backgroundColor: 'red', color: 'white' }}>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}
export default ShowLogin