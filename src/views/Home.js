import background from '../images/BLJ_4352b.jpg';

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(${background})`, height: '1200px', width: '2400px' }}>
      <h2>Home</h2>
      <p>This is the Home Page</p>
    </div>
  );
}
