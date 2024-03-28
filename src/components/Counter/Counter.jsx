
import './Counter.css'
import { FcLike } from "react-icons/fc";
import { useState, useEffect } from 'react';
// import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database';
import { onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB8JNy6K7F-FleyUxq4BmfCO0mIGqnvEfs",
    authDomain: "innohacks-like-counter.firebaseapp.com",
    databaseURL: "https://innohacks-like-counter-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "innohacks-like-counter",
    storageBucket: "innohacks-like-counter.appspot.com",
    messagingSenderId: "227514540661",
    appId: "1:227514540661:web:4736b67774954f5f580e3c"
  };
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const countRef = ref(database, 'count'); 



const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const unsubscribe = onValue(countRef, (snapshot) => {
          setCount(snapshot.val() || 0);
        });
        return () => unsubscribe();
    }, []);    
    const handleClick = () => {
        // Increment count
        const newCount = count + 1;
        set(countRef,newCount);

        // Store count in Firebase Realtime Database
        set(countRef, newCount);
    };

    return (
        <button id="hitCounter" onClick={handleClick}>
          <FcLike/>  {count}
        </button>
    );
};

export default Counter;

