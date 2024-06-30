import Card from "../Card"

export default function BlogTeaser() {
    return (
    <div className="container">
        <div className="title">Aktuelle Themen</div>
            <div className="headline">
                <div className="headline-item">
            <img src="assets/bmw-street.jpg" />
            </div>
            <div className="headline-item headline-content">
                <h6>Kategorie | 21.05.2024 | 4 Min.</h6>
                <h2>DER WEG ZUR CONTENT-STRATEGIE</h2>
                <p>Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen.</p>
            </div>
        </div>
        <div className="grid-container">
        <Card image={"assets/notebook.jpg"} href={"blog"} title={"Der Weg zur Content-Strategie"} category={"Content-Strategie"} date={"29.06.2024"} teaser={"Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen."} />
        <Card image={"assets/notebook.jpg"} href={"blog"} title={"Der Weg zur Content-Strategie"} category={"Content-Strategie"} date={"29.06.2024"} teaser={"Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen."} />
        <Card image={"assets/notebook.jpg"} href={"blog"} title={"Der Weg zur Content-Strategie"} category={"Content-Strategie"} date={"29.06.2024"} teaser={"Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen."} />
        </div>
        <a className="button" href="/"><span>Lesen Sie mehr</span><img src="assets/right-arrow.svg" /></a>
    </div>
    )

}
