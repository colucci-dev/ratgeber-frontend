import { BusinessCardData } from "@/app/classes/businesscard";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest)  {
    const details : BusinessCardData = await req.json() as BusinessCardData;
    const document = HTMLDocumentView({details});
    const hdr = new Headers();
    hdr.set('Content-Type', 'text/html; charset=utf-8');
    return new NextResponse(await getData(document), {headers: hdr});
}

export async function GET(req: NextRequest) {
    const details : BusinessCardData = {
        firstname: "Ueli",
        lastname: "Meier",
        company: "Garage XYZ AG",
        job: "Geschäftsführer",
        telephone: "+41 79 123 45 67",
        mail: "ueli.meier@garagexyz.ch",
        street: "Haupstrasse 1",
        plz: "8000",
        ort: "Zürich"
    };
    const hdr = new Headers();
    const document = HTMLDocumentView({details});
    hdr.set('Content-Type', 'text/html; charset=utf-8');
    return new NextResponse(await getData(document), {headers: hdr});
}

const getData = async (component: any) => {
    const ReactDOMServer = (await import('react-dom/server')).default;
    const staticMarkup = ReactDOMServer.renderToString(component);
    return staticMarkup;
  };

function HTMLDocumentView(props: {details: BusinessCardData}) {
return (
    <html>
        <head>
            <link rel="stylesheet" media="print" href={`${process.env.NEXT_API}/assets/print.css`}/>
        </head>
        <body>
            <div className="border">

        <h1>Ratgeber</h1>
        <div className="container"> 
            <div className="personalinfo">
                <p>
                <b>{props.details.firstname} {props.details.lastname}</b><br/>
                {props.details.job}<br/>
                <p>
            Tel. {props.details.telephone}<br/>
            E-Mail {props.details.mail}
        </p>
                </p>
                
            </div>
            <p>
                <b>{props.details.company}</b><br/>
                {props.details.street}<br/>
                {props.details.plz} {props.details.ort}<br/>
                </p>
        </div>
        </div>
        </body>
    </html>
    )
}