import React, {useEffect, useState} from 'react';
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";

export function meta() {
    return [
        {title: "ATSuite | Auth"},
        {name: "description", content: "Log into your account"},
    ];
}

const Auth = () => {

    const {isLoading, auth} = usePuterStore();

    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated){
            navigate(next);
        }
    },[auth.isAuthenticated, next]);

    return (
        <main className="bg-[url('/images/bg-main-noise.svg')] bg-cover min-h-screen flex items-center justify-center relative grain">
            <div className=" shadow-lg relative z-10">
                <section className="flex flex-col gap-8 bg-black/50 rounded-2xl p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1>Welcome</h1>
                        <h2>Let’s get you closer to your next opportunity</h2>
                    </div>
                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse">Signing you in...</button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button" onClick={auth.signOut}>
                                        <p>Log Out</p>
                                    </button>
                                ) : (
                                    <button className="auth-button" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Auth;
