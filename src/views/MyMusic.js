// import background from '../images/BLJ9471.JPG';
import YoutubeEmbed from '../components/Youtube';

export default function MyMusic() {
  return (
    <div className='my-music-body'>
      <h1 style={{ paddingTop: '100px', color: '#fafafa' }}>
        My Music
      </h1>
      <h2 className='song-title'>Have to Let Go:</h2>
      <YoutubeEmbed embedId='QPnM55qdq-M' />
      <p className='song-desc'>
        Written in fifteen quick minutes around a campfire, this song is meant to evoke the prime
        feeling of loneliness and acceptance of needing to move on. The song is built around an
        acoustic guitar and heartfelt vocals. It was released as part of my first set of singles
        released in early 2021
      </p>
      <h2 className='song-title'>Home:</h2>
      <YoutubeEmbed embedId='JOhYAtw7y90' />
      <p className='song-desc'>
        Home is a song which speaks of the joys of family and friendship. It's approach to vocals
        and guitar add to the charm of the simplistic love of life. It was inspired by and written
        with the help of a 10 year old dear friend. It was released as part of my first set of
        singles released in early 2021
      </p>
      <h2 className='song-title'>Rocket Boots:</h2>
      <YoutubeEmbed embedId='tXQW0mmqNTk' />
      <p className='song-desc'>
        Rocket Boots has the energy and flare of youth. In comparison to Home, Rocket Boots was a
        song written and inspired by the younger sibling. Heavier in electric guitar and drums, this
        song aims to remind each of us of our inner child's energy. It was released as part of Dale
        Shack's first set of singles released in early 2021
      </p>
    </div>
  );
}
