import React, {useState, useEffect} from "react";

import queryString from "query-string"
import { CopyBlock, dracula } from "react-code-blocks";

function TestComponent( {location}) {
    const {code} = queryString.parse(location.search)

    const [pocData,setPocData] = useState("blank")

    useEffect( () => {
        fetch(`http://localhost:3001/poc?code=${code}`, {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "applicaiton/json"
            }
        })
        .then(res => res.json())
        .then(res => {console.log(res);setPocData(JSON.stringify(res))})
    }, [code])

    return (

        <div className="test-component">
            <CopyBlock
                text={pocData}
                language={"json"}
                showLineNumbers
                theme={dracula}
                codeBlock
            />
        </div>
    );
}

export default TestComponent;
