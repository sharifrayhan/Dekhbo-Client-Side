
import app from "../firebase/Firebase.config";
import Swal from 'sweetalert2'
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const Context = createContext(null);
const auth = getAuth(app);

const AllContext = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [registerError, setRegisterError] = useState('')
    const [theme, setTheme] = useState("light");
    const [termsError, setTermsError] = useState('')
console.log(user)

const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

    const registerSuccessModal = ()=>{
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Registration Successfull, Please Login to continue',
          showConfirmButton: false,
          timer: 1500
        })
      }

    const loginSuccessModal = ()=>{
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Successfully Logged in',
          showConfirmButton: false,
          timer: 1500
        })
      }
    

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('something happened in the on auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    },[])

// import and create register user
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

// Handle register user
  
    const handleRegister = (e, navigate) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const name = form.get('name');
      const email = form.get('email');
      const password = form.get('password');
      const checkbox = form.get('checkbox');
      console.log(email,password)
      setRegisterError('')
    //   setRegisterSuccess('')
      setTermsError('')
  
      if (password.length<6){
        setRegisterError('Password Should be at least 6 characters or long');
        return
      }
  
      else if(!/[A-Z]/.test(password)){
        setRegisterError('Password must contain an uppercase letter');
        return
      }
  
      else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
        setRegisterError('Password must contain a special character');
        return
      }
  
      else if(!checkbox){
        setTermsError('You have to accept our terms & conditions');
        return 
      }
  
      createUser(email,password,navigate)
      .then(result=>{
          console.log(result.user)
          updateProfile(result.user,{
            displayName: name
          })
          registerSuccessModal()
          navigate('/Login')
          logOut()
          
      })
      .catch(error=>{
          console.error(error)
          setRegisterError(error.message)
      })
  }
  

// import and create sign in method
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

// Handle sign in user

    const handleLogin = (e, navigate, location) => {
        e.preventDefault();
      
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
      
        if (email === '' && password === '') {
          handleGoogleSignIn();
        } else {
        
      
          signIn(email, password, navigate, location)
            .then(result => {
              console.log(result.user);
              loginSuccessModal()
              navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
              console.error(error.code);
           
            });
        }
      };

// import and create google auth provider
    const googleProvider = new GoogleAuthProvider()

// import and create google sign in method

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

// Handle google sign in user
    const handleGoogleSignIn = (navigate,location) => {
      googleSignIn()
        .then((result) => {
          console.log(result.user);
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          console.error(error);
        });
    };

// import and create log out method
    
    const logOut = () => {
        return signOut(auth);
    }

    const toAll = {
            auth,
            user,
            loading,
            logOut,
            handleLogin,
            handleRegister,
            handleGoogleSignIn,
            registerError, 
            termsError,
            toggleTheme,
            theme
    }
    
    return <Context.Provider value={toAll}>{children}</Context.Provider>;
};

export default AllContext;