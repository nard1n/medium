import Image from 'next/image'
import { AiFillPlayCircle } from 'react-icons/ai';
import UserImage from '../static/user.png';

const styles ={
    wrapper: `flex items-center justify-center flex-[3] border-l border-r`,
    content: `h-screen overflow-scroll p-[2rem]`,
    postHeaderContainer: ``,
    authorContainer: ``,
    authorProfileImageContainer: ``,
    image: ``,    
}

const ArticleMain = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
            <div className={styles.postHeaderContainer}>
                <div className={styles.authorContainer}>
                    <div className={styles.authorProfileImageContainer}>
                        <Image className={styles.image} src={UserImage} width={100} height={100} alt ="user image"/>
                    </div>
                    <div className={styles.column}>
                        <div>Nard1n Codes</div>
                        <div className={styles.postDetails}>
                            <span>July 20 • 7 min read • <span className={styles.listenButton}>
                                <AiFillPlayCircle /> Listen
                            </span></span>
                        </div>

                    </div>
            </div>

            </div>

            </div>
        </div>
    )
}

export default ArticleMain