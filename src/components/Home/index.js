import { useState } from "react";
import Dropzone from "../Dropzone";

const Home = () => {
    const [dropzonefile, setDropzonefile] = useState('');

    return(
        <div className="home">
            <h1>Clasifica a tu mascota</h1>
            <Dropzone onNewFile={setDropzonefile} />
            <span className="file-info">Archivo: {dropzonefile.name}</span>
            {/* TO DO: Show image previe  */}
            {/* TO DO: Allow to deselect the image  */}
        </div>
    );
}

export default Home;