import { useState } from 'react';

export default function Research() {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className='research-page'>
      <h1 className='research-title' style={{ paddingBottom: '100px', color: '#fafafa' }}>Research</h1>

      <h2 className='thesis-title-mtsu' style={{ color: '#fafafa' }}>Middle Tennessee State University Undergraduate Honors Thesis:</h2>
      <h2 className='thesis-title-quotes' style={{ paddingBottom: '100px', color: '#fafafa' }}>"Muskogean Tribal Influence on the Genre of Delta Blues"</h2>

      <h2 className='abstract-title' style={{ color: '#fafafa' }}>Abstract</h2>
      <p className='summary-para'>Little is known about the Native American influence on popular genres of music today. The subject has attracted little interest until recently,
      yet none of that interest has focused on the southeastern tribes, such as the Chickasaw or Choctaw. This is not altogether unusual as there remains much research to be done on how the
      various Native American cultures have influenced modern society. In terms of music specifically, there are very few descriptions and very little documentation of early Native American
      songs as the technology for recording was not invented until 1877. This thesis is merely a first step in introducing the idea that American Indigenous music has had an influence on
      popular forms of American music, such as Delta Blues. The written portion of this thesis has been done in conjunction with supporting audio musical compositions (many of which are original for this project) to assist indemonstration.</p>
      {/* Toggle Button */}
      <button
        className='btn btn-primary'
        onClick={() => setShowPDF(!showPDF)}
      >
        {showPDF ? 'Hide PDF' : 'Show PDF'}
      </button>

      {/* Collapsible PDF Viewer */}
      <div className={`collapse ${showPDF ? 'show' : ''}`} style={{ marginTop: '20px' }}>
        <iframe
          title='thesis'
          src='/Dante Networking and System Design at MTSU_Shackleford.pdf'
          width='100%'
          height='600px'
        ></iframe>
      </div>
    </div>
  );
}
