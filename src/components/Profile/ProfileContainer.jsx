import React from 'react'
import {connect} from 'react-redux';
import Profile from "./Profile";
import {addPost, setUserProfile, updateNewPostText} from "../../redux/profileReducer";
import axios from "axios";
import {useParams} from "react-router-dom";


export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
       debugger
        let userId = this.props.match.params.userId||2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                // this.props.toggleIsFetching(false);
                this.props.setUserProfile(response.data);

            });
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {addPost, updateNewPostText, setUserProfile})(WithUrlDataContainerComponent);
