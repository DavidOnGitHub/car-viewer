import * as Type from './Type';

export const selectMake = (id) => {
    return {
        type: Type.SELECT_MAKE,
        id
    };
};

export const selectModel = (id) => {
    return {
        type: Type.SELECT_MODEL,
        id
    };
};
