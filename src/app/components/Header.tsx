
export default function Header(props: any) {
    const baseURL = process.env.NEXT_API;
    return (
    <div className="header">
        <div className="wrapper">
            <div className="group-left">
                <a href="/">
                <img src={`${baseURL}/assets/Logo_BMW_GROUP.svg`}/>
                </a>
                <img src={`${baseURL}/assets/Logo_BMW.svg`}/>
                <img src={`${baseURL}/assets/Logo_MINI.svg`}/>
                <img src={`${baseURL}/assets/Logo_Rolls-Royce.svg`} />
            </div>
            <div className="group-right">
                <a href="/creator"><span>Creator</span></a>
                <a href="/blog"><span>Blog</span></a>
                <a href="/glossar"><span>Glossar</span></a>
            </div>
        </div>
    </div>
    )
}