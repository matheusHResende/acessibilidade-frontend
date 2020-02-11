import React, { useState, useEffect } from 'react';
//request
import ListAllMyJobs from '../requests/company/ListAllMyJobs';
//components
import ListJobsCompany from '../lib/components/ListJobsCompany';
//style
import {  MainContent, JobsCompiled} from '../lib/assets/style-components/FeedJobs';


const FeedJobsCompany = (props) => {
    const idCompany = props.props.id;
    const [myJobs, setMyJobs] = useState([]);

    useEffect(()=>{
        handleJobs();
    }, []);

    async function handleJobs() {
        const response =  await ListAllMyJobs(idCompany);
        
        const newResponse = response.filter(function (el){
            return el.ativo == true;
        });
        setMyJobs([...newResponse]);
    }

    return ( 
        <MainContent>
            <JobsCompiled>
            {myJobs.map(function(myJobs, id){
                    return(
                        <ListJobsCompany props={myJobs} key={id}/>
                    )
                })}
            </JobsCompiled>
        </MainContent>
    )
};

export default FeedJobsCompany;