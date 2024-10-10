import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, SetLoading] = useState(false);
    const [posts, SetPosts] = useState('');
    const [page, SetPage] = useState(1);
    const [totalPages, SetTotalPages] = useState(null)

async function fetchBlogPosts(page=1){
    let url=`${baseUrl}?page=${page}`
    SetLoading(true)
    try{
        const result=await fetch(url)
        const data=await result.json();
        SetPage(data.page);
        SetPosts(data.posts);
        SetTotalPages(data.totalPages);
    }catch(error){
console.log("error");
SetPage(1);
SetPosts([]);
SetTotalPages(null);
    }
    SetLoading(false)
}
function handlePageChange(page){
    SetPage(page);
    fetchBlogPosts(page);
}
const value = {
    loading,
    SetLoading,
    posts,
    SetPosts,
    page, 
    SetPage, 
    totalPages, 
    SetTotalPages,
    fetchBlogPosts,
    handlePageChange
}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}