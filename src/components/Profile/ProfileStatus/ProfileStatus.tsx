import React, {ChangeEvent} from 'react';
import clasess from './ProfileStatus.module.css'


type PropsTyte  = {
        status: string
    updateStatus: (status: string) => void
}
type StateType= {
 editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsTyte, StateType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditeMode = () => {
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
    statusChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevP:PropsTyte,prevS: StateType) {
         if(prevP.status !== this.props.status){
             this.setState({status: this.props.status});
         }
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