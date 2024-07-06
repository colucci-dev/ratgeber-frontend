import Image from "next/image";

export default function Header(props: any) {
    const baseURL = process.env.NEXT_API;
    return (
    <div className="header">
        <div className="wrapper">
            <div className="group-left">
                <a href="/">
                <img src={`${baseURL}/assets/Logo_BMW_GROUP.svg`} alt="Logo BMW Group"/>
                </a>
                <div className="logos">
                <img src={`${baseURL}/assets/Logo_BMW.svg`} alt="Logo BMW"/>
                <img src={`${baseURL}/assets/Logo_MINI.svg`} alt="Logo MINI" />
                <img src={`${baseURL}/assets/Logo_Rolls-Royce.svg`} alt="Logo Rolls-Royce" />
                </div>
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