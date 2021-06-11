import React from "react";
import MessageForm from "./MessageForm";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }

    this.fetchMessages = this.fetchMessages.bind(this)
  }

  componentDidMount() {
    this.fetchMessages()
    this.intervalId = setInterval(this.fetchMessages, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  fetchMessages() {
    fetch("/api/messages")
      .then(response => response.json())
      .then(json => this.setState({
        messages: json.messages
      }))
  }

  render() {
    return (
      <section>
        <MessageForm onSubmit={this.fetchMessages} />
        {
          this.state.messages.length === 0
            ? <p>Não há mensagens.</p>
            : (
              <ul>
                {
                  this.state.messages.map((message, i) => (
                    <li key={i}>
                      {Nome: ${message.name} | Mensagem: ${message.message}}
                    </li>
                  ))
                }
              </ul>
            )
        }
      </section>
    )
  }
}

export default Messages