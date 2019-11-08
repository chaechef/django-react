import React from 'react'
import { NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) =>{

    return(
        <nav className="nav-wrapper white">
            <div className="container">
                <a className="brand-logo black-text" >chimmelier</a>
                <ul className="right ">
                    <li><NavLink className="black-text" to="/"><i className="large material-icons blaok-text text-black">home</i></NavLink></li>
                    <li><NavLink className="black-text" to="/about"><i className="large material-icons blaok-text text-black">lock</i></NavLink></li>
                    <li><NavLink className="black-text" to="/mypage"><i className="large material-icons blaok-text text-black">face</i></NavLink ></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar)