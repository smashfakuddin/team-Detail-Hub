import React, { useEffect, useState } from 'react';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'
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
    if (!teamDetail.teams) { return null }

    return (
        <div>
            <DetailHeader badge={teamDetail}></DetailHeader>
            <div className='team-detail'>
                <div className='detail-cart'>
                    <div>
                        <h1>{teamDetail.teams[0].strTeam}</h1>
                        {/* <img src={teamDetail.teams[0].strTeamBadge} alt=""/> */}
                        <h6><img width='15' src={founded} alt="" /> Founded: {teamDetail.teams[0].intFormedYear}</h6>
                        <h6><img width='15' src={countryIcon} alt="" /> Country: {teamDetail.teams[0].strCountry}</h6>
                        <h6><img width='15' src={sportType} alt="" /> Sport Type: {teamDetail.teams[0].strSport}</h6>
                        <h6><img width='15' src={genderIcon} alt="" /> Gender: {teamDetail.teams[0].strGender}</h6>
                    </div>
                    <div className='image'>
                        <img width='400px' src={Photo} alt="" />
                    </div>
                </div>
                <div>
                    <p>{teamDetail.teams[0].strDescriptionEN}</p>
                </div>
                <div className='social-media'>
                   <li><FontAwesomeIcon icon={faTwitter} /></li> 
                   <li><FontAwesomeIcon icon={faFacebook} /></li>
                   <li><FontAwesomeIcon icon={faYoutube} /></li>
                    
                </div>
            </div>
        </div>
    );

};

export default TeamDetail;