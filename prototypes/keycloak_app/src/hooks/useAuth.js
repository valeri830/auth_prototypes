import React, { useState, useEffect } from 'react'
import  Keycloak  from 'keycloak-js'
const useAuth = () => {
    const [isLogin, setLogin] = useState(false)

    useEffect(() => {
        const client = new Keycloak({
            url: 'http://localhost:3000/',
            realm: "demo",
            clientID: "myClient"
        })
    }, [])

    return isLogin
}

export default useAuth