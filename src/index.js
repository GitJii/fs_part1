import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {

    const courses = [{
        id: 0,
        name: 'kurssinnimi',
        parts: [
            {
                id: 0,
                name: 'osa1',
                exercises: 12
            },
            {
                id: 1,
                name: 'osa2',
                exercises: 23
            },
            {
                id: 2,
                name: 'osa3',
                exercises: 34
            },
            {
                id: 3,
                name: 'osa4',
                exercises: 45
            }
        ]
    },
    {
        id: 1,
        name: 'kurssinnimi2',
        parts: [
            {
                id: 4,
                name: 'osa5',
                exercises: 39
            },
            {
                id: 5,
                name: 'osa6',
                exercises: 3883
            }
        ]
    }
    ]

    return (
        courses.map((kurssi) =>
            <div>
                <Course kurssi={courses[kurssi.id]} />
            </div>
        )
    )
}

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
        <div>
            <p>
                {nimi} {harjoituksia}
            </p>
        </div>
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

ReactDOM.render(<App />, document.getElementById('root'));
