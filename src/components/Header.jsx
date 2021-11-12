import {FaTwitter, FaGithub} from 'react-icons/fa';

import CoverImage from "../images/background_image.jpg";
import ProfileImage from "../images/face_image.png";

export const Header= () => {
    const componentName = () => 'Header';

    return (
        <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="display-table">
                    <div className="display-table-contents">
                        <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
                        <h1 className="title-text">まさなり</h1>
                        <h3 className="title-text">Engineer</h3>
                        <ul className="social-icons">
                            <li className="icon-link">
                                <a href="https://twitter.com/log_masa">
                                    <FaTwitter color="white" size="2rem" />
                                </a>
                            </li>
                            <li className="icon-link">
                                <a href="https://github.com/masanari9256">
                                    <FaGithub color="white" size="2rem" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
