import React from 'react'
import Pagetitle from '../component/common_comp/Pagetitle'
import Trust from '../component/home/Trust'
import Permission from '../component/affilation/Permission'
const Affilation = () => {
    return (
        <div>
            <Pagetitle title="Affilation & Permission" />
            <Permission />
            <Trust />
        </div>
    )
}

export default Affilation