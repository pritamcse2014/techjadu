import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import slider1 from '../../images/slider-1.svg';
import slider2 from '../../images/slider-2.svg';
import slider3 from '../../images/slider-3.svg';

export default function App() {
  return (
    <MDBCarousel showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={slider1} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={slider2} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={slider3} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}