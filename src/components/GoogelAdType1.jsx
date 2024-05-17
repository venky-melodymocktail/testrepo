import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


const GoogelAdType1 = ({ adClient, adSlot, adFormat }) => {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }, []);
    return (
        <ins className="adsbygoogle"
            style={{display:"block"}}
            data-ad-client="ca-pub-2340250609612569"
            data-ad-slot="7757171056"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
    );
};



export default GoogelAdType1;
