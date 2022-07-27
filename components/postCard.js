import Image from 'next/image';
import Link from 'next/link';
import Logo from '../static/logo.png';
import UserImage from '../static/user.png';
import { FiBookmark } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';



const styles = {
    wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer`,
    authorContainer: `flex gap-[.4rem]`,
    authorName: `font-semibold`,
    authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    authorImage: `object-cover `,
    briefing: `text-[#787878]`,
    title: `font-bold text-2xl`,
    detailsContainer: `flex items-center justify-between text-[#787878]`,
    articleDetails:`my-2 text-[.8rem]`,
    postDetails: `flex flex-col flex-[2.5]`,
    category:`bg-[#F2F3F2] rounded-full p-1`,
    bookmarkContainer:`cursor-pointer`,
    thumbnailContainer:`flex-1`,
}
const PostCard = ({post}) => {

    const [authorData, setAuthorData] = useState(null)

    useEffect(() => {
        const getAuthorData = async () => {
            setAuthorData(
                (await getDoc(doc(db, 'users', post.data.author))).data()
            )
        }

        getAuthorData()

    }, [post])

    return (
        <Link href={`/post/${post.id}`}>
            <div className={styles.wrapper}>
                <div className={styles.postDetails}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorImageContainer}>
                            <Image
                                src=
                                    {`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                                alt="author image"
                                className={styles.authorImage} 
                                height={40}
                                width={40}          
                            />
                        </div>
                        <div className={styles.authorName}>{authorData?.name}</div>
                    </div>
                    <h1 className={styles.title}>{post.data.title}</h1>
                    <div className={styles.briefing}>{post.data.brief}</div>
                    <div className={styles.detailsContainer}>
                        <span className={styles.articleDetails}>
                            {new Date(post.data.postedOn).toLocaleString('en-US', {
                                day: 'numeric',
                                month: 'short',
                            })} • {post.data.postLength} min read • <span className={styles.category}>{post.data.category}</span>
                        </span>
                        <span  className={styles.bookmarkContainer}>
                            <FiBookmark className='h-5 w-5'/>
                        </span>
                    </div>
                </div>
                <div className={styles.thumbnailContainer}>
                    <Image 
                    height={100}
                    width={100}
                    alt='thumbnail'
                    src=
                        {`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
                    />
                </div>

            </div>
        </Link>

    )
}

export default PostCard