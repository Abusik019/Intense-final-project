import "./style.css";
import { useState } from "react";

const imageTypes = ["jpeg", "png", "jfif", "jpg", "svg"];

export const UploadPhoto = () => {
    const [photoUrl, setPhotoUrl] = useState("");
    const [warning, setWarning] = useState(false);

    const handleInputFile = (e) => {
        const { name } = e.target.files[0];
        const typeImage = name.split(".")[1];

        imageTypes.forEach((item) => {
            if (item !== typeImage) {
                setWarning(true);
            }

            setWarning(false);
            setPhotoUrl(name);
        });
    };

    return (
        <div className='uploadImage'>
            {photoUrl && (
                <img
                    className='image'
                    src={`../../../src/assets/${photoUrl}`}
                />
            )}
            {!photoUrl && (
                <div className="input-file-container">  
                    <input className="input-file" id="my-file" type="file" onChange={handleInputFile}/>
                    <label tabIndex="0" htmlFor="my-file" className="input-file-trigger">+<br /> UPLOAD IMAGE</label>
                </div>
            )}
            {warning && <h1>The image format you selected is not suitable</h1>}
        </div>
    );
};
