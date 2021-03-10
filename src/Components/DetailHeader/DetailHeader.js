import React from 'react';
import './DetailHeader.css';

const DetailHeader = (props) => {
    const {strTeamBadge} =props.badge.teams[0];
    return (
        <div className='detail-header'>
            <img width='200' src={strTeamBadge} alt=""/>
        </div>
    );
};

export default DetailHeader;