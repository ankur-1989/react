import './BlogCard.css';

export default function BlogCard({title, description, imageUrl, author}) {

    return (
        <div className="blog-card">
            <div className="blog-card__thumbnail">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="blog-card__content">
             <p className='blog-card__author'>{author}</p>
                <h2 className="blog-card__title">{title}</h2>
                <p className="blog-card__description">{description}</p>
            </div>
        </div>
    )
}