import { useState } from 'react';

import HIWCard from './HIWCard';
import './HowItWorks.css'

import homepage1 from '../homepagem1.webp'
import homepage2 from '../homepagem2.png'
import arrow1 from '../linearrow1.png'
import arrow2 from '../linearrow2.png'
import arrow3 from '../linearrow3.png'
import arrow4 from '../linearrow4.png'
import stage1 from '../s1 dicover.png'
import stage2 from '../s2 plan & book.png'
import stage3 from '../s3 execute.png'
import stage4 from '../s4 finance.png'
import growProfits from '../profits.png'
import scaleGlobally from '../tracking and visibility.png'

let forCargoOwners = [
    {
        "source": "Stage 1:",
        "icon": stage1,
        "title": "Discover",
        "info" : [
            "Spot and Contract Rates for Logistics",
            "Service details, Trade Compliance/ Regulatory Requirements",
            "Knowledge and Insights on Trade, Logistics, Finance, Supply Chains"
        ]
    },
    {
        "source": "Stage 2:",
        "icon": stage2,
        "title": "Plan & Book",
        "info" : [
            "Route, Service Schedules, Inventory, and Cashflow planning",
            "Book with upfront visibility of service terms and inclusions"
        ]
    },
    {
        "source": "Stage 3:",
        "icon": stage3,
        "title": "Execute",
        "info" : [
            "Ocean and Air Cargo Tracking",
            "Documentation and Filings, Handled",
            "Multi-modal: Smooth coordination and handovers between various service providers and stakeholders"
        ]
    },
    {
        "source": "Stage 4:",
        "icon": stage4,
        "title": "Finance",
        "info" : [
            "Deferred payment on Logistics with PayLater",
            "Trade Finance for your Cargo with Export Factoring"
        ]
    }
]

let forLogisticsPartners = [
    {
        "source": "Channel Partner Program",
        "icon": stage1,
        "title": "Sell with Cogoport",
        "info" : [
            "Upfront rates and SLAs, close more deals with your customers for end to end shipments",
            "Knowledge and Insights on Trade, Logistics, Finance, Supply Chains"
        ]
    },
    {
        "source": "Logistics Partner",
        "icon": growProfits,
        "title": "Grow Profits",
        "info" : [
            "Invoicing and payment terms that help you sell more with the same working capital",
            "Book with upfront visibility of service terms and inclusions"
        ]
    },
    {
        "source": "Logistics Service Providers",
        "icon": stage3,
        "title": "Sell to Cogoport",
        "info" : [
            "Accurate forecast of demand so you can plan your operations and cashflows",
            "Steady flow of bookings from Cogoport, minimize P&L risks",
            "Get paid on time, minimize collections risks"
        ]
    },
    {
        "source": "Overseas Partners",
        "icon": scaleGlobally,
        "title": "Scale Globally",
        "info" : [
            "Become Cogoport’s local agent in your country, boost revenue from nominations and handling",
            "Make Cogoport your local agent outside your home country, do shipments to and from 149+ countries globally"
        ]
    }
]


function HowItWorks() {
    const [howItWorksButton, setHowItWorksButton] = useState(0);

    return (
        <div className='howItWorks'>
            <div className='container'>
                <h3>How it Works</h3>
                <span className='buttons'>
                    <button className={(howItWorksButton)?(''):('active')} onClick={() => (setHowItWorksButton(0))} >For Cargo Owners</button>
                    <button className={(howItWorksButton)?('active'):('')} onClick={() => (setHowItWorksButton(1))}>For Logistics Partners</button>
                </span>

                <div className='left'>
                    <HIWCard data={((howItWorksButton)?(forLogisticsPartners[0]):(forCargoOwners[0]))}/>
                    <HIWCard data={((howItWorksButton)?(forLogisticsPartners[1]):(forCargoOwners[1]))}/>
                </div>

                <img className='laptop' src={((howItWorksButton)?(homepage2):(homepage1))} alt='laptop'/>
                <img className='arrow1' src={arrow1} alt='arrow1'/>
                <img className='arrow3' src={arrow3} alt='arrow3'/>
                <img className='arrow2' src={arrow2} alt='arrow2'/>
                <img className='arrow4' src={arrow4} alt='arrow4'/>

                <div className='right'>
                    <HIWCard data={((howItWorksButton)?(forLogisticsPartners[2]):(forCargoOwners[2]))}/>
                    <HIWCard data={((howItWorksButton)?(forLogisticsPartners[3]):(forCargoOwners[3]))}/>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;