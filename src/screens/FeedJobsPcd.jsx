import React, { useState, useEffect } from 'react';
//request
import ListAllJobs from '../requests/Pcd/ListAllJobs';
//components
import ListJobs from '../lib/components/ListJobs';
//style
import { JobsContent, JobsCompiled} from '../lib/assets/style-components/FeedJobs';


const ListJobsPcd = (props) => {
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
        <JobsContent>
            <JobsCompiled>
            {jobs.map(function(jobs, id){
                    return(
                        <ListJobs props={jobs} key={id} type="pcd"/>
                    )
                })}
            </JobsCompiled>
        </JobsContent>
    );
};

export default ListJobsPcd; 