'use client'

export default function Assistant() {
    return (
    <div>
        <h1>
            Ihr pers&ouml;nlicher Assistent
        </h1>
        <textarea id="chat_response">

        </textarea>
        <form onSubmit={handleQuestion} >
            <input type="text" id="question" />
            <input type="submit" />
        </form>
    </div>
    )

}

function handleQuestion() {

}