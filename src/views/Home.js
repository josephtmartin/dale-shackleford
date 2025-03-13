import TypingEffect from '../components/TypingEffect';
import Card from '../components/Card';

export default function Home() {
  const cards = [
    { title: 'Studio', heading: 'Popular music production, studio engineering and recording, mixing' },
    { title: 'Live', heading: 'Musical Theatre mixing, FoH mixing, Concert Promotion/Production, Monitor mixing' },
    { title: 'Location', heading: 'Remote/location recording of both popular music and ensembles/orchestral' },
    { title: 'Video Production', heading: 'Video editing, camera operation, podcast production and editing' },
  ];

  return (
    <div className='home-body'>
      <h1 className='home-title' style={{ paddingTop: '100px', paddingBottom: '100px', color: '#fafafa' }}>Home</h1>
      <div className='home-bio-container'>
        <TypingEffect />
        <div className='card-container'>
          {cards.map((card, index) => (
            <Card key={index} title={card.title} heading={card.heading} />
          ))}
        </div>
        <p className='home-bio'>Dale Shack is a Chickasaw Audio Engineer, Producer, and Artist based in Nashville. He earned a B.Sc. in Audio Production and an M.F.A. in Recording Arts and Technology from
          Middle Tennessee State University. Over the past five years, Dale has honed his craft working under Grammy and Platinum-winning producers, handling studio sessions, remote recordings, and live concerts.
          Alongside his technical work, he also releases his own music and performs as an artist. Dale is a passionate supporter of local artists and co-founded Successfully Unsigned, a music business podcast.
        </p>
      </div>
    </div>
  );
}
