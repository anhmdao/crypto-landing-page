import cn from 'classnames/bind';
import styles from './index.module.scss';
const cx = cn.bind(styles);

const Container = ({ children, style }) => {
    return <div className={cx('container')} style={style}>{children}</div>
}

export default Container;