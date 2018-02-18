export function selectBook(book) {
    //selectbook is an actiocreator, need to return action, an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
};