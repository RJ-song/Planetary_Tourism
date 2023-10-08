import { Link } from 'react-router-dom';
import Marsmodel from '../marsmodel';
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
function Moon() {
    const moonContainerStyle = {
        width: '10%',      // 设置宽度
        height: '800px',   // 设置高度
        margin: '0 auto',  // 居中对齐
        overflow: 'hidden' // 可选，根据需要添加滚动条
    };

    return (
        <div >
            <div  className = 'container'style={moonContainerStyle}>
                <Marsmodel />
            </div>
            {/* 在这里添加其他内容 */}
        </div>
    )
}
export default Moon;