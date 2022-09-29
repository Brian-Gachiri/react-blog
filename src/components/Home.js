import BannerImage from "../images/art.svg";
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-5 d-flex flex-column justify-content-center'>
                    <h1 className={'text-main banner-heading'}><span className={'text-secondary'}>Sticks</span> and Stones can build a home, but
                         <span className={'text-secondary'}> words</span>  will build a nation.</h1>
                    <Link className={'btn btn-secondary btn-lg w-50'} to='/'>Read Articles</Link>
                </div>
                <div className='col-lg-5'>
                    <img src={BannerImage} alt='Banner' className='img-fluid'/>
                </div>
            </div>
        </div>
    )
}
export default Home