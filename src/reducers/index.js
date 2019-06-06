import characters_json from '../data/characters.json';
import { ADD_CHARACTER } from '../actions';
function characters(state = characters_json, action){
    switch(action.type){
        case ADD_CHARACTER:
            let characters = state.filter(it => it.id !== action.id);
            return characters;
        default:
            return state;
    }
}

function heros(state = characters_json, action){
    switch(action.type){
        case ADD_CHARACTER:
            let characters = state.filter(i => i.id !== action.id);
            return characters;
        default:
            return {};
    }
}

export default characters;