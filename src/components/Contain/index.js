import cn from 'classnames/bind';
import Container from '../Container';
import styles from './index.module.scss';
const cx = cn.bind(styles);

const CONTAIN_2 = [
    {
        img: 'coinbase.png',
    },
    {
        img: 'blockchain.png',
    },
    {
        img: 'binance1.png',
    },
    {
        img: 'bitmex1.png',
    },

]
const CONTAIN_4 = [
    {
        title: 'Digital Saving',
        img: 'DigitalSaving.png',
        desc: 'A Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        title: 'Online-Investment',
        img: 'OnlineInvestment.png',
        desc: 'A Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        title: 'Secure-and-Fast-1',
        img: 'SecureAndFast1.png',
        desc: 'A Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        title: 'Purchase-via-Cards',
        img: 'PurchaseViaCards.png',
        desc: 'A Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        title: 'Instant-and-fee-free-transaction',
        img: 'InstantAndFee-freeTransaction.png',
        desc: 'A Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        title: 'Secure-and-Fastn',
        img: 'SecureAndFast.png',
        desc: 'A Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
]

const Contain = () => {
    return (
        <div className={cx('contain')}>
            <div className={cx('contain-1')} style={{ backgroundImage: 'url("/NewProject.png")' }}>
                <Container>
                    <div className={cx('text')}>
                        <div className={cx('combo-text')}>
                            <p className={cx('text-1')}>
                                Save Time and Start Digital Wallet!
                            </p>
                            <p className={(cx('text-2'))}>
                                A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </p>
                        </div>
                        <div className={cx('combo-button')}>
                            <div className={cx('button')}>
                                <a href='#' >Get Started</a>
                            </div>
                            <div className={cx('combo-button-1')}>
                                <div className={cx('button-play')}>
                                    <img alt='button-play' src='/Union.png' />
                                </div>
                                <div className={cx('text')}>
                                    <p>Watch Video</p>
                                </div>
                            </div>

                        </div>
                        <div className={cx('combo-number')}>
                            <div className={cx('combo-number-1')}>
                                <div className={cx('number-1')}>
                                    <p>1.9k+</p>
                                </div>
                                <div className={cx('text-1')}>
                                    <p>Active Users</p>
                                </div>
                            </div>
                            <div className={cx('combo-number-2')}>
                                <div className={cx('number-2')}>
                                    <p>20+</p>
                                </div>
                                <div className={cx('text-2')}>
                                    <p>New Features</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className={cx('img')}>
                    <img alt='img' src='NewProject.png' />
                </div>
            </div>

            <div className={cx('contain-2')}>
                <Container>
                    <div className={cx('text')}>
                        <div className={cx('line')}>
                            <div className={cx('line-1')}>
                                <img alt='line' src='/Line10.png' />
                            </div>
                            <div className={cx('text')}>
                                <p>Recommended By</p>
                            </div>
                            <div className={cx('line-2')}>
                                <img alt='line' src='/Line10.png' />
                            </div>
                        </div>
                    </div>

                    <div className={cx('combo-img')}>
                        {
                            CONTAIN_2.map((item, index) => {
                                return (
                                    <div key={index} className={cx('box-img')}>
                                        <div className={cx('img')}>
                                            <img alt='img' src={item.img} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* <div className={cx('img-coinbase')}>
                        <img alt='coinbase' src='/coinbase.png' />
                    </div>
                    <div className={cx('img-blockchain')}>
                        <img alt='blockchain' src='/blockchain.png' />
                    </div>
                    <div className={cx('img-binance')}>
                        <img alt='binance' src='/binance1.png' />
                    </div>
                    <div className={cx('img-bitmex')}>
                        <img alt='bitmex' src='/bitmex1.png' />
                    </div> */}
                    </div>
                </Container>

            </div>

            <div className={cx('contain-3')}>

                <div className={cx('text-1')}>
                    <p>Why Choose Us</p>
                </div>
                <div className={cx('text-2')}>
                    <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>

            </div>

            <div className={cx('contain-4')}>
                {/* <Container style={{padding: '0px', margin: '0px'}}>  */}
                {
                    CONTAIN_4.map((item, index) => {
                        return (
                            <div key={index} className={cx('box')}>
                                <div className={cx('item')}>
                                    <div className={cx('img')}>
                                        <img alt='Digital-Saving' src={item.img} />
                                    </div>
                                    <div className={cx('text-1')}>
                                        <h2> {item.title}</h2>
                                    </div>
                                    <div className={cx('text-2')}>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                {/* </Container> */}
            </div>

            <div className={cx('contain-5')} style={{ backgroundImage: 'url(NewProject1.png)' }}>
                <div className={cx('img')}>
                    <img alt='img' src='NewProject1.png' />
                </div>
                <Container>
                    <div className={cx('text')}>
                        <div className={cx('text-1')}>
                            <h2>Choose and Convert your Wallet Anytime!</h2>
                        </div>
                        <div className={cx('text-2')}>
                            <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown.
                                A Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className={cx('button')}>
                            <a href='#'>Choose your wallet</a>
                        </div>
                    </div>
                </Container>

            </div>

            <div className={cx('contain-6')} style={{ backgroundImage: 'url(NewProject2.png)' }}>
                <Container>
                    <div className={cx('text')}>
                        <div className={cx('text-1')}>
                            <h1>Available and Download Anytime!</h1>
                        </div>
                        <div className={cx('text-2')}>
                            <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.</p>
                        </div>
                        <div className={cx('logo')}>
                            <div className={cx('logo1')}>
                                <img alt='logo1' src='GgPlay.png' />
                            </div>
                            <div className={cx('logo2')}>
                                <img alt='logo2' src='AppStore.png' />
                            </div>
                        </div>
                    </div>
                </Container>

                <div className={cx('img')}>
                    <img alt='img' src='NewProject2.png' />
                </div>
            </div>

            <div className={cx('contain-7')}>
                <Container style={{ background: '#236E57' }}>
                    <div className={cx('text-1')}>
                        <h1>Ready to get updated?</h1>
                    </div>
                    <div className={cx('text-2')}>
                        <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.</p>
                    </div>
                    <div className={cx('find-out')}>
                        <div className={cx('textbox')}>
                            <input type="text" name="name" placeholder="Email Address.." />
                        </div>
                        <div className={cx('submit')}>
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </Container>

            </div>
        </div >
    )
}

export default Contain;
