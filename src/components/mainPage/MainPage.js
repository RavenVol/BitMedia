import React from 'react';

import Header from './Header';
import SectionBenefits from './SectionBenefits';
import SectionWithNoteBook from './SectionWithNoteBook';
import SectionPricing from './SectionPricing';
import Footer from './Footer';

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
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default MainPage;

