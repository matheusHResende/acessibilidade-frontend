import React, { useState, useEffect } from 'react';
//request
import ListAllJobs from '../requests/Pcd/ListAllJobs';
//components
import ListJobsPcd from '../lib/components/ListJobsPcd';
//style
import { Content, MainContent} from '../lib/assets/style-components/Main';


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
            <Content>
                <ul>
                <h1>Vagas:</h1>
                {jobs.map(function(jobs, id){
                        return(
                            <ListJobsPcd props={jobs} key={id}/>
                        )
                    })}
                </ul>
            </Content>
        </MainContent>
    );
};

export default FeedJobsPcd; 