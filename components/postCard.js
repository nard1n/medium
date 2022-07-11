import Image from 'next/image';
import Logo from '../static/logo.png';
import { FiBookmark } from 'react-icons/fi';


const styles = {
    authorContainer: `flex gap-[.4rem]`,
    authorName: `font-semibold`,
    authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    authorImage: `object-cover `,
    briefing: `text-[#787878]`,
    title: `font-bold text-2xl`,
    detailsContainer: `flex items-center justify-between text-[#787878]`,
    articleDetails:`my-2 text-[.8rem]`,
    postDetails: ``,
    category:`bg-[#F2F3F2] rounded-full p-1`,
    bookmarkContainer:``,
}
const PostCard = () => {
    return (
        <div className={styles.postDetails}>
            <div className={styles.authorContainer}>
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
            </div>
            <h1 className={styles.title}>7 Free Tools to Increase Productivity in 2022</h1>
            <div className={styles.briefing}>Productivity is a skill that can be learned</div>
            <div className={styles.detailsContainer}>
                <span className={styles.articleDetails}>Jul 11 • 5 min read • <span className={styles.category}>productivity</span></span>
                <span  className={styles.bookmarkContainer}>
                    <FiBookmark className='h-5 w-5'/>
                </span>
            </div>
        </div>
    )
}

export default PostCard