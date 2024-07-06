import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tabs from './components/Tabs';
import { useLocation } from 'react-router-dom';
import { db } from './../../../utils';
import { Ideas } from '../../../utils/schema';
import { desc } from 'drizzle-orm';
import IdeaList from './components/IdeaList';
import Footer from './components/Footer';
import Details from './components/Details';

function HomeScreen() {
  const params = useLocation();
  const [ideaList, setIdeaList] = useState([]);

  useEffect(() => {
    GetAllIdeas();
  }, [params]);

  const GetAllIdeas = async () => {
    try {
      const result = await db.select().from(Ideas)
        .orderBy(desc(params.hash === '#hot' || params.hash === '#top' ? Ideas.vote : Ideas.id))
        .limit(20);
      // console.log(result)
      setIdeaList(result);
    } catch (error) {
      console.error('Error fetching ideas:', error);
      setIdeaList([]); // Set to empty array in case of error
    }
  };

  return (
    <div className=''>
      <Header />
      <Hero />
      <Tabs />
      <IdeaList ideaList={ideaList} refreshData={GetAllIdeas}/>
      <Details/>
      <Footer/>
    </div>
  );
}

export default HomeScreen;
