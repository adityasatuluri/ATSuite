import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";
import Navbar from "~/components/Navbar";
import {usePuterStore} from "~/lib/puter";

const ResumeCard = ({resume: {id, companyName, jobTitle, feedback, imagePath}}: { resume: Resume }) => {

    const {fs} = usePuterStore();
    const [resumeUrl, setResumeUrl] = useState('');

    useEffect(() => {
        const loadResume = async () => {
            const blob = await fs.read(imagePath);
            if (!blob) return;
            let url = URL.createObjectURL(blob);
            setResumeUrl(url);
        }
        loadResume();
    }, [imagePath]);

    return (
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000 h-full py-6">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    {companyName && <h2 className="!text-white font-bold break-words">
                        {companyName}
                    </h2>}
                    {jobTitle && <h3 className="text-lg break-words text-gray-400">
                        {jobTitle}
                    </h3>}
                    {!companyName && !jobTitle && <h2 className={'!text-white font-bold break-words'}>Resume</h2>}
                </div>
                <div className="flex-shrink-0 z-0">
                    <ScoreCircle score={feedback.overallScore}/>
                </div>
            </div>
            {resumeUrl && (<div className="gradient-border animate-in fade-in duration-1000">
                <div className="w-full h-full">
                    <img
                        src={resumeUrl}
                        alt="resume"
                        className="w-full h-[300px] max-sm:h-[200px] object-cover object-top hover:object-bottom transition-all duration-500 ease-in"
                    />
                </div>
            </div>)
            }
        </Link>
    );
};

export default ResumeCard;
