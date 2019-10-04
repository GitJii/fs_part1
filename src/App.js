import React from 'react'
import Course from './components/Course'


const App = ({courses}) => {

    return (
        courses.map((kurssi) =>
            <Course key={kurssi.id} kurssi={courses[kurssi.id]} />
        )
    )
}

export default App