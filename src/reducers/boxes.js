
const boxReducer = (state = [
    { id: "0", arr: [{ id: "0-0", value: "X" }, { id: "0-1", value: "" }, { id: "0-2", value: "" }] },
    { id: "1", arr: [{ id: "1-0", value: "O" }, { id: "1-1", value: "O" }, { id: "1-2", value: "" }] },
    { id: "2", arr: [{ id: "2-0", value: "" }, { id: "2-1", value: "" }, { id: "2-2", value: "" }] }
], action) => {
    switch (action.type) {
        case "CHANGE":
            state[action.data.row].arr[action.data.col].value = action.data.value;
            return state;
        default:
            return state;
    }
}
export default boxReducer;