// import React from 'react'
// import { createContext } from 'react';

// export const Context = createContext();

// const ContextProvider = ({children}) => {



// const categories = [
//   // { id: 1, title: "News" },
//     { id: 2, title: "Relationship" },
//     { id: 3, title: "Entrepreneurship/Business" },
//     { id: 4, title: "Inspire/Motivate" },
//     { id: 5, title: "Digital Skills/Tech" },
//     { id: 6, title: "Education" },
//     { id: 7, title: "Family" },
//     { id: 8, title: "Food" },
//     // { id: 9, title: "Life Issues" },
//     { id: 10, title: "Health" },
//     { id: 11, title: "Viral Gist" },
//     { id: 12, title: "Religion" },
//     { id: 13, title: "Entertainment" },
//     { id: 14, title: "Travel" },
//     {id:15, title:"Finance & Investment"},
//      {id:16, title:"Sports"},
//      {id:17, title:"Beauty"},
//      {id:18, title:"Trending News"},
//       {id:19, title:"Tech & AI Tools"},
//        {id:20, title:"Kids Zone"},
//         {id:21, title:"Gaming"}

// ];


//   return (
//     <Context.Provider value={{categories}}>
//       {children}
//     </Context.Provider>
//   )
// }

// export default ContextProvider



// // db cred
// // User “elexdont_mcdb1” was added to the database “elexdont_mcdb1”.
// // #Mcdb123mcdb









import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { db } from "../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const cacheKey = "all_posts";
  const firestoreKey = "mike_connect_all_posts_doc";


  const categories = [
    { id: 2, title: "Relationship" },
    { id: 3, title: "Entrepreneurship/Business" },
    { id: 4, title: "Inspire/Motivate" },
    { id: 5, title: "Digital Skills/Tech" },
    { id: 6, title: "Education" },
    { id: 7, title: "Family" },
    { id: 8, title: "Food" },
    { id: 10, title: "Health" },
    { id: 11, title: "Viral Gist" },
    { id: 12, title: "Religion" },
    { id: 13, title: "Entertainment" },
    { id: 14, title: "Travel" },
    { id: 15, title: "Finance & Investment" },
    { id: 16, title: "Sports" },
    { id: 17, title: "Beauty" },
    { id: 18, title: "Trending News" },
    { id: 19, title: "Tech & AI Tools" },
    { id: 20, title: "Kids Zone" },
    { id: 21, title: "Gaming" }
  ];

  const loadFromFirestore = async () => {
    try {
      const ref = doc(db, "cache", firestoreKey);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data().posts || [];
        return data;
      }
      return null;
    } catch (err) {
      return null;
    }
  };

  const saveToFirestore = async (data) => {
    try {
      const ref = doc(db, "cache", firestoreKey);
      await setDoc(ref, { posts: data, updatedAt: Date.now() });
    } catch (err) {
      console.log("Firestore save failed");
    }
  };

  // useEffect(() => {
  //   const loadPosts = async () => {
  //     let cached = null;

  //     // ✅ 1. localStorage (instant UI)
  //     try {
  //       cached = JSON.parse(localStorage.getItem(cacheKey));
  //       if (cached?.length) {
  //         setPosts(cached);
  //         setLoading(false);
  //       }
  //     } catch {}

  //     // =========================
  //     // 2. Try API (PRIMARY)
  //     // =========================
  //     try {
  //       const res = await axios.get(
  //         `https://www.mikeconnect.com/mc_api/get_posts_by_category.php?category=0&t=${Date.now()}`
  //       );

  //       if (res.data?.success) {
  //         const allPosts = res.data.posts || [];

  //         setPosts(allPosts);
  //         localStorage.setItem(cacheKey, JSON.stringify(allPosts));

  //         // 🔥 update firestore in background
  //         saveToFirestore(allPosts);

  //         setLoading(false);
  //         return;
  //       }
  //     } catch (err) {
  //       console.log("API failed → fallback to Firestore");
  //     }

  //     // =========================
  //     // 3. Firestore fallback
  //     // =========================
  //     const firestoreData = await loadFromFirestore();

  //     if (firestoreData?.length) {
  //       setPosts(firestoreData);
  //       localStorage.setItem(cacheKey, JSON.stringify(firestoreData));
  //     }

  //     setLoading(false);
  //   };

  //   loadPosts();
  // }, []);




useEffect(() => {
  const loadPosts = async () => {
    setLoading(true);

    let cached = null;

    // ✅ 1. Try localStorage FIRST (instant if exists)
    try {
      cached = JSON.parse(localStorage.getItem(cacheKey));

      if (cached?.length) {
        setPosts(cached);
        setLoading(false); // show immediately
      }
    } catch {}

    // =========================
    // 2. Try API
    // =========================
    try {
      const res = await axios.get(
        `https://www.mikeconnect.com/mc_api/get_posts_by_category.php?category=0&t=${Date.now()}`
      );

      if (res.data?.success) {
        const allPosts = res.data.posts || [];

        setPosts(allPosts);
        localStorage.setItem(cacheKey, JSON.stringify(allPosts));

        saveToFirestore(allPosts);

        setLoading(false);
        return;
      }
    } catch (err) {
      console.log("API failed");
    }

    // =========================
    // 3. Firestore fallback
    // =========================
    const firestoreData = await loadFromFirestore();

    if (firestoreData?.length) {
      setPosts(firestoreData);
      localStorage.setItem(cacheKey, JSON.stringify(firestoreData));
    }

    setLoading(false);
  };

  loadPosts();
}, []);




  return (
    <Context.Provider value={{ posts, loading, categories }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;