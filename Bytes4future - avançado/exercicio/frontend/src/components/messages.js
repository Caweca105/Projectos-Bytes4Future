import React from "react"

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        fetch("/api/messages/")
            .then(response => response.json())
            .then(json => this.setState({ 
                messages: json.messages
            }))
        }

    render() {
        if (this.state.messages.length === 0) {
            return (
                <p>Não há mensagens.</p>
            )
        }
        return (
            <ul>
                {
                this.state.messages.map((message, i) => (
                    <li key={i}>
                        `{ Nome: ${message.name} | Mensagem: ${message.message} }` 
                    </li>
                ))
            }
            </ul>
        )
    }
}