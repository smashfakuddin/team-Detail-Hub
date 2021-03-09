import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TeamDetail = () => {
    const { idTeam } = useParams();
    const [teamDetail, setTeamDetail] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setTeamDetail(data));
    }, []);
    if(!teamDetail){return null}
    const { strTeam, strCountry, strGender, strSport } = teamDetail.teams[0];
    return (
        <div>
            <h1>Team Detail of:{idTeam}</h1>
            {/* <h1>Name:{strTeam}</h1>
            <h2>{strCountry}</h2>
            <h5>{strGender}</h5>
            <h6>{strSport}</h6> */}
        </div>
    );
};

export default TeamDetail;