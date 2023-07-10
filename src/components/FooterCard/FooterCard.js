import './FooterCard.css'

function FooterCard() {
    return (
        <div className='footerCard'>
            <div className='title'>Products</div>
            <p>Global Trade Platform</p>
            <div className='section'>
                <h4>Cross-border Logistic</h4>
                <span><a>Ocean: FCL</a></span>
                <span><a>Ocean: LCL</a></span>
                <span><a>International Air</a></span>
                <span><a>Customs, CFS, and Handling</a></span>
            </div>

            <div className='section'>
                <h4>Domestic Logistics</h4>
                <span><a>Surface: FTL, PTL, Rail</a></span>
                <span><a>Trailer & Rail Container Haulage</a></span>
            </div>

            <div className='section'>
                <h4>Trade Management Solutions</h4>
                <span><a>Freight Rates & Schedules</a></span>
                <span><a>Quick Premium Quotations</a></span>
                <span><a>Duties & Taxes Calculator</a></span>
                <span><a>Tracking & Visibility</a></span>
            </div>

            <div className='section'>
                <h4>CogoMaps</h4>
                <span><a>Shipment Planner</a></span>
                <span><a>Trade Info</a></span>
                <span><a>Global Routes</a></span>
                <span><a>Live Congestion</a></span>
            </div>
        </div>
    );
}

export default FooterCard;