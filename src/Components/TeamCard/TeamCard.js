import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './TeamCard.css'


const TeamCard = () => {
    const [teams, setTeams] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(response => response.json())
            .then(data => setTeams(data));
    }, []);
    if (!teams.teams) { return null }
    return (
        <div className='teamCard'>
            <div className="row">
                {

                    teams.teams.map(tm => <Team team={tm}></Team>)
                }
            </div>
        </div>
    );
};

export default TeamCard;