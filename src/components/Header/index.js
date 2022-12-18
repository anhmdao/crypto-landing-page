import cn from 'classnames/bind';
import Container from '../Container';
import styles from './index.module.scss';
const cx = cn.bind(styles);

const Header = () => {
    return (
        <div className={cx('section-header')}>
            <Container>
                <div className={cx('header')}>
                    <div className={cx('logo')}>
                        <img alt='logo' src='/logo.png' />
                    </div>
                    <div className={cx('menu')}>
                        <ul>
                            <li>
                                <div className={cx('text-1')}>
                                    <a href='#'>About us</a>
                                </div>
                            </li>
                            <li>
                                <a href='#'>Features</a>
                            </li>
                            <li>
                                <a href='#'>How it works</a>
                            </li>
                            <li>
                                <a href='#'>Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('button')}>
                        <a href='#'>Download</a>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Header;