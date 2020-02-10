import React, { useState, useEffect } from 'react';
//request
import ListAllMyJobs from '../requests/company/ListAllMyJobs';
//components
import ListJobs from '../lib/components/ListJobs';
//style
import { JobsContent, JobsCompiled} from '../lib/assets/style-components/FeedJobs';




const ListJobsCompany = (props) => {
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
        <JobsContent>
            <JobsCompiled>
            {myJobs.map(function(myJobs, id){
                    return(
                        <ListJobs props={myJobs} key={id} type="company"/>
                    )
                })}
            </JobsCompiled>
        </JobsContent>
    )
};

export default ListJobsCompany;