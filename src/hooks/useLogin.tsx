import React, { useState, useEffect } from 'react';

export const useLogin = () => {
    const [loginInfo, setLoginInfo] = useState({
        id: "",
        password: ""
    });

    return {
        loginInfo,
        enableLoginBtn: loginInfo.id.length == 0 || loginInfo.password.length == 0,
        idChange: (event: any) => { setLoginInfo({ ...loginInfo, id: event.value }) },
        pwChange: (event: any) => { setLoginInfo({ ...loginInfo, password: event.value }) },
    }
}