
"use client";

import Header from '@/Components/Header';
import HomeSlide from '@/Components/HomeSlide';
import Products from '@/Components/Products';
import { useReloadOnVisit }from "@/lib/UseRelaodOnce";


function page() {
   //ReLoad page once when user visit the home page
    useReloadOnVisit("reLoadedHome");
  return (
    <div>
      <Header />
      <HomeSlide />
      <Products />

      
    </div>
  )
}

export default page
