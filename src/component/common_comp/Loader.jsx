import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            < ClipLoader
                color={"Red"}
                size={150}
                arialabel="Loading Spinner"
                datatestid="loader"
            />
        </div >
    )
}

export default Loader
