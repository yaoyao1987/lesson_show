import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from  'react-router-dom';

const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] }
];

function find(id) {
  return PEEPS.find(p => p.id === parseInt(id));
}

function RecursiveExample() {
  return (
    <Router>
      <Person match={{ params: { id: 0 }, url: "" }} />
    </Router>
  );
}

function Person({ match }) {
  // console.log(match.params.id);
  let person = find(match.params.id);
  // console.log(person);
  return (
    <div>
      <h3>
        {person.name}
        ’s Friends
      </h3>
      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${match.url}/${id}`} >{find(id).name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person} />
    </div>
  );
}

ReactDOM.render(<RecursiveExample />, document.getElementById('root'));