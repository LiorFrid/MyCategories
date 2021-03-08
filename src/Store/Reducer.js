import Category from '../Models/Category';
import * as actionTypes from './Actions';


const reducer = (state, action) => {

    if (action.type === actionTypes.ADD_NEW_CATEGORY) {
        return {
            ...state,
            categories: [...state.categories, new Category(action.name, false)]
        }
    }
    else if (action.type === actionTypes.CHOOSE_CATEGORY) {
        const localCatgories = state.categories.map((el) => ({ ...el, isChosen: false }));
        const updatedLocalCategories = localCatgories.map((el) => el.id === action.id ? { ...el, isChosen: true } : el);
        const choseCategory = updatedLocalCategories.find(el => el.id === action.id);
        return {
            ...state,
            isCategoryChosen: true,
            theChosenCategory: choseCategory,
            categories: updatedLocalCategories
        }
    }
    else if (action.type === actionTypes.CLEAR_CHOOSE) {
        const updatedLocalCategories = state.categories.map((el) => ({ ...el, isChosen: false }))
        return {
            ...state,
            isCategoryChosen: false,
            theChosenCategory: null,
            categories: updatedLocalCategories
        }
    }
    else if (action.type === actionTypes.DELETE_CATEGORY) {
        const updatedLocalCategories = state.categories.filter(el => el.id !== action.id)
        return {
            ...state,
            isCategoryChosen: false,
            theChosenCategory: null,
            categories: updatedLocalCategories
        }
    }

    else if (action.type === actionTypes.UPDATE_CATEGORY) {
        const updatedLocalCategories = state.categories.map(el => el.id === action.id ? { ...el, name: action.name, isChosen: false } : el)
        return {
            ...state,
            isCategoryChosen: false,
            theChosenCategory: null,
            categories: updatedLocalCategories
        }
    }
    return state;
}

export default reducer;