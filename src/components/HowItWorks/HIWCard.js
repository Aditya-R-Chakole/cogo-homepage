import './HIWCard.css'

function HIWCard({data}) {
    return (
        <div className='hiw-card'>
            <h4>{data['source']}</h4>
            <div>
                <img src={data['icon']} alt='HIW Image' />
                <span>{data['title']}</span>
            </div>
            <p><div>•</div> <div>{data['info'][0]}</div></p>
            <p><div>•</div> <div>{data['info'][1]}</div></p>
            {(
                (data['info'].length === 3)
                ?(<p><div>•</div> <div>{data['info'][2]}</div></p>)
                :(<p></p>))}
        </div>
    );
}

export default HIWCard;