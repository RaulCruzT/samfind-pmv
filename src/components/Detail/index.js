import { useLocation } from "react-router-dom";
import { useState } from "react";

import './Detail.css';
import Loader from '../Loader';

const Detail = () => {
    const { state: { base64URL, dropzonefile } } = useLocation();
    const [isLoaded, setIsLoaded] = useState(true);

    const toObject = (file) => {
        return URL.createObjectURL(file)
    };

    console.log(base64URL);

    return(
        <div className="detail">
            {isLoaded ?
                <div className="card-2">
                    <div className="card-image-container">
                        <img className="card-image" src={toObject(dropzonefile)} alt="" />
                    </div>
                    <div className="card-body-container">
                        <div className="kind">
                            <h2>Perro</h2>
                        </div>
                        <div className="breed1">
                            <h3>Chihuahua 60%</h3>
                        </div>
                        <div className="breed2">
                            <div>Beagle</div>
                            <div>10%</div>
                        </div>
                        <div className="breed3">
                            <div>Golden</div>
                            <div>10%</div>
                        </div>
                        <div className="breed4">
                            <div>San Bernardo</div>
                            <div>10%</div>
                        </div>
                        <div className="breed5">
                            <div>Pastor Aleman</div>
                            <div>10%</div>
                        </div>
                    </div>
                </div>
                :
                <Loader />
            }
        </div>
    );
}

export default Detail;