import { useLocation } from "react-router-dom";

import './style.css';


const Detail = () => {
    const { state } = useLocation();

    const toObject = (file) => {
        return URL.createObjectURL(file)
    };

    return(
        <div>
            <img src={toObject(state.dropzonefile)} alt="" />
        </div>
    );
}

export default Detail;