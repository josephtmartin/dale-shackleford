import background from '../images/BLJ9471.JPG';

export default function MyMusic() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
      backgroundAttachment: 'fixed',
      height: '1250px',
    }}>
      <h2>My Music</h2>
      <p>This is the My Music Page</p>
    </div>
  );
}
