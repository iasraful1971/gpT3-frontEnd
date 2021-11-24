import React from 'react';
import './Brand.css';
import { atlassian, dropbox, google, shopify, slack } from './Imports';
const Brand = () => {
    return (
       <div className="gpt3__brand section__padding">
            <div>
                <img src={google} alt="" />
            </div>
            <div>
                <img src={shopify} alt="" />
            </div>
            <div>
                <img src={slack} alt="" />
            </div>
            <div>
                <img src={dropbox} alt="" />
            </div>
            <div>
                <img src={atlassian} alt="" />
            </div>
       </div>
    );
};

export default Brand;