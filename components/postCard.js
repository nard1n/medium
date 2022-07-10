import Image from 'next/image';
import Logo from '../static/logo.png';

const styles = {
    authorContainer: '',
    authorName: '',
    authorImageContainer: ``,
    authorImage: ``,
    postDetails: ``,
}
const PostCard = () => {
    return (
        <div className={styles.author}>
            <div className={styles.authorImageContainer}>
            <Image
                src={Logo}
                alt="author image"
                className={styles.authorImage} 
                height={40}
                width={40}          
            />
            </div>
            <div className={styles.authorName}>Nardin L</div>
            <div className={styles.postDetails}>ARTICLE TITLE</div>
        </div>
    )
}

export default PostCard