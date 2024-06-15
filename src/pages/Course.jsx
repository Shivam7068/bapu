import React from 'react'
import Pagetitle from '../component/common_comp/Pagetitle'
import About_Course from '../component/course/About_Course'
import Facility from '../component/course/Facility'
import Eligiblity from '../component/course/Eligiblity'
const Course = () => {
    return (
        <div>
            <Pagetitle title="BAMS COURSE DETAIL'S" />
            <About_Course />
            <Facility />
            <Eligiblity />
        </div>
    )
}

export default Course
