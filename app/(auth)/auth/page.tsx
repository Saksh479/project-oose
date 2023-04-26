import React from "react";
import { SignIn } from "@clerk/nextjs/app-beta";

const Auth = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <SignIn redirectUrl={"/"} />
        </div>
    );
};

export default Auth;
