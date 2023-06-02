import React, { useState, useEffect } from 'react'
import Keycloak from 'keycloak-js'
const useAuth = () => {
    const [isLogin, setLogin] = useState(false)
    const [keycloakObj, setKeycloakObj] = useState()

    useEffect(() => {
        const client = new Keycloak({
            url: 'https://keycloak-app123.azurewebsites.net/auth',
            realm: "Demo",
            clientId: "myclient"
        })
        client.init({ onLoad: "login-required" }).then((res) => {
            setLogin(res)
            setKeycloakObj(client)
            console.log(client.loadUserInfo())
        })
    }, [])

    return <>
        {isLogin ?
            <>
                <div>Protected</div>
                <button onClick={() => keycloakObj.logout()}>
                    Sign Out
                </button>

            </>

            :
            <div>Public</div>}
    </>
}



export default useAuth