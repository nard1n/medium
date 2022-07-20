import ReadersNav from '../../components/ReadersNav';
import Recommendations from '../../components/Recommendations';

const styles = {
    content: `flex`,
}

const Post = () => {
    return (
        <div className={styles.content}>
            <ReadersNav />
            <div>Article Main Space</div>
            <Recommendations />
        </div>
    )
}

export default Post