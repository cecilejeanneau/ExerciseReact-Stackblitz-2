// 1. Créez et exportez-ici un reducer qui va simplement modifier une valeur de type string via une action.type nommée "UPDATE_VALUE"

/*
  {
    texte: 'Cristaline'
  }
*/

/*
Action type =
{
  type: 'UPDATE_VALUE',
  payload: 'Evian'
}
*/

export default function appReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return { ...state, texte: action.payload };

    case 'DELETE_VALUE':
      return { ...state, texte: '' };

    case 'UPPER':
      return { ...state, texte: state.texte.toUpperCase() };

    default:
      return state;
  }
}
