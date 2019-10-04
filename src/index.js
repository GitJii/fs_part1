import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

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


ReactDOM.render(
<App courses={courses} />,
document.getElementById('root')
);
