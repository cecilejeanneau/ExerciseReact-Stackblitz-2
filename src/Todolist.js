// Vous n'avez rien à faire dans ce composant ...

import React, { useContext } from 'react';
import TodoItem from './TodoItem';

import appContext from './appContext';

export default function Todolist() {
  const { globalState, dispatch } = useContext(appContext);

  return (
    <div>
      State Global = {globalState.texte}
      <button onClick={() => dispatch({ type: 'DELETE_VALUE' })}>
        ❌ Effacer le state global
      </button>
      <button onClick={() => dispatch({ type: 'UPPER' })}>⬆ Majuscule</button>
      <TodoItem />
    </div>
  );
}
