import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log("this: ", this)
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        let status = e.currentTarget.value;
        this.setState(
            {
                status: status
            }
        )
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "Write your status here"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input value={this.state.status}
                           autoFocus={true}
                           onBlur={this.deactivateEditMode}
                           onChange={this.onStatusChange}/>
                </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;