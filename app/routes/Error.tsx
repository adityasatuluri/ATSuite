import React from 'react';
import {Link} from "react-router";

const Error = () => {
    return (
        <main className=" bg-[url('/images/bg-main-noise.svg')] bg-cover bg-fixed">
            <div className="min-w-screen min-h-screen fixed flex flex-col gap-6 items-center justify-center px-5">
                <p className="text-8xl font-bold text-gradient">404</p>
                <h2 className="text-center">The page your requesting for doesnot exist.</h2>
                <Link to={'/'} className="primary-button w-sm px-4 py-2 flex justify-center mt-8">Go to Home</Link>
            </div>
        </main>
    );
};

export default Error;
