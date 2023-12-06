export const getCondition = (condition) =>
    condition.split("-").length === 3
        ? condition.split("-")[1]
        : condition.split("-").length === 2
        ? condition.split("-")[0]
        : condition;
