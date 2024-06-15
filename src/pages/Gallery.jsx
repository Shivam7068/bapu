import React from "react";
import Pagetitle from "../component/common_comp/Pagetitle";
import GalleryPage from "../component/gallery/Gallery";

const Gallery = () => {
    return (
        <div>
            <Pagetitle title="Gallery" />
            < GalleryPage /> {/* Use the renamed RegistrarComponent */}
        </div>
    )
}
export default Gallery;