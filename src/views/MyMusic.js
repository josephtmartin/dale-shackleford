// import background from '../images/BLJ9471.JPG';
import MusicCarousel from '../components/Carousel/MusicCarousel';

export default function MyMusic() {
  return (
    <div className='my-music-body'>
      <h1 style={{ paddingTop: '100px', color: '#fafafa' }}>
        My Music
      </h1>
      <MusicCarousel />
    </div>
  );
}
