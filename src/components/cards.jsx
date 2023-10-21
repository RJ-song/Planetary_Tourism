import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import { useNavigate } from 'react-router-dom';

  function Cards ({image,title,description, travel}){
    const navigate = useNavigate();
    const checkout = () => {
      navigate('/Mars')
    }

    return(
        <MDBCard style={{ width: '300px', height: '450px' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src= {image} fluid alt='loading'/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
          {description}
        </MDBCardText>
        <button  onClick={checkout} type="button" class="btn btn-primary">CheckOut</button>
      </MDBCardBody>
    </MDBCard>
    )
  }
  export default Cards;
 