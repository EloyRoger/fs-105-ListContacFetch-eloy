export const initialStore=()=>{//Modificar el objeto con la estructura que viene del fetch
  return{
    contacts: []
  }
}
export default function storeReducer(store, action = {}) {
  switch(action.type){//Modificar el case y lo que hace para modificar lo que hace para agregar la lista de contactos al store
    case 'addContacts':
      const  contacts  = action.payload
      return {
        ...store,
        // todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
        contacts: contacts
      };
    default:
      throw Error('Unknown action.');
  }
}