const playerReducer = (state = "X", action) => {
    switch (action.type) {
        case "PLAYERCHANGE":
            state = (state === "X") ? "O" : "X";
            return state;
        default:
            return state;
    }
}
export default playerReducer;