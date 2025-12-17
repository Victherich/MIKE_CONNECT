import React from 'react'
import { createContext } from 'react';

export const Context = createContext();

const ContextProvider = ({children}) => {



const categories = [
  { id: 1, title: "News" },
    { id: 2, title: "Relationship" },
    { id: 3, title: "Entrepreneurship/Business" },
    { id: 4, title: "Inspire/Motivate" },
    { id: 5, title: "Digital Skills/Tech" },
    { id: 6, title: "Education" },
    { id: 7, title: "Family" },
    { id: 8, title: "Food" },
    { id: 9, title: "Life Issues" },
    { id: 10, title: "Health" },
    { id: 11, title: "Viral Gist" },
    { id: 12, title: "Religion" },
    { id: 13, title: "Entertainment" },
    { id: 14, title: "Travel" },
    {id:15, title:"Finance"}
];


  return (
    <Context.Provider value={{categories}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider



// db cred
// User “elexdont_mcdb1” was added to the database “elexdont_mcdb1”.
// #Mcdb123mcdb