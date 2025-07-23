import ResidencesCard from "./ResidencesCard";

import placeImg from '../assets/images/residences/img-01.jpg'
import placeImg02 from '../assets/images/residences/img-02.jpg'
import placeImg03 from '../assets/images/residences/img-03.jpg'

import location from '../assets/images/icons/location.svg'
import rooms from '../assets/images/icons/rooms.svg'
import size from '../assets/images/icons/size.svg'

const Residences = () => {
  return(
    <div className='p-8 my-32'>
      <h2 className='font-extrabold text-5xl text-center mb-16'>Our Popular Residences</h2>
      <div className='flex justify-between items-center'>
        <ResidencesCard
          imgUrl={ placeImg }
          placeIcon={ location }
          place='San Francisco, California'
          roomIcon={ rooms }
          rooms='4 Rooms'
          spaceIcon= { size }
          space='3,500 sq ft'
          price='$2,500,000'
        />
        <ResidencesCard
          imgUrl={ placeImg02 }
          placeIcon={ location }
          place='Beverly Hills, California'
          roomIcon={ rooms }
          rooms='3 Rooms'
          spaceIcon= { size }
          space='1,500 sq ft'
          price='$850,000'
        />
        <ResidencesCard
          imgUrl={ placeImg03 }
          placeIcon={ location }
          place='Palo Alto, California'
          roomIcon={ rooms }
          rooms='6 Rooms'
          spaceIcon= { size }
          space='4,000 sq ft'
          price='$3,700,000'
        />
      </div>
    </div>
  );
}

export default Residences