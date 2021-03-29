export const change = (data) => {
    return {
        type: "CHANGE",
        payload: data
    };
};

export const player_change = (data) => {
    return {
        type: "PLAYERCHANGE",
        payload: data
    };
};