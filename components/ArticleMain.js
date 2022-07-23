import Image from 'next/image'
import { AiFillPlayCircle } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { HiOutlineLink } from 'react-icons/hi';
import { BiBookmarks } from 'react-icons/bi';
import { FiMoreHorizontal } from 'react-icons/fi';
import Banner from '../static/banner.png';
import UserImage from '../static/user.png';

const styles ={
    wrapper: `flex items-center justify-center flex-[3] border-l border-r`,
    content: `h-screen w-full p-[2rem]`,
    postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
    authorContainer: ` flex gap-[1rem]`,
    authorProfileImageContainer: `h-[3rem] w-[3rem] rounded-full overflow-hidden grid center`,
    column: `flex flex-col flex-1 justify-center`,
    postDetails: `flex gap-[.2rem] text-[#787878]`,
    listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
    socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,    
    space: `w-[.5rem]`,
    articleMainContainer: `flex flex-col gap-[1rem]`,
    bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,    
    image: `object-cover`,
    title: `font-bold text-3xl `,
    subtitle: `font-mediumSerifItalic text-[1.3rem] text-[#292929]`,
    articleText: `font-mediumSerif text-[1.3rem] text-[#292929]`,
}

const ArticleMain = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
            <div className={styles.postHeaderContainer}>
                <div className={styles.authorContainer}>
                    <div className={styles.authorProfileImageContainer}>
                        <Image className={`object-cover`} src={UserImage} width={100} height={100} alt ="user image"/>
                    </div>
                    <div className={styles.column}>
                        <div>Nard1n Codes</div>
                        <div className={styles.postDetails}>
                            <span>July 20 • 7 min read • </span><span className={styles.listenButton}>
                                <AiFillPlayCircle /> Listen
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.socials}>
                    <IoLogoTwitter />
                    <FaFacebook />
                    <GrLinkedin />
                    <HiOutlineLink />
                    <div className={styles.space} />
                    <BiBookmarks />
                    <FiMoreHorizontal />
                </div>
            </div>
            <div className={styles.articleMainContainer}>
                <div className={styles.bannerContainer}>
                     <Image 
                     className={styles.image}
                     src={Banner}
                     height={100}
                     width={100}
                     alt="Banner"
                     />
                </div>
                <h1 className={styles.title}>7 Free Tools to Increase Productivity in 2022</h1>
                <h4 className={styles.subtitle}>
                    <div>
                        Nardin Codes, July 20, 2022
                    </div>
                    <div>Brief: Productivity is a skill that can be learned.</div>    
                </h4>
                <div className={styles.articleText}>
                    Lorem ipsum dolor sit amet. Est iure doloremque rem dolorem maxime est deleniti dolores et nihil quisquam sed obcaecati quae ut nihil dolor et omnis minima. Ea atque aspernatur et praesentium obcaecati ut itaque nisi et consequatur voluptate eum aliquid iste. Sed voluptates minus sed doloribus ducimus et debitis quisquam et illum sunt sed odit dignissimos est nulla laborum. In voluptas vero nam voluptas amet voluptatem provident ea nulla voluptatum ut temporibus molestiae aut temporibus explicabo.
                    Hic dolorum illum ab beatae tempore ad dolorem laborum est quod consequatur id illo quibusdam est neque cupiditate. Eum omnis itaque 33 expedita laborum cum quisquam tempore et culpa eveniet nam voluptatem velit nam doloremque voluptas a voluptas nemo. Et magni obcaecati qui reprehenderit quia consequatur voluptas aut aperiam voluptas.
                    Qui doloremque beatae eum Quis sequi et atque nihil sed fugit galisum nobis tenetur At sunt placeat ab enim voluptatem. Ut aliquid molestias qui aliquid ab cupiditate omnis At aliquam dolores ut eligendi officia a beatae veniam.
                </div>
            </div>
            </div>
        </div>
    )
}

export default ArticleMain