'use client'

export default function Assistant() {
    return (
    <div className="grid-container">
        <div className="grid-title">
            Ihr pers&ouml;nlicher Assistent
        </div>
        <textarea className="chat-response" id="chat_response">

        </textarea>
        <form onSubmit={handleQuestion} >
            <input type="text" className="chat-input" id="question" />
            <input type="submit" className="chat-button" />
        </form>
    </div>
    )

}

function handleQuestion() {

}