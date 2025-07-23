import about from '../assets/images/about/about-img.jpg'

const About = () => {
  return(
    <div className='flex justify-around items-center gap-10 mt-40 p-8 container'>
      <img src={about} alt='about image' className='w-xl' />
      <div>
        <h2 className='font-extrabold text-4xl'>We Help You To Find <br />Your Dream Home</h2>
        <p className='font-bold text-lg pt-8 pb-12'>From cozy cottages to luxurious estates, our <br /> dedicated team guides you through every step of the <br /> journey, ensuring your dream home becomes a reality</p>
        <div className='flex items-center gap-10'>
          <div>
            <h3 className='font-bold text-5xl'>8K+</h3>
            <p className='font-semibold text-lg'>Houses Available</p>
          </div>
          <div>
            <h3 className='font-bold text-5xl'>6K+</h3>
            <p className='font-semibold text-lg'>Houses Sold</p>
          </div>
          <div>
            <h3 className='font-bold text-5xl'>2K+</h3>
            <p className='font-semibold text-lg'>Trusted Agents</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About