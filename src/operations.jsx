
const operatsArr = ['*', '/', '+', '-']

const actions = {
    handleClear() {
        // console.clear();
        return "";
    },

    addtoInputNum(state, param) {
        if ((state[state.length - 1] === '-' && param === '-') || (operatsArr.includes(state[state.length - 1]) && operatsArr.includes(param))) {
            return state;
        } else {
            return state + param;
        }
    },

    addtoInputOpr(state, param) {
        if (state === '' || (operatsArr.includes(state[state.length - 1]) && operatsArr.includes(param))) {
            return state;
        } else {
            return state + param;
        }
    },

    handleEqual(state) {
        if (state === "") {
            return state;
        } else {
            // console.log(eval(state));
            return eval(state);
        }
    },

    handleRoot(state) {
        if (state === "") {
            return state;
        } else {
            return Math.sqrt(state);
        }
    },

    handleSquare(state) {
        if (state === "") {
            return state;
        } else {
            return Math.pow(state, 2);
        }
    },

    handleCube(state) {
        if (state === "") {
            return state;
        } else {
            return Math.pow(state, 3);
        }
    }

};

export default function reducer(state, action) {
    // console.log(state, action);
    let type = action.type;
    let param = action.param;
    return actions[type](state, param);
}