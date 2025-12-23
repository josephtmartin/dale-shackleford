import Typewriter from '../components/Typewriter';
import Card from '../components/Card';

export default function Home() {
  const cards = [
    { title: 'Studio Recording', heading: 'Take your song from Demo to radio ready', image: '/images/55-077A6406.jpg' },
    { title: 'Mixing', heading: 'Turn raw tracks into polished, release-ready records', image: '/images/IMG_7495.jpg' },
    { title: 'Live Concerts', heading: 'Bring your show to larger than life', image: '/images/IMG_8134.jpg' },
    { title: 'Location Recording', heading: 'Capture your performance anywhere with studio quality', image: '/images/IMG_7217.jpg' },
  ];

  return (
    <div className='home-body'>
      <div className='home-bio-container'>
        <Typewriter />
        <div className='card-container'>
          {cards.map((card, index) => (
            <Card key={index} title={card.title} heading={card.heading} image={card.image}/>
          ))}
        </div>
        <p className='home-bio'>
          Dale Shack is a Chickasaw Audio Engineer, Producer, and Artist based in Nashville. He earned a B.Sc. in Audio Production and an M.F.A. in Recording Arts and Technology from
          Middle Tennessee State University. Over the past five years, Dale has honed his craft working under Grammy and Platinum-winning producers, handling studio sessions, remote recordings, and live concerts.
          Alongside his technical work, he also releases his own music and performs as an artist. Dale is a passionate supporter of local artists and co-founded Successfully Unsigned, a music business podcast.
        </p>
      </div>

      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/D1-HEEi-9Qk?si=2fjk3R_ShS0_QrLK" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  );
}
