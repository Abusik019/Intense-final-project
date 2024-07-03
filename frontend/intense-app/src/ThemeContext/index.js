import { createContext, useState } from "react";

export const IsLoginContext = createContext(null);

export const isLoginProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    const toggleIsLogin = () => {
        setIsLogin(isLogin === false ? true : false);
    };

    return (
        <IsLoginContext.Provider value={{ isLogin, toggleIsLogin }}>
            {children}
        </IsLoginContext.Provider>
    );
};
