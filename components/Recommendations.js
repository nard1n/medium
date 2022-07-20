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
}

const Recommendations = () => {
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
        </div>
            )
}

export default Recommendations