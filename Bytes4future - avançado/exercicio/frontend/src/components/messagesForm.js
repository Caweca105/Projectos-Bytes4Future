import React from "react"
import { Formik, Field } from "formik"

function MessageForm(props) {
    return (
        <section>
            <Formik
                initialValues={{name: "", message: ""}}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {
                    (props) => (
                        <form onSubmit={props.handleSubmit}>
                            <p>
                                <label htmlForm="name">
                                    Nome:
                                    <Field type="text" name="name" />
                                </label>
                            </p>
                            <p>
                                <label htmlForm="message">
                                    Message:
                                    <Field as="textarea" name="message" />
                                </label>
                            </p>
                            <button type="submit">Submeter</button>
                        </form>
                    )
                }
            </Formik>
        </section>
    )
}

export default MessageForm