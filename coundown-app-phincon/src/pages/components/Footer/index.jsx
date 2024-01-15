import FacebookLogo from '../../../assets/Icon-facebook.svg';
import PinterestLogo from '../../../assets/Icon-pinterest.svg';
import InstagramLogo from '../../../assets/Icon-instagram.svg';

import classes from './style.module.scss'

const Footer = () => {
    return (
        <>
        <div className={classes.footer}>
            <div className={classes["social-media-bar"]}>
                <a href="">
                    <img className={classes["social-media-icon"]} src={FacebookLogo} alt="" />
                </a>
                <a href="" className={classes["center-social-media-item"]}>
                    <img className={classes["social-media-icon"]} src={PinterestLogo} alt="" />
                </a>
                <a href="">
                    <img className={classes["social-media-icon"]} src={InstagramLogo} alt="" />
                </a>
            </div>
        </div>
        </>
    )
}

export default Footer