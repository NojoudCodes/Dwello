
const ServiceCard = ({ imgUrl, header, paragraph, className }) => {
  return(
    <div className='bg-brown-400 px-6 py-8 rounded-xl'>
      <div className='relative bg-brown-500 p-8 w-[83px] h-[83px] rounded-xl'>
        <img src={ imgUrl } alt='card image' className={`absolute left-4 top-4 object-contain ${className}`} />
      </div>
      <h3 className='mt-5 mb-3.5 font-bold text-lg'>{ header }</h3>
      <p className='font-semibold'>{ paragraph }</p>
    </div>
  );
}

export default ServiceCard