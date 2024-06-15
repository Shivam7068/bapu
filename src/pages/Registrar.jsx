import React from 'react';
import Pagetitle from '../component/common_comp/Pagetitle';
import RegistrarComponent from '../component/vc/Registrar'; // Importing the RegistrarComponent

const RegistrarPage = () => {
    return (
        <div>
            <Pagetitle title="Registrar" />
            <RegistrarComponent /> {/* Use the renamed RegistrarComponent */}
        </div>
    )
}

export default RegistrarPage; // Rename the export to RegistrarPage
