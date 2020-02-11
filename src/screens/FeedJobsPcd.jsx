import React, { useState, useEffect } from 'react';
//request
import ListAllJobs from '../requests/Pcd/ListAllJobs';
//components
import ListJobsPcd from '../lib/components/ListJobsPcd';
//style
import { JobsCompiled, MainContent} from '../lib/assets/style-components/FeedJobs';


const FeedJobsPcd = (props) => {
    const [idJob, setidVaga] = useState('');
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        handleJobs();
    }, []);

    async function handleJobs() {
        const response = await ListAllJobs(idJob);
        console.log(response);
        const newResponse = response.filter(function (el){
            return el.ativo == true;
        });

        setJobs([...newResponse]);
    };

    console.log(jobs);
    return(
        <MainContent>
            <JobsCompiled>
            {jobs.map(function(jobs, id){
                    return(
                        <ListJobsPcd props={jobs} key={id}/>
                    )
                })}
            </JobsCompiled>
        </MainContent>
    );
};

export default FeedJobsPcd; 