import "./style.css";
import { useState } from "react";
import deleteImage from '../../assets/delete.png';

const imageTypes = ["jpeg", "png", "jfif", "jpg", "svg"];

export const UploadPhoto = ({ setImage }) => {
    const [photoUrl, setPhotoUrl] = useState("");
    const [warning, setWarning] = useState(false);
    const [deleteImageVisible, setDeleteImageVisible] = useState(false);

    const handleInputFile = (e) => {
        const { name } = e.target.files[0];
        const typeImage = name.split(".")[1];

        if (imageTypes.includes(typeImage)) {
            setWarning(false);
            setPhotoUrl(name);
            setImage(name)
        } else {
            setWarning(true);
        }
    };

    return (
        <div className='uploadImage'>
            {photoUrl && (
                <div 
                    className="imageContainer"
                    onMouseEnter={() => setDeleteImageVisible(true)}
                    onMouseLeave={() => setDeleteImageVisible(false)}
                >
                    <img
                        className='image'
                        src={`../../../src/assets/${photoUrl}`}
                    />
                    <button onClick={() => setPhotoUrl(false)} className="deleteImage" style={{ display: deleteImageVisible ? 'block' : 'none' }}>
                        <img src={deleteImage} />
                    </button>
                </div>
            )}
            {!photoUrl && (
                <div className="input-file-container">
                    <input className="input-file" id="my-file" type="file" onChange={handleInputFile} />
                    <label tabIndex="0" htmlFor="my-file" className="input-file-trigger">
                        +<br /> UPLOAD IMAGE
                    </label>
                </div>
            )}
            {warning && <h1>The image format you selected is not suitable</h1>}
        </div>
    );
};
