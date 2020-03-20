
export const percentFailed = (arr, key, comp) => {
    const failed = arr.reduce((total, item) => {
        return total + (item[key] === comp ? 1 : 0);
    }, 0);

    const percentFailed = (failed / arr.length) * 100;

    return percentFailed;
};
