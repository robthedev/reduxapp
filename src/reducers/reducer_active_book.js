//state arg is the state the reducer is handling
export default function(state = null, action) {
   
   switch(action.type){
       case 'BOOK_SELECTED':
        return action.payload;
   }
    return state;
}