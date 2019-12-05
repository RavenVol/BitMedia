import React from 'react';

import Header from './Header';
import SectionBenefits from './SectionBenefits';
import SectionWithNoteBook from './SectionWithNoteBook';
import SectionPricing from './SectionPricing';

const MainPage = () => {
  return(
    <>
      <header>
        <Header />
      </header>
      <main>
        <SectionBenefits />
        <SectionWithNoteBook />
        <SectionPricing />
      </main>
    </>
  )
}

export default MainPage;

