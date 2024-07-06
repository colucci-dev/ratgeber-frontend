import PageContainer from "@/app/components/PageContainer";
import { fetchAPI } from "@/app/utils/api";

type CampaignResponse = {
    data: [{attributes: {firstname: string, lastname: string, mail: string}}]
}

export default async function Backend() {
    const campaignUsers : CampaignResponse = await fetchAPI("campaigns");
    const rows : JSX.Element[] = [];
    campaignUsers.data.forEach((user, index) => {
        rows.push(<tr key={index}>
            <td>{user.attributes.firstname}</td>
            <td>{user.attributes.lastname}</td>
            <td>{user.attributes.mail}</td>
        </tr>);
    });

    return (<PageContainer image={"../assets/auto_party.jpg"}>
        <div className="blog-wrapper">
                <div className="blogArticle">
                <div className="title">Kampagnenmanagement Backend</div>
                <table className="backend-table">
                    <thead>
                    <tr>
                    <th>Vorname</th>
                    <th>Nachname</th>
                    <th>Mail</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
                </div>
            </div>
    </PageContainer>)
}