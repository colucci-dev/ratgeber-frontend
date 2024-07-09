"use client"
export default function MenuIcon() {
    return (<div className="hamburger" onClick={toggleShow}><span>&#9776;</span></div>)

    function toggleShow() {
        document.querySelector('.nav-menu')?.classList.toggle('active');
    }
}