import React, {useState} from 'react'

const Message = ({ text }) => {
    const [showMessage, setShowMessage] = useState(false);
    
    const handleClick = () => {
        setShowMessage(!showMessage);
    };
    
    return (
        <div>
            <button onClick={handleClick}>Mostrar/Ocultar</button>
            {showMessage && <p>{text}</p>}
        </div>
    );
};

export default Message;