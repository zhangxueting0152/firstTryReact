import React from 'react';
import ReactDOM from 'react-dom';
import LowTodo from './components/LowTodo';

export default class Index extends React.Component {
    constructor(){
        super();
    }
    render (){
        return (
            <LowTodo/>
        );
    }
}

ReactDOM.render(<Index/>,document.getElementById('example'))