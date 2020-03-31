
/**
 * Calculates the percentage of failed requests
 *
 * @param array arr
 * @param string key
 * @param string comp
 * @return number percentFailed
 */
export const percentFailed = (arr, key, comp) => {
    const failed = arr.reduce((total, item) => {
        return total + (item[key] === comp ? 1 : 0);
    }, 0);

    const percentFailed = (failed / arr.length) * 100;

    return percentFailed;
};


/**
 * Filters results
 *
 * @param array results
 * @param string type
 * @return array results
 */
export const resultsFilter = (results, type) => {
    return results.filter(result => {
        switch (type) {
            case "resolved":
                return result.status !== "checking";

            case "success":
                return result.status === "online";

            case "failure":
                return result.status === "offline";

            default:
                return true;
        }
    });
}
