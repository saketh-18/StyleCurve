import React from 'react';
import Banner from "../Banner";
import Collection from "../Collection";
import Season from "../Season";
import Categories from "../Categories";
import Signature from "../Signature";
import Luxury from '../Luxury';

export default function Homepage() {
    return (
        <>
          <Banner />
          <Collection />
          <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <Season />
          <Categories />
          <Signature />
          <Luxury />
        </>
      )
}
