'use client'
import { useState } from "react";
import { CampaignData } from "../classes/campaign";
import PageContainer from "../components/PageContainer";
import { postCampaign } from "../utils/api";

export default function Campaign() {
    const [requestOk, setRequestOk] = useState(false);
    async function handleSubmit(event: any) {
        event.preventDefault();
        //event.currentTarget.elements.usernameInput.value
        const formData : CampaignData = {
            firstname: event.currentTarget.elements.firstname.value,
            lastname: event.currentTarget.elements.lastname.value,
            mail: event.currentTarget.elements.mail.value,
        };
        const result = await postCampaign(formData);
        setRequestOk(result);
    }
    return (
        <PageContainer image="assets/auto_party.jpg">
            <div className="blog-wrapper">
                <div className="blogArticle">
                <div className="title">Tag der Offenen Tür</div>

                <p><b>Wir laden Sie gerne ein, um gemeinsam unser 30-jähriges Bestehen zu feiern. Melden Sie sich hier an!</b></p>
                <form className="creator" onSubmit={handleSubmit}>
                    <input type="text"  id="firstname" placeholder="Vorname" />
                    <input type="text" id="lastname" placeholder="Nachname"/>
                    <input type="text" id="mail" placeholder="E-Mail"/>
                    { !requestOk ?
                    (<input type="submit" className="button" value="Anmelden" />)
                    : (<p style={{textAlign: 'center'}}><b>Herzlichen Dank für Ihre Anmeldung.</b></p>)}
            </form>
                </div>
            </div>
            
        </PageContainer>
    )

}
