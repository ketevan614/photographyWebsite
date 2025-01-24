const initialState = {
    urban: [],
    portrait: [],
    nature: [],
};

const imagesReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case "SET_IMAGES":
            return {
                ...state,
                [action.payload.category]: action.payload.images, 
            };
        default:
            return state;
    }
};

export default imagesReducer;