import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'

class Home extends Component {


    render(){
        return (
            <div className="container home row">
                <div className="col s12 m8 l8"> 
                    <PostList />
                </div>
                <div className="col s12 m3 l3">
                    <ul className="collection">
                        <li className="collection-item avatar">
                          <i className="material-icons circle green">insert_chart</i>
                            <span className="title">Title</span>
                            <p>First Line</p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>

                        </li>
                    </ul>

                </div>
            </div>
        )
    }

}



const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        chickens: state.chickens

    }
} 

export default connect(mapStateToProps)(Home)