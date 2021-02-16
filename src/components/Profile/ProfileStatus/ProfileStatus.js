import React from 'react';
import clasess from './ProfileStatus.module.css'


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditeMode = () => {
        console.log(this);
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    statusChangeInput = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevP,prevS) {
         if(prevP.status !== this.props.status){
             this.setState({status: this.props.status});

         }
        console.log("---------------------");
    }

    render() {
        return (
            <div className={clasess.wrapper}>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={
                            this.activateEditeMode
                        }>{this.props.status || `we can't look your status`}</span>
                    </div> :
                    <div>
                        <input onChange={
                            this.statusChangeInput
                        } autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/>
                    </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;