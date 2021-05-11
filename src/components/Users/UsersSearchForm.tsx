import React from "react";
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../redux/usersReducer";

const usersSearchValidate = (values: any) => {
    const errors = {};
    return errors;
}
type FilterTypeValue = {
    term: string,
    friend: "null" | "true" | "false"
}

type PropsType = {onFilterChanged: (filter: FilterType) => void}

export const UsersSearchForm: React.FC<PropsType> = React.memo(({onFilterChanged}) => {

    const submit = (values: FilterTypeValue, {setSubmitting}:
        { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter:FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }
    return (
        <div>
            <Formik
                initialValues={{term: '', friend: 'null'}}
                validate={usersSearchValidate}
                onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="term"/>
                        <Field as="select" name="friend">
                            <option value="null">All</option>
                            <option value="true">Only Followed</option>
                            <option value="false">Only UnFollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})