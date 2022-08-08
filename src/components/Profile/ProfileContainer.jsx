import React from 'react'
import {connect} from 'react-redux';
import Profile from "./Profile";
import {addPost, getProfile, updateNewPostText} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";


export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.getProfile(userId);
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

export default connect(mapStateToProps,
    {addPost, updateNewPostText, getProfile})(WithUrlDataContainerComponent);
