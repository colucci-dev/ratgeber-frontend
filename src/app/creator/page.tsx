'use client'
import { useState } from "react";
import { BusinessCardData } from "../classes/businesscard";
import PageContainer from "../components/PageContainer";
import { fetchVisitenkarte } from "../utils/api";

export default function Creator() {
    const [download, setDownload] = useState("");

    async function handleSubmit(event: any) {
        event.preventDefault();
        //event.currentTarget.elements.usernameInput.value
        const formData : BusinessCardData = {
            firstname: event.currentTarget.elements.firstname.value,
            lastname: event.currentTarget.elements.lastname.value,
            company: event.currentTarget.elements.company.value,
            job: event.currentTarget.elements.job.value,
            telephone: event.currentTarget.elements.telephone.value,
            mail: event.currentTarget.elements.mail.value,
            street: event.currentTarget.elements.street.value,
            plz: event.currentTarget.elements.plz.value,
            ort: event.currentTarget.elements.ort.value
        };
        const downloadId = await fetchVisitenkarte(formData);
        setDownload(downloadId.response);
        console.log(JSON.stringify(formData));
    }

    return (
        <PageContainer image="assets/bmw_m8.png">
            <div className="blog-wrapper">
                <div className="blogArticle">
                    <div className="title">Creator</div>

                <p><b>Lassen Sie hier ihre persönliche Visitenkarte erstellen!</b></p>
                <div className="title">Visitenkarten-Generator</div>
                <form className="creator" onSubmit={handleSubmit}>
                    <input type="text"  id="firstname" placeholder="Vorname" />
                    <input type="text" id="lastname" placeholder="Nachname"/>
                    <input type="text" id="job" placeholder="Berufsbezeichnung"/>
                    <input type="text" id="telephone" placeholder="Tel."/>
                    <input type="text" id="mail" placeholder="E-Mail"/>
                    <input type="text" id="company" placeholder="Firma"/>
                    <input type="text" id= "street" placeholder="Strasse"/>
                    <input type="text" id="plz" placeholder="PLZ"/>
                    <input type="text" id="ort" placeholder="Ort"/>
                    <input type="submit" className="button" value="Generierung starten" />
                    {download.length > 0 ? (
                    <a href={`/creator_pdfs/${download}.pdf`}>
                    <input type="button" className="button" value="Herunterladen" />
                    </a>) : (<div></div>)}
            </form>
                </div>
            </div>
            
        </PageContainer>
    )

}
