function comments(state = [], action) {

  switch(action.type) {
    case 'INCREMENT_LINKS' :
      console.log('increment');

    default:
      return state;
  }
}

export default comments;
