import './InfoCard.css'

function InfoCard({quantity, remark}) {
    return (
        <div className='infoCard'>
            <h2>{quantity}</h2>
            <h4>{remark}</h4>
        </div>
    );
}

export default InfoCard;