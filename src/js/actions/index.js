// src/js/actions/index.js
import { ADD_ARTICLE } from "../constants/action-types"

function actionCreator(payload){
    return { type: 'ADD_ARTICLE', payload}
}

export default actionCreator