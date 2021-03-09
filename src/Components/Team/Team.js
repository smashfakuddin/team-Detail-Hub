import React from 'react';
import './Team.css'
import {  Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';


const Team = (props) => {
    const { strTeamBadge, strTeam, strSport,idTeam } = props.team;
    const history =useHistory();
    const showTeamDetail = idTeam =>{
        const url =`team/${idTeam}`;
        history.push(url);
    }

    return (
        <div className="col-sm mb-5 gx-5 teamCart ">
            <img width='250px'  src={strTeamBadge} alt="" />        
                <h4>{strTeam}</h4>
                <h6>Sport Type: {strSport}</h6>
                <Button onClick={()=>showTeamDetail(idTeam)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
            
        </div>
    );
};

export default Team;