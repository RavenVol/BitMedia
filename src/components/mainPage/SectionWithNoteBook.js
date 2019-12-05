import React from 'react';

import '../../styles/css/sectionWithNoteBook.css';

const SectionWithNoteBook = () => (
  <section className="wNoteBook">
    <h2 className="wNoteBook__title">
      Start Managing your apps business, more faster
    </h2>
    <p className="wNoteBook__message">
      Objectively deliver professional value with diverse web-readiness.
      <br />
      Collaboratively transition wireless customer service without
      <br />
      goal-oriented catalysts for change. Collaboratively.
    </p>
    <button className="wNoteBook__button" type="button">
      Learn more
    </button>
    <img
      className="wNoteBook__img"
      src="https://github.com/RavenVol/BitMedia/blob/master/public/images/macbook.png?raw=true"
      alt="NoteBook Image"
    />
  </section>
)

export default SectionWithNoteBook;
