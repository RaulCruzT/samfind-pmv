import { useLocation } from "react-router-dom";

import './style.css';


const Detail = () => {
    const { state: { base64URL, dropzonefile } } = useLocation();

    const toObject = (file) => {
        return URL.createObjectURL(file)
    };

    console.log(base64URL);

    return(
        <div>
            <img src={toObject(dropzonefile)} alt="" />
        </div>
    );
}

export default Detail;