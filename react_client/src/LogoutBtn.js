import React from "react";
import { Button } from "react-bootstrap";


const LogoutBtn = () => {
    const logout = async () => {
        const domain = process.env.REACT_APP_DOMAIN
        const clientID = process.env.REACT_APP_CLIENT_ID
        const returnTo = "http://localhost:3000"

        const res = await fetch(
            `https://${domain}/logout?` +
            `client_id=${clientID}` +
            `&return_to=${returnTo}`,

            //To reroute to non server location /poc
            {redirect: "manual"} 

        );

        window.location.replace(res.url);
    };

    return (
            <Button variant="dark" onClick={() => logout()}>
                Logout
            </Button>
            

    )
};

export default LogoutBtn