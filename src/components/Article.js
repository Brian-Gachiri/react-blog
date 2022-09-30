import {Link} from "react-router-dom";

function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
}
const Article = ({article}) => {
    const image = 'https://picsum.photos/200/300?random='+article.id.toString();

    return (
        <div className="col-lg-4 my-2">
            <div className={'card border-0 shadow-sm'}>
                <Link className="card-img-top image-link" to="/">
                    <img className="post-img img-fluid" src={image} alt={article.title}/>
                </Link>
                <div className={'card-body'}>
                    <h3 className="heading">
                        {truncate(article.title,40)}
                    </h3>

                    <p className="text">
                        {truncate(article.body,100)}
                    </p>

                    <Link className="button" to="/">
                        Read More
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Article