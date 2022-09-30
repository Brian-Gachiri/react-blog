import BannerImage from "../images/art.svg";
import {Link} from "react-router-dom";

const About = () => {

    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className={'col-lg-12 text-center'}>
                    <h1 className={'text-main'}>A <span className={'text-secondary'}>little</span> more
                        <span className={'text-secondary'}> information</span></h1>
                </div>
                <div className='col-lg-5'>
                    <img src={BannerImage} alt='Banner' className='img-fluid'/>
                </div>
                <div className='col-lg-5 d-flex flex-column justify-content-center'>
                    <h5 className={'text-spaced'}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </h5>
                    <Link className={'btn btn-secondary btn-lg w-50'} to='/articles'>Read Articles</Link>
                </div>
            </div>
        </div>
    )
}
export default About