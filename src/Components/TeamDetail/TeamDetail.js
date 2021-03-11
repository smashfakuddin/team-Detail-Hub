import React, { useEffect, useState } from 'react';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useParams } from 'react-router';
import founded from '../../Icon/found 1.png';
import countryIcon from '../../Icon/flag (1) 1.png';
import sportType from '../../Icon/football (1) 1.png';
import genderIcon from '../../Icon/male-gender-sign 1.png';
import Photo from '../../Photo/male.png';
import DetailHeader from '../DetailHeader/DetailHeader';


const TeamDetail = () => {
    const { idTeam } = useParams();
    const [teamDetail, setTeamDetail] = useState({})
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data));
    }, [idTeam]);
    if (!teamDetail.teams) { return null };
    console.log(teamDetail);
    const { strTeam, intFormedYear, strCountry, strSport, strGender, strFacebook, strYoutube, strTwitter } = teamDetail.teams[0]

    return (
        <div>
            <DetailHeader badge={teamDetail}></DetailHeader>
            <div className='team-detail'>
                <div className='detail-cart'>
                    <div>
                        <h1>{strTeam}</h1>
                        <h6><img width='15' src={founded} alt="" /> Founded: {intFormedYear}</h6>
                        <h6><img width='15' src={countryIcon} alt="" /> Country: {strCountry}</h6>
                        <h6><img width='15' src={sportType} alt="" /> Sport Type: {strSport}</h6>
                        <h6><img width='15' src={genderIcon} alt="" /> Gender: {strGender}</h6>
                    </div>
                    <div className='image'>
                        <img width='400px' src={Photo} alt="" />
                    </div>
                </div>
                <div>
                    <p>{teamDetail.teams[0].strDescriptionEN}</p>
                </div>
                <div className='social-media'>
                    <li><a href={strTwitter}><FontAwesomeIcon icon={faTwitter} /></a> </li>
                    <li><a href={strFacebook}><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href={strYoutube} ><FontAwesomeIcon icon={faYoutube} /></a></li>
                </div>
            </div>
        </div>
    );

};

export default TeamDetail;