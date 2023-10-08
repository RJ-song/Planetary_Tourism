import { Link } from 'react-router-dom';
import Marsmodel from '../marsmodel';
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import Earthmodel from '../earthmodel';
import Jupitermodel from '../jupitermodel';
import Merucurymodel from '../mercurymodel';
import Neptunemodel from '../neptunemodel';
import Saturnmodel from '../saturnmodel';
import Uranusmodel from '../uranusmodel';
import Venussmodel from '../venusmodel';
function Moon() {
    const moonContainerStyle = {
        width: '10%',      
        height: '800px',   
        margin: '0 auto',  
        overflow: 'hidden' 
    };

    return (
        <div >
            {/* <div  className = 'container'style={moonContainerStyle}>
                <Marsmodel />
            </div> */}
            <div>
                <Venussmodel/>
            </div>
            {/* 在这里添加其他内容 */}
        </div>
    )
}
export default Moon;