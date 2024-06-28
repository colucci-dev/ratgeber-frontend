export default function ShortLinks() {
    return (
    <div className="grid-container">
            <div className="grid-title">
                Auf einen Blick
            </div>
            <div className="grid-card">
                <a href="/blog">
            <img className="grid-img" src="assets/notebook.jpg"/>
            <p>BLOG</p>
            </a>
            </div>
            <div className="grid-card">
                <a href="/creator">
                <img className="grid-img" src="assets/bmw-street.jpg"/>
                <p>CREATOR</p>
                </a>
        </div>
        <div className="grid-card">
            <a href="/downloads">
                <img className="grid-img" src="assets/keyboard.png"/>
                <p>DOWNLOADS</p>
            </a>
        </div>
    </div>
    )
}