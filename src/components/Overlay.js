import { forwardRef, useRef } from "react";

const Overlay = () => {

    return (
        <div className="overlay">
            <a href="#" className="closebtn">&times;</a>
            <div className="overlay__content" id="overContent"></div>
        </div>
    );
}

export default Overlay