import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "ATSuite" },
        { name: "description", content: "Smart feedback for your dream job" },
    ];
}

export default function Home() {
    const { auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.isAuthenticated) {
            navigate('/auth?next=/');
        }
    }, [auth.isAuthenticated]);

    return (
        <main className="w-full min-h-screen bg-[url('/images/bg-main-noise.svg')] grain">
            <div className="w-full fixed top-8 left-0 flex items-center justify-center z-[1000]">
                <Navbar />
            </div>

            <section className="main-section relative z-10 mt-10">
                <div className="page-heading py-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0.8, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, ease: "easeIn" }}
                        className="text-white text-6xl max-sm:text-[3rem] font-semibold leading-tight xl:tracking-[-2px]"
                    >
                        Smarter Resumes Start Here
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0.8, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeIn" }}
                        className="text-gray-300 text-3xl max-sm:text-xl"
                    >
                        Tailor your resume to every job post with AI-powered feedback.
                    </motion.h2>
                </div>

                {resumes.length > 0 && (
                    <div className="resumes-section">
                        {resumes.map((resume) => (
                            <ResumeCard key={resume.id} resume={resume} />
                        ))}
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}