import { useContext, useState } from "react";
import { Header } from "../../components/header/Header";
import styles from './NewStory.module.css';
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";

export function NewStory(){
    const { isLoggedIn } = useContext(GlobalContext);
    const [storyErr, setStoryErr] = useState('');
    const [moneyErr, setMoneyErr] = useState('');
    const [story, setStory] = useState('');
    const [img, setImg] = useState('');
    const [money, setMoney] = useState('');
    const [isFormValidated, setIsFormValidated] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);

    function isValid(str){
        return typeof str === 'string' && str.length > 0;
    }
    function isValidMoney(money){
        return typeof money === 'number'
    }

    function submitForm(e){
        e.preventDefault();
        setIsFormValidated(true);

        setStoryErr(isValid(story) ? '' : 'Įrašykite savo istoriją.');
        setMoneyErr(isValidMoney(money) ? '' : 'Privaloma įvesti skaičius ir suma turi būti daugiau nei 0.');

        if(!storyErr && !moneyErr){
            fetch('http://localhost:5021/api/postStory', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    story,
                    img,
                    money,
                })
            })
            .then(res => res.json())
            .then(data => setApiResponse(data))
            .catch(err => console.log(err))
        }
    }

    return (
        <>
            <Header />
            {isLoggedIn &&
            <div className={styles.formContainer}>
                <form>
                    <h1>Submit your story</h1>
                    <div className={styles.formInput}>
                        <label htmlFor="story">Your story</label>
                        <textarea required={true} rows={4} cols={50} placeholder="Write your story.." maxLength={200} id="story" name="Write your story...">

                        </textarea>          
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="floatingInput">Upload your foto</label>
                        <input type="file" />                   
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="floatingInput">Amount of money you need to raise</label>
                        <input className={styles.money} type="text" />
                    </div>
                    <button type="submit">Post</button>
                </form>
            </div>}
            {!isLoggedIn && 
            <div className={styles.public}>
                <h1>If you want to post your orwn story, please log in or create an account</h1>
                    <Link to={'/login'} className={styles.btn}>Login</Link>
                    <Link to={'/register'} className={styles.btn}>Register</Link>
            </div>
            }
        </>
    );
}