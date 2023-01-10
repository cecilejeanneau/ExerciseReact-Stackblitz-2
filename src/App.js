import React, { useReducer } from 'react';
import Todolist from './Todolist';
import './style.css';

import AppContext from './appContext';
// 2. importez ici le "appReducer"
import appReducer from './appReducer';

export default function App() {
  const MY_VALUE = 'Cristaline';

  // 3. Définissez un reducer avec le hook "useReducer" pour obtenir la valeur et la fonction dispatch
  const [globalState, dispatch] = useReducer(appReducer, { texte: MY_VALUE });

  // 4. Modifiez ici la valeur du Provider pour lui fournir la valeur de votre reducer ET la fonction de dispatch
  return (
    <AppContext.Provider value={{ globalState, dispatch }}>
      <div>
        <p>
          <strong>
            Hola malheureux! Doucement avec la {globalState.texte}! Elle est si
            bonne!
          </strong>
        </p>
        <Todolist />
      </div>
    </AppContext.Provider>
  );
}
