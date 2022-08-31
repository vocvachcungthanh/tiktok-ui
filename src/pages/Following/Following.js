import React from 'react';
import { Portal as PortalButton } from '~/components/Portal';

function Following() {
    return (
        <div>
            <h1>Following Page</h1>
            <PortalButton containerId="publish-btn">
                <button>Save and Publish</button>
            </PortalButton>
        </div>
    );
}

export default Following;
