import { useState } from "react";

import './style.css';

const Dropzone = ({ onNewFile }) => {
    const [active, setActive] = useState(false);

    const toggleActive = (event) => {
        event.preventDefault();
        setActive(!active);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setActive(!active);
        onNewFile(event.dataTransfer.files[0]);
    }

    const handleSelect = (event) => {
        onNewFile(document.querySelector('.dropzonefile').files[0]);
    }

    return(
        // TO DO: Limit file type to images
        <div
            className={`dropzone ${active ? "active-dropzone": ""}`}
            onDragEnter={toggleActive}
            onDragLeave={toggleActive}
            onDragOver={(event) => {event.preventDefault()}}
            onDrop={handleDrop}
        >
            <span>Arrastra y suelta una imagen aquí</span>
            <span>O</span>
            <label for="dropzonefile">Selecciona una imagen</label>
            <input className="dropzonefile" type="file" accept="image/*" id="dropzonefile" onChange={handleSelect} />
        </div>
    );
}

export default Dropzone;