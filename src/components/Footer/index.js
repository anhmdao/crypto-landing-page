import cn from 'classnames/bind';
import Container from '../Container';
import styles from './index.module.scss';
const cx = cn.bind(styles);

const Footer = () => {
    return (
        <div className={cx('footer')}>
            <Container style={{padding: '0px  224px '}}>
                <div className={cx('top')}>
                    <div className={cx('left')}>
                        <div className={cx('logo')}>
                            <img alt='logo' src='logo.png' />
                        </div>
                        <div className={cx('text')}>
                            <p>
                                A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.
                            </p>
                        </div>
                        <div className={cx('icon')}>
                            <div className={cx('icon-fb')}>
                                <a href='#'>
                                    <i class="fab fa-facebook-f"></i>
                                </a>

                            </div>
                            <div className={cx('icon-tw')}>
                                <a href='#'>
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                            <div className={cx('icon-insta')}>
                                <a href='#'>
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={cx('right')}>
                        <div className={cx('about-us')}>
                            <div className={cx('text-1')}>
                                <p>About Us</p>
                            </div>
                            <div className={cx('text-2')}>
                                <p>Whitepaper</p>
                                <p> Blog</p>
                                <p> Activity </p>
                            </div>

                        </div>
                        <div className={cx('support')}>
                            <div className={cx('text-1')}>
                                <p>Support</p>
                            </div>
                            <div className={cx('text-2')}>
                                <p>Help & Support</p>
                                <p>   Community</p>
                                <p>  Author Profile</p>
                                <p>Contact</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className={cx('bottom')}>
                    <p>All rights reserved@2021</p>
                </div>
            </Container>
        </div>
    )
}

export default Footer;