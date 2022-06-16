import { Fragment, useState } from "react";
import Dropzone from "../Dropzone";

const Home = () => {
    const [dropzonefile, setDropzonefile] = useState('');

    const toObject = (file) => {
        return URL.createObjectURL(file)
    };

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
                    <i class="fa-solid fa-circle-check fa-xl btn-1"></i>
                    <i class="fa-solid fa-circle-xmark fa-xl btn-2" onClick={removeImage}></i>
                </div>
            </div>
            </Fragment>
            : null}
        </div>
    );
}

export default Home;