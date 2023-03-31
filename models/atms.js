exports.calculateOrder = (data) =>
    data.sort(compareRequest).map(mapRequest).filter(filterRequest);

const compareRequest = (a, b) => {
    return a.region !== b.region
        ? a.region - b.region
        : order[a.requestType] - order[b.requestType];
};

const mapRequest = (el) => {
    return { region: el.region, atmId: el.atmId };
};

const filterRequest = (val, ind, arr) =>
    arr.findIndex((el) => el.region === val.region && el.atmId === val.atmId) === ind;

const order = {
    FAILURE_RESTART: 0,
    PRIORITY: 1,
    SIGNAL_LOW: 2,
    STANDARD: 3,
};
