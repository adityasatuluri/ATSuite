import type {Route} from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "ATSuite"},
        {name: "description", content: "Smart feedback for your dream job"},
    ];
}

export default function Home() {

    const {auth} = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.isAuthenticated) {
            navigate('/auth?next=/');
        }
    }, [auth.isAuthenticated]);

    return <main className="bg-[url('/images/bg-main-dark.svg')] bg-cover">

        <div className="w-full fixed flex items-center justify-center">
            <Navbar/>
        </div>

        <section className="main-section">
            <div className="page-heading py-16 ">
                <h1>Smarter Resumes Start Here</h1>
                <h2>Tailor your resume to every job post with AI-powered feedback.</h2>
            </div>


            {resumes.length > 0 && (
                <div className="resumes-section">
                    {resumes.map((resume) => (
                        <ResumeCard key={resume.id} resume={resume}/>
                    ))}
                </div>
            )}
        </section>
    </main>;
}
