const styles = {}

import Image from 'next/image';
import Logo from '../static/logo.png'

const Header = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1>Getting started...</h1>
            </div>
        </div>
    )
}

export default Header