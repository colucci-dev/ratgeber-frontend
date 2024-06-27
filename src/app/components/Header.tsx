
export default function Header(props: any) {
    return (
    <div className="header">
        <div className="wrapper">
            <div className="group-left">
                <a href="/">
                <img src="assets/Logo_BMW_GROUP.svg"/>
                </a>
                <img src="assets/Logo_BMW.svg"/>
                <img src="assets/Logo_MINI.svg"/>
                <img src="assets/Logo_Rolls-Royce.svg" />
            </div>
            <div className="group-right">
                <a href="/creator"><span>Creator</span></a>
                <a href="/blog"><span>Blog</span></a>
                <a href="/downloads"><span>Downloads</span></a>
            </div>
        </div>
    </div>
    )
}