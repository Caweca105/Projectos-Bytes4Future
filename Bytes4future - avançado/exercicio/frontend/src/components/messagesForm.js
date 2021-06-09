import React from "react"
import { Formik, Field } from "formik"

function MessageForm(props) {
    return (
        <section>
            <Formik
                initialValues={{name: "", message: ""}}
                onSubmit={async (values, {resetForm}) => {
                    console.log(values);
                    try {
                        const res = await fetch("/api/messages", {
                        method: "POST",
                        body: JSON.stringify(values),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    if (res.status = 201) {
                        resetForm();
                    }
                } catch (err) {
                    console.error(err)
                }
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