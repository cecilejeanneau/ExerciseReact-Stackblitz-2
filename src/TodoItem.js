import React, { useContext } from 'react';

import AppContext from './appContext';

export default function TodoItem() {
  // 5. Mettez à jour la constante pour récupérer la valeur du state et la fonction dispatch
  const { globalState, dispatch } = useContext(AppContext);

  // 7. Définissez la fonction pour le "onInput", et déclanchez à l'aide du "dispatch" l'action "UPDATE_VALUE" avec la valeur du champs input
  function typeText(event) {
    const texte = event.target.value;
    dispatch(updateValue(texte));
  }

  return (
    <div>
      <p>MY_VALUE = {globalState.texte}</p>
      {/* 6. Ajoutez ici un "onInput" pour récupérer la valeur modifiée du champs */}
      <input type="text" onInput={typeText} value={globalState.texte} />
    </div>
  );
}

// Action creator
function updateValue(newValue) {
  return { type: 'UPDATE_VALUE', payload: newValue };
}
