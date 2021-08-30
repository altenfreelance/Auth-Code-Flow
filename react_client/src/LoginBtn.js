import { Button } from "react-bootstrap";
import React from "react";

const LoginBtn = () => {
    const login = async () => {
        const domain = process.env.REACT_APP_DOMAIN
        const audience = process.env.REACT_APP_AUDIENCE
        const scope = "read:poc"
        const clientID = process.env.REACT_APP_CLIENT_ID
        const responseType = "code" // Auth code flow setting
        const redirectUri = "http://localhost:3000/poc"

        const res = await fetch(
            `https://${domain}/authorize?` +
            `audience=${audience}` +
            `&scope=${scope}` +
            `&client_id=${clientID}` +
            `&response_type=${responseType}` +
            `&redirect_uri=${redirectUri}`,

            //To reroute to non server location /poc
            {redirect: "manual"} 

        );
        
        window.location.replace(res.url);
    };

    return (
        <Button onClick={() => login()}>
            Login
        </Button>

    )
};

export default LoginBtn