import React, { createContext, useState } from "react";

export const Blogcontext = createContext()

export const BlogContainer= (Children) => {
    const [blog,]= useState([])
 return(
    <Blogcontext.Provider value={blog}>

    </Blogcontext.Provider>
 )
}