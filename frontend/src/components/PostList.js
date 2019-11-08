import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Crisp from '../crisp.png'
import { connect } from 'react-redux'
import { fetchChicken, fetchChickens } from '../action/index';


class PostList extends Component {
    componentDidMount() {
        this.props.fetchChicken();
      }

    render(){
        
        console.log(this.props.chickens)
        const { posts, chickens } = this.props;
        const chickenList = chickens ? (
            chickens.map( chicken => {
                return (
                    <div className="col s10 offset-s1 m6 l4" key={chicken.id}>
                    <div className="card small">
                    <div className="card-image ">
                       <img src={chicken.image} alt="titleimage"/>
                     </div>
                      <div className="card-content">
                        <div></div>
                        <i className="right material-icons pink-text text-pink">favorite</i>
                          <br></br>
                          <div className="card-title">
                             <Link to ={'/'+chicken.id}>
                                <span className="card-title red-text">{chicken.name.slice(0,20)}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
            
                )
            })   
        ) : (
            <div className="center">No Post Yet</div>
        )
        return (
            <div className="PostList">
                  {chickenList}
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChicken: () => { dispatch(fetchChickens())}
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        chickens: state.chickens
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(PostList)