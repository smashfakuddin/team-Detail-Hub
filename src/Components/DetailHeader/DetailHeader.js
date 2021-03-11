import React from 'react';
import './DetailHeader.css';

const DetailHeader = (props) => {
    const { strTeamBadge, strStadiumThumb } = props.badge.teams[0];

    return (
        <div style={{
            backgroundImage: `url('${strStadiumThumb}')`
        }} className='detail-header'>
            <img width='200' src={strTeamBadge} alt="" />
        </div>
    );
};

export default DetailHeader;