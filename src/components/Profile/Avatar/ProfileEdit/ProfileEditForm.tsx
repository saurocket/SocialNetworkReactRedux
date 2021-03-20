import { Field, reduxForm } from 'redux-form';
import React from "react";
import {ProfileType} from "../../../../redux/profileReducer";

type PropsType = {
    changeEdit: () =>void
    handleSubmit: () =>void
    profile: ProfileType
    error: string

}

const ProfileEditForm:React.FC<PropsType> = ({changeEdit, handleSubmit, profile, error} ) => {

    const {contacts} = profile
    const arrSocial = Object.keys(contacts);
    console.log(arrSocial);

    return (
       <div>
           <h2>Edit mt profile</h2>
           <button onClick={changeEdit}>Edit my information</button>
           <form onSubmit={handleSubmit}>
               <div>
                   <span>Full name</span>
                   <Field name="fullName" component="input" type="text"/>
               </div>
               <div>
                   <span>Looking For a Job</span>
                   <Field name="lookingForAJob" component="input" type="checkbox"/>
               </div>
               <div>
                   <span>Looking For A Job Description</span>
                   <Field name="lookingForAJobDescription" component="textarea" type="text"/>
               </div>
               <div>
                   <span>About me</span>
                   <Field name="aboutMe" component="textarea" type="text"/>
               </div>
               {
                   arrSocial.map(item => {
                           return (
                               <div key={item} >
                                   <span>{item.toUpperCase()}</span>
                                    <Field name={`contacts.${item}`} component="input" type="text"/>
                               </div>
                           )
                   })
               }
               <div>
                   <button>save</button>
               </div>
                  {error && <div>{error}</div>}
           </form>
       </div>
    )
}
export default (ProfileEditForm);