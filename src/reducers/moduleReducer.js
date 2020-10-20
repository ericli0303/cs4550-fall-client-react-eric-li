const initialState = {
    modules: [
        {
            _id:"123",
            title: "React.js",
            editing: false
        },
        {
            _id:"124",
            title: "Redux.js",
            editing: true
        },
        {
            _id:"125",
            title: "java.js",
            editing: false
        },
        {
            _id:"126",
            title: "Others.js",
            editing: false
        }
    ]
}


const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            return {
                modules: [...state.modules, {
                    _id: (Date.now()) + "",
                    title: "New Module"
                }]
            }
        case "FIND_MODULE_FOR_COURSE":
        case "FIND_MODULE":
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(module => module._id === action.module._id ? action.module : module)
            }
        case "DELETE_MODULE":
            return {
                modules: state.modules.filter(module => module._id !== action.module._id)
            }
        default:
            return state
    }
}

export default moduleReducer
