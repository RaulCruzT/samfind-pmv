import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import './style.css';
import Dropzone from "../Dropzone";

const Home = () => {
    const navigate = useNavigate();
    const [dropzonefile, setDropzonefile] = useState('');

    const toObject = (file) => {
        return URL.createObjectURL(file)
    };

    const goToDetail = () => {
        navigate('/detail', { state: {dropzonefile: dropzonefile} });
    }

    const removeImage = () => {
        setDropzonefile('');
    }

    return(
        <div className="home">
            <h1>Clasifica a tu mascota</h1>
            <Dropzone onNewFile={setDropzonefile} />
            { dropzonefile !== '' ?
            <Fragment>
            <span className="file-info">Archivo: {dropzonefile.name}</span>
            <div className="card">
                <img className="card-img" src={toObject(dropzonefile)} alt="" />
                <div class="card-body">
                    <i className="fa-solid fa-circle-check fa-xl btn-1" onClick={goToDetail}></i>
                    <i className="fa-solid fa-circle-xmark fa-xl btn-2" onClick={removeImage}></i>
                </div>
            </div>
            </Fragment>
            : null}
        </div>
    );
}

export default Home;