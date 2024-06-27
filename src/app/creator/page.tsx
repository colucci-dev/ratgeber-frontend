'use client'
import PageContainer from "../components/PageContainer";

export default function Creator() {
    return (
        <PageContainer image="assets/bmw_m8.png">
            <h1>Creator</h1>
            <p><b>Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen.</b></p>
            <h1>Visitenkarten-Generator</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" title="Vorname" />
                <input type="text" title="Nachname"/>
                <input type="text" title="Titel"/>
                <input type="text" title="Berufsbezeichnung"/>
                <input type="text" title="Tel."/>
                <input type="text" title="Mobil"/>
                <input type="text" title="Strasse"/>
                <input type="text" title="PLZ"/>
                <input type="text" title="Ort"/>
                <input type="submit" title="Generierung starten" />
            </form>
        </PageContainer>
    )
}

function handleSubmit() {

}