import React from 'react';
import ReactDOM from 'react-dom';
import VacancySign from './VacancySign';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VacancySign />, div);
  ReactDOM.unmountComponentAtNode(div);
});
