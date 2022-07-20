import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import ReplitLogo from '../static/replit.png'
import TutorilaImg from '../static/tutorial.jpeg'
import SampleLogo from '../static/sampleLogo.png'
import UserImage from '../static/user.png'
import JSLogo from '../static/jslogo.png'

const styles = {
    wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
    accentedButton: `flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full`,
    searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border rounded-full px-[1rem]`,
    serachInput: `border-none outline-none bg-none w-full`,
    authorContaier: `my-[2rem]`,
    authorProfileImageContaier: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
    authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
    authorFollowing:`text-[#787878]`,
    authorActions: `flex gap-[.6rem] my-[1rem]`,
    actionButton: `bg-[#1A8917] rounded-full text-white px-[.6rem] py-[.4rem] text-sm`,
    recommendationContainer: ``,
    articlesContainer: ``,
    recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden w-[1.4rem] h-[1.4rem]`,
    recommendationAuthorName: `text-sm`,
    recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
    recommendationTitle: `font-bold`,
    recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
    recommendationThumbnail: `object-cover`,
    articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
    articleContent: `flex-[4]`,
}

const Recommendations = ({ author }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.accentedButton}>Get unlimited access</div>
            <div className={styles.searchBar}>
                <AiOutlineSearch />
                <input 
                    className={styles.serachInput}
                    type='text'
                    placeholder='Search'
                />
            </div>

            <div className={styles.authorContaier}>
                <div className={styles.authorProfileImageContaier}>
                    <Image 
                        src={UserImage}
                        alt="author image"
                        width={100}
                        height={100}
                    />
                </div>
                <div className={styles.authorName}>Nard1n Codes</div>
                <div className={styles.authorFollowing}>1M followers</div>
                <div className={styles.authorActions}>
                    <button className={styles.actionButton}>Follow</button>
                    <button className={styles.actionButton}><MdMarkEmailUnread/></button>
                </div>
            </div>
            <div className={styles.recommendationContainer}>
                <div className={styles.title}>More from Medium</div>
                <div className={styles.articlesContainer}>
                    <div className={styles.articleContentWrapper}>
                        <div className={styles.articleContent}>
                            <div className={styles.recommendationAuthorContainer}>
                                <div className={styles.recommendationAuthorProfileImageContainer}>
                                    <Image src={UserImage} alt="user image"/>
                                </div>
                                <div className={styles.recommendationAuthorName}>Nard1n Codes</div>
                            </div>
                                <div className={styles.recommendationTitle}>The Ultimate Javascript Course for Beginners</div>
                        </div>
                        <div className={styles.recommendationThumbnailContainer}>
                            <Image className={styles.recommendationThumbnail} src={JSLogo} width={100} height={100} alt="article image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
}

export default Recommendations