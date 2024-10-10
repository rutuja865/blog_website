
import { useContext, useEffect } from 'react';
import './App.css';
import { Blogs } from './components/Blogs';
import { Header } from './components/Header';
import { Pagination } from './components/Pagination';
import { AppContext } from './context/AppContext';

function App() {
  const {fetchBlogPosts}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[])
  return (
 
<div className='w-full h-full flex flex-col gap-y-1 justify-center item-center'>
<Header/>
<Blogs/>
  <Pagination/>
</div>
  );
}

export default App;
