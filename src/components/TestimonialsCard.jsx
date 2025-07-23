const TestimonialsCard = ({ imgUrl, personImg, personName, location, ratingIcon, rating , testimonial }) => {
  return(
    <div className='w-[382px] h-[430px] mt-16'>
      <img src={ imgUrl } alt='place image' className='rounded-tl-xl rounded-tr-xl rounded-br-0 rounded-bl-0' />
      <div className='bg-brown-400 p-6 rounded-tl-0 rounded-tr-0 rounded-br-xl rounded-bl-xl'>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex items-center gap-4'>
            <img src={ personImg } alt='person image' className='w-[58px] rounded-full' />
            <div>
              <p className='font-bold text-xl'>{ personName }</p>
              <p className='font-semibold'>{ location }</p>
            </div>
          </div>
          <div className='flex justify-center items-center w-[59px] h-[24px] rounded-md bg-white'>
            <img src={ ratingIcon } alt='icon image' className='w-5' />
            <p className='font-semibold'>{ rating } </p>
          </div>
        </div>
        <p>{ testimonial }</p>
      </div>
    </div>
  )
}

export default TestimonialsCard