import { useState } from 'react';

export default function Research() {
  const [showGradPDF, setShowGradPDF] = useState(false);
  const [showUndergradPDF, setShowUndergradPDF] = useState(false);

  return (
    <div className='research-page'>

      <h1 className='research-title' style={{ paddingBottom: '100px', color: '#fafafa' }}>
        Research
      </h1>

      {/* NEW FLEX CONTAINER */}
      <div className="research-columns">

        {/* LEFT COLUMN — Graduate */}
        <div className="grad-section">
          <h2 className='thesis-title-grad'>Graduate Thesis: Dante Networking and System Design at MTSU</h2>
          <h2 className='thesis-title-quote-grad' style={{ paddingBottom: '100px' }}>
            "Master of Fine Arts in Recording Arts and Technology Final Research Project for Middle Tennessee State University: Dante Networking and System Design at MTSU"
          </h2>

          <h2 className='abstract-title-grad'>Abstract</h2>
          <p className='summary-para-grad'>
            Dante’s networked audio solutions have been growing in popularity for many years. The study of how Audio-over-IP is an
            increasingly important topic for audio engineers, but few understand the principles behind how transmission is accomplished
            using computer networking. This Final Project delves into the foundational concepts of how networks are used for this purpose and what Dante provides. It also provides case
            studies through a journal-style approach of how Dante technology can be utilized in remote sessions, livestream concerts, and larger inter-studio sessions.
            This leads to the end-product of a system design for Middle Tennessee State University to be able to implement Dante into its recording facilities.
          </p>

           {/* BUTTON UNDER GRAD SECTION */}
          <button className="section-btn" onClick={() => setShowGradPDF(!showGradPDF)}
          >
            {showGradPDF ? 'Hide Graduate PDF' : 'Show Graduate PDF'}
          </button>

          {/* GRAD PDF IFRAME */}
          {showGradPDF && (
            <iframe title="grad-thesis" src="/Dante Networking and System Design at MTSU_Shackleford.pdf" width="100%" height="600px" style={{ marginTop: '20px' }} ></iframe>
          )}
        </div>

        {/* RIGHT COLUMN — Undergraduate */}
        <div className="undergrad-section">
          <h2 className='thesis-title-undergrad'>Middle Tennessee State University Undergraduate Honors Thesis:</h2>
          <h2 className='thesis-title-quote-undergrad' style={{ paddingBottom: '100px' }}>
            "Undergraduate Honors Thesis for Middle Tennessee State University: Muskogean Tribal Influence on the Genre of Delta Blues"
          </h2>

          <h2 className='abstract-title-undergrad'>Abstract</h2>
          <p className='summary-para-undergrad'>
            Little is known about the Native American influence on popular genres of music today. The subject has attracted little interest until recently,
        yet none of that interest has focused on the southeastern tribes, such as the Chickasaw or Choctaw. This is not altogether unusual as there remains much research to be done on how the
        various Native American cultures have influenced modern society. In terms of music specifically, there are very few descriptions and very little documentation of early Native American
        songs as the technology for recording was not invented until 1877. This thesis is merely a first step in introducing the idea that American Indigenous music has had an influence on
        popular forms of American music, such as Delta Blues. The written portion of this thesis has been done in conjunction with supporting audio musical compositions (many of which are original for this project) to assist indemonstration.
          </p>

          {/* BUTTON UNDER UNDERGRAD SECTION */}
          <button className="section-btn" onClick={() => setShowUndergradPDF(!showUndergradPDF)}
          >
            {showUndergradPDF ? 'Hide Undergraduate PDF' : 'Show Undergraduate PDF'}
          </button>

          {/* UNDERGRAD PDF IFRAME */}
          {showUndergradPDF && (
            <iframe title="undergrad-thesis" src="/Shack Thesis for Website.pdf" width="100%" height="600px" style={{ marginTop: '20px' }} ></iframe>
          )}
        </div>

      </div>
    </div>
  );
}
