import type {Route} from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router";
import {motion} from "framer-motion";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "ATSuite"},
        {name: "description", content: "Smart feedback for your dream job"},
    ];
}

export default function Home() {
    const {auth, kv} = usePuterStore();
    const navigate = useNavigate();
    const [resumes, setResumes] = useState<Resume[]>([]);
    const [loadingResumes, setLoadingResumes] = useState(false);

    useEffect(() => {
        if (!auth.isAuthenticated) {
            navigate('/auth?next=/');
        }
    }, [auth.isAuthenticated]);

    useEffect(() => {
        const loadResumes = async () => {
            setLoadingResumes(true);

            const resumes = (await kv.list('resume:*', true)) as KVItem[];

            const parsedResumes = resumes?.map((resume) => (
                JSON.parse(resume.value) as Resume
            ))

            console.log(parsedResumes);
            setResumes(parsedResumes || []);
            setLoadingResumes(false);

        }
        loadResumes();
    }, []);

    return (
        <main
            className="w-full min-h-screen flex flex-col justify-between bg-[url('/images/bg-main-noise.svg')] grain bg-cover bg-fixed bg-center bg-no-repeat">
            <div className="w-full fixed top-8 left-0 flex items-center justify-center z-[1000]">
                <Navbar/>
            </div>

            <section className="main-section relative z-10 mt-10">
                <div className="page-heading py-16 text-center">
                    <motion.h1
                        initial={{opacity: 0.8, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.2, ease: "easeIn"}}
                        className="text-white text-6xl max-sm:text-[3rem] font-semibold leading-tight xl:tracking-[-2px]"
                    >
                        Smarter Resumes Start Here
                    </motion.h1>

                    {!loadingResumes && resumes?.length === 0 ? (
                        <motion.h2
                            initial={{opacity: 0.8, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.3, ease: "easeIn"}}
                            className="text-gray-300 text-3xl max-sm:text-xl flex flex-col gap-3"
                        >
                            No resumes found. Upload your first resume to get feedback.
                            <span className={'text-lg text-gray-400'}>Note: You can only generate around 5 to 6 analysis with this app <a className={'underline'} href={'https://puter.com/settings'} target={'_blank'}>Check usage</a></span>
                        </motion.h2>
                    ) : (

                        <motion.h2
                            initial={{opacity: 0.8, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.3, ease: "easeIn"}}
                            className="text-gray-300 text-3xl max-sm:text-xl"
                        >
                            Tailor your resume to every job post with AI-powered feedback.
                        </motion.h2>
                    )}
                </div>

                {loadingResumes && (
                    <div className={'flex flex-col items-center justify-center'}>
                        <img src={"/images/resume-scan-2.gif"} className={'w-[200px]'}/>
                    </div>
                )}

                {!loadingResumes && resumes.length > 0 && (
                    <div className="resumes-section">
                        {resumes.map((resume) => (
                            <ResumeCard key={resume.id} resume={resume}/>
                        ))}
                    </div>
                )}

                {!loadingResumes && resumes?.length === 0 && (
                    <div className={'flex flex-col items-center justify-center mt-10 gap-4'}>
                        <Link to={"/upload"}
                              className={'primary-button w-fit text-xl font-semibold'}>
                            Upload Resume
                        </Link>
                    </div>
                )}
            </section>

            <Footer/>
        </main>
    )
        ;
}