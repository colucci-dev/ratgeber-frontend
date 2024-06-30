'use client'

import { fetchAssistant, fetchThread } from "@/app/utils/api";
import { useEffect, useRef, useState } from "react";

import { useCookies } from "react-cookie";
import Markdown from "react-markdown";

export default function Assistant() {
    const [cookies, setCookie, removeCookie] = useCookies(["assistant"]);
    const [response, setResponse] = useState("");
    
    // immer ans Ende vom Chat gelangen..
    const divRef = useRef(null);
    useEffect(() => {
        const scrollToEnd = () => {
        const div : any = divRef.current;
        if (div) {
            div.scrollTop = div.scrollHeight;
        }
        };

        // Scrollen beim initialen Render
        scrollToEnd();

        // MutationObserver, um bei Inhaltsänderung zu scrollen
        const observer = new MutationObserver(scrollToEnd);
        if (divRef.current) {
        observer.observe(divRef.current, { childList: true, subtree: true });
        }

        return () => observer.disconnect();
    }, []);

    //bearbeitet die Anfrage
    async function handleQuestion(e: any) {
        e.preventDefault();
        const qElement = document.getElementById("question") as any;
        const question = qElement.value;
        if (question.length <= 5) {
            return;
        }
        setResponse("# Antwort wird geladen....");
        qElement.value = "";
        var threadId = cookies.assistant;
        if (!cookies.assistant) {
            threadId = await fetchThread();
            setCookie("assistant", threadId, {sameSite: "none"});
        }
        const response = await fetchAssistant(question, cookies.assistant!);
        setResponse(response);
    }
    
    return (
    <div className="assistant-container">
        <div className="assistant-wrapper">
        <div className="title">
            Ihr pers&ouml;nlicher Assistent
        </div>
        <form className="input-container" onSubmit={handleQuestion} >

            <div ref={divRef} className="chat-response" id="chat-response">
                <Markdown className="chat-markdown">
                    {response}
                </Markdown>
            </div>
            <div className="input-container">
                <input type="text" id="question" placeholder="Stellen Sie eine Frage.." />
                <button>
                    <img src="assets/send.svg" alt="Senden" />
                </button>
                </div>
        </form>
        </div>
    </div>
    );

}
