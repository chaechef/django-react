import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Crisp from '../crisp.png'
import { connect } from 'react-redux'

class Home extends Component {

    render(){
        const { posts } = this.props;

        const postList = posts.length ? (
            posts.map( post => {
                return (
                    <div class="col s10 offset-s1 m6 l4">
                    <div class="card small">
                    <div class="card-image ">
                       <img class="Width 50% "src={Crisp}/>
                     </div>
                      <div class="card-content">
                        <div></div>
                        <i class="right material-icons pink-text text-pink">favorite</i>
                          <br></br>
                          <div class="card-title">
                             <Link to ={'/'+post.id}>
                                <span className="card-title red-text">{post.title.slice(0,20)}</span>
                            </Link>
                          </div>
                          {/* <p>{post.body.slice(0,40)}</p> */}
                        </div>
                      </div>
                    </div>
            
                )
            })   
        ) : (
            <div className="center">No Post Yet</div>
        )
        return (
            <div className="container home row">
                <div className="col s12 m8 l8">
                    <div className=" col s12 m12 l12">
                    <br/>
             
                    <ul id="dropdown2" class=" dropdown-content">
                        <li><a href="#!">one<span class="badge">1</span></a></li>
                        <li><a href="#!">two<span class="new badge">1</span></a></li>
                        <li><a href="#!">three</a></li>
                    </ul>
                    <a class=" right btn dropdown-trigger" href="#!" data-target="dropdown2">Dropdown<i class="material-icons right">arrow_drop_down</i></a>
         
                    </div>
                  {postList}
                </div>
                <div className="col s12 m3 l3">
                    <ul class="collection">
                        <li class="collection-item avatar">
                          <i class="material-icons circle green">insert_chart</i>
                            <span class="title">Title</span>
                            <p>First Line</p>
                            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>

                        </li>
                    </ul>

                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
} 

export default connect(mapStateToProps)(Home)