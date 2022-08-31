import React from 'react';
import ReactDOM from 'react-dom';

function Portal({ children, containerId }) {
    const [wrapper, setWrapper] = React.useState();

    React.useEffect(() => {
        let container = document.querySelector(`#${containerId}`);

        if (!container) {
            container = document.createElement('div');

            document.body.appendChild(container);
        }

        setWrapper(container);

        return () => {
            if (!containerId) {
                document.body.removeChild(container);
            }
        };
    }, [containerId]);

    if (!wrapper) return null;

    return ReactDOM.createPortal(children, wrapper);
}

export default Portal;
