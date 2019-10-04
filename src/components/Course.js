import React from 'react'

const Course = ({ kurssi }) => {
    return (
        <>
            <Header nimi={kurssi.name} />
            <Content course={kurssi} />
            <Total parts={kurssi.parts} />
        </>
    )
}

const Header = ({ nimi }) => {
    return (
        <h1>{nimi}</h1>
    )
}

const Content = ({ course }) => {
    const t = course.parts
    return (
        t.map(osa =>
            <Part key={osa.id} nimi={osa.name} harjoituksia={osa.exercises} />
        )
    )
}

const Part = ({ nimi, harjoituksia }) => {
    return (
        <p>
            {nimi} {harjoituksia}
        </p>
    )
}

const Total = ({ parts }) => {
    const t = parts.map((olio) => olio.exercises)

    const total = t.reduce((s, p) => {
        return (s + p)
    })

    return (
        <p>Number of exercises {total}</p>
    )
}



export default Course