import background from '../images/PXL_20210319_222611694.PORTRAIT.jpg';
// import Carousel from '../components/Carousel'
import YoutubeEmbed from '../components/Youtube';

export default function Produced() {
  return (
    <div className='produced-container'>
      <h1 className = 'produced-title' style={{ paddingBottom: '200px', color: '#fafafa' }}>Production & Engineering</h1>
      <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <YoutubeEmbed embedId='OKQ2npFvqUU' />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <YoutubeEmbed embedId='R3iWHBGeJeE' />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <YoutubeEmbed embedId='_B_WGvOJ-PQ' />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>
      <p className='skills-para'>
        I am proficient in Pro Tools and have experience on large format consoles and on smaller interfaces, including the
        API Vision and the SSL Duality. I have tracked bands on both consoles, as well as mixed on the
        Vision, various smaller SSL consoles, and in the box. My focus has been in tracking live
        instruments and mixing to let the authenticity of the tracks shine for themselves.
        My genre experience in recording includes Rock, Pop, Country, and Folk.
      </p>
    </div>
  );
}
