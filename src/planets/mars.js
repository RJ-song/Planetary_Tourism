import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Mars(){
    const imageStyle = {
        width: '800px',
        height: '450px',  
        placeItems: 'center',  
      };
    return(
        <div>
            <header>
      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1635349429385-201ee3a51b88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60")`,
          height: 300,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to Mars</h1>
              <h4 className='mb-3'>Enjoy your trip</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="container  pt-5">
        <table  mx-auto text-center border="1">
            <tr>
                <td>
                    <h2>Gediz Vallis</h2>
                </td>
                <td><img src="https://photojournal.jpl.nasa.gov/figures/PIA25733_figA.jpg" 
                         alt="test" 
                         style={imageStyle}/></td>
                <td></td>
            </tr>
            <th>
            
            </th>
            <tr>
                <h4>
                    tetetetet
                </h4>
            </tr>
        </table>
    </div> 
    </div>
    )
}
export default Mars;

//<Link to="/">Home</Link>