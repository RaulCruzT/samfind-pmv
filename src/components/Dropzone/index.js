import { useState } from "react";

import './Dropzone.css';

const Dropzone = ({ onNewFile, onToBase64, onSetBase64 }) => {
    const [active, setActive] = useState(false);

    const toggleActive = (event) => {
        event.preventDefault();
        setActive(!active);
    };

    const transformAndSetToBase64 = (file) => {
        onToBase64(file)
            .then(result => {
                onSetBase64(result);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleDrop = (event) => {
        event.preventDefault();
        let file = event.dataTransfer.files[0];

        setActive(!active);
        onNewFile(file);
        transformAndSetToBase64(file);
    }

    const handleSelect = (event) => {
        let file = document.querySelector('.dropzonefile').files[0];

        onNewFile(file);
        transformAndSetToBase64(file);
    }

    return(
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