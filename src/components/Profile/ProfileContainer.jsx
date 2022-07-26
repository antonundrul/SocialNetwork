import React from 'react'
import {connect} from 'react-redux';
import Profile from "./Profile";
import {addPost, setUserProfile, updateNewPostText} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";


export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        usersAPI.getProfile(userId).then(data => {
            // this.props.toggleIsFetching(false);
            this.props.setUserProfile(data);

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
