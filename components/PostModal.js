import { useContext, useState } from "react"
import { MediumContext } from "../context/MediumContext"
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const styles = {
    wrapper: `w-[70rem] h-[50rem] flex flex-col items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll`,
    title: `my-[2rem] font-bold text-3xl`,
    smallField: `w-full flex justify-between gap-[1rem]`,
    fieldTitle: `flex-1 text-end`,
    inputContainer: `flex-[5] h-min border-2 border-[#787878]`,
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
    inputField: `w-full border-0 outline-none bg-transparent`,
}   

const PostModal = () => {
    const { currentUser } = useContext(MediumContext)

    const [title, setTitle] = useState('')
    const [brief, setBrief] = useState('')
    const [category, setCategory] = useState('')
    const [postLength, setPostLength] = useState('')
    const [bannerImage, setBannerImage] = useState('')
    const [body, setBody] = useState('')

    const addPostToFirebase = async event => {
        event.preventDefault()

        await addDoc(collection(db, 'articles'), {
            bannerImage: bannerImage,
            body: body,
            brief: brief,
            category: category,
            postedOn: serverTimestamp(),
            postLength: Number(postLength),
            title: title,
            author: currentUser.email
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Create a New Post</div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Title</span>
                <span className={styles.inputContainer}>
                    <input 
                        className={styles.inputField}
                        type='text'
                        value={title}
                        onChange={event => setTitle(event.target.value)}      
                    />

                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Brief</span>
                <span className={styles.inputContainer}>
                    <input 
                        className={styles.inputField}
                        type='text'
                        value={brief}
                        onChange={event => setBrief(event.target.value)}      
                    />

                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Banner Image URL</span>
                <span className={styles.inputContainer}>
                    <input 
                        className={styles.inputField}
                        type='text'
                        value={bannerImage}
                        onChange={event => setBannerImage(event.target.value)}      
                    />

                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Category</span>
                <span className={styles.inputContainer}>
                    <input 
                        className={styles.inputField}
                        type='text'
                        value={category}
                        onChange={event => setCategory(event.target.value)}      
                    />

                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Estimated Read Length (in minutes)</span>
                <span className={styles.inputContainer}>
                    <input 
                        className={styles.inputField}
                        type='text'
                        value={postLength}
                        onChange={event => setPostLength(event.target.value)}      
                    />

                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Article Text</span>
                <span className={styles.inputContainer}>
                    <textarea 
                        className={styles.inputField}
                        type='text'
                        rows={12}
                        value={body}
                        onChange={event => setBody(event.target.value)}      
                    />

                </span>
            </div>
            <button onClick={addPostToFirebase} className={styles.accentedButton}>Submit</button>

        </div>
    )
}

export default PostModal