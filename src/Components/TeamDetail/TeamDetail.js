import React, { useEffect, useState } from 'react';
import './TeamDetail.css'
import { useParams } from 'react-router';
import founded from '../../Icon/found 1.png';
import countryIcon from '../../Icon/flag (1) 1.png';
import sportType from '../../Icon/football (1) 1.png';
import genderIcon from '../../Icon/male-gender-sign 1.png';
import Photo from '../../Photo/male.png';

const TeamDetail = () => {
    const { idTeam } = useParams();
    const [teamDetail, setTeamDetail] = useState({})
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data));
    }, []);
    if (!teamDetail.teams) { return null }
  
    return (
        <div className='team-detail'>
            <div className='detail-cart'>
                <div>
                    <h1>{teamDetail.teams[0].strTeam}</h1>
                    <p><img width='15' src={founded} alt=""/> Founded: {teamDetail.teams[0].intFormedYear}</p>
                    <p><img width='15' src={countryIcon} alt=""/> Country: {teamDetail.teams[0].strCountry}</p>
                    <p><img width='15' src={sportType} alt=""/> Sport Type: {teamDetail.teams[0].strSport}</p>
                    <p><img width='15' src={genderIcon} alt=""/> Gender: {teamDetail.teams[0].strGender}</p>
                </div>
                <div>
                    <img width='500px' src={Photo} alt="" />
                </div>
            </div>
            <div>
                <p>{teamDetail.teams[0].strDescriptionEN}</p>
            </div>

        </div>
    );

};

export default TeamDetail;