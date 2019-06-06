export const ADD_CHARACTER = 'ADD_CHARACTER';

export function addCharacterById(id){
    const obj = {
        type : ADD_CHARACTER,
        id
    };
    return obj;
}