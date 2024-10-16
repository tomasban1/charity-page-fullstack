import { useContext, useState } from "react";
import { Header } from "../../components/header/Header";
import styles from '../register/Register.module.css';
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

export function Login(){
    const {changeLoginStatus, changeRole} = useContext(GlobalContext);

    const minUsernameLength = 3;
    const maxUsernameLength = 20;
    const minPasswordLength = 12;
    const maxPasswordLength = 70;
    const [username, setUsername] = useState('');
    const [isformValidated, setIsFormValidated] = useState(false);
    const [password, setPassword] = useState('');
    const [usernameError, setusernameError] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [apiResponse, setApiResponse] = useState(null);
    const navigate = useNavigate();

    function submitForm(e){
      e.preventDefault();
      setIsFormValidated(true);

      let usernameError = '';
      
      if(username.length < minUsernameLength){
        usernameError = (`Vartotojo vardas yra per trumpas, turi būti mažiausiai ${minUsernameLength} simboliai.`)
      } else if(username.length > maxUsernameLength){
        usernameError = (`Slaptažodis yra per ilgas, daugiausiai gali būti ${maxUsernameLength} simbolių.`)
      }  
      setusernameError(usernameError);

      let passwordError = '';

      if(password.length < minPasswordLength){
        passwordError = `Slaptažodis yra per trumpas, turi būti mažiausiai ${minPasswordLength} simbolių.`
      }else if(password.length > maxPasswordLength){
        passwordError = `Slaptažodis yra per ilgas, turi būti mažiausiai ${maxPasswordLength} simbolių.`
      }
      setpasswordError(passwordError)


      if(!usernameError && !passwordError){

        fetch('http://localhost:5021/api/login', {
        method: 'POST', 
        credentials: 'include',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then(res => res.json())
        .then(msg => {
          setApiResponse(msg)
           if(msg.status === 'success'){
            changeLoginStatus(true)
            changeRole(msg.role)
            navigate('/post')
          }
      })
        
        .catch(err => console.error(err))
        
    }
      }

    return (
        <>
            <Header />
            <main>
                <form onSubmit={submitForm} className={styles.formContainer}>
                    <h1>Sign in</h1>
                    {apiResponse && apiResponse.status === 'success' ? <p className={styles.successMsg}>{apiResponse.msg}</p> : null}
                    <div className={styles.inputContainer}>
                       
                        <label htmlFor="floatingInput">Username</label>
                        <input value={username} onChange={e => setUsername(e.target.value.trim())} type="text" className={isformValidated ? usernameError ? `${styles.isNotValid}` : `${styles.isValid}` : ''} />
                         {usernameError ? <p className={styles.error}>{usernameError}</p> : null}
                    </div>
                    <div className={styles.inputContainer}>
                        
                        <label htmlFor="floatingInput">Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value.trim())} type="password" className={isformValidated ? usernameError ? `${styles.isNotValid}` : `${styles.isValid}` : ''} />
                        {passwordError ? <p className={styles.error}>{passwordError}</p> : null}
                    </div>
                    <button type="submit">Sign in</button>
                </form>
            </main>
        </>
    );
}