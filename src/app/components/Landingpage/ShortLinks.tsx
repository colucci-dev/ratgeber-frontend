export default function ShortLinks() {
    return (
        <div className="container">
            <div className="title">
                Auf einen Blick
            </div>
            <div className="grid-container">
                    <div className="grid-card bg-white">
                        <a href="/blog">
                    <img src="assets/notebook.jpg"/>
                    <p className="link">BLOG</p>
                    </a>
                    </div>
                    <div className="grid-card bg-white">
                        <a href="/creator">
                        <img src="assets/bmw-street.jpg"/>
                        <p className="link">CREATOR</p>
                        </a>
                </div>
                <div className="grid-card bg-white">
                    <a href="/downloads">
                        <img src="assets/keyboard.png"/>
                        <p className="link">DOWNLOADS</p>
                    </a>
                </div>
            </div>
    </div>
    )
}