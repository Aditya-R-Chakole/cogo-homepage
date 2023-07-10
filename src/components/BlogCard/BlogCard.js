import './BlogCard.css'

function BlogCard({blogImg, blogSource, blogTitle, blogInfo, blogDate}) {
    return (
        <div className='blogCard'>
            <img src={blogImg} alt='Blog Image' />
            <div className='blogCardInfo'>
                <p>{blogSource}</p>
                <h4>{blogTitle}</h4>
                <span>{blogInfo}</span >
                <div>
                    <p>Read More →</p>
                    <span>{blogDate}</span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;