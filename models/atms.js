exports.calculateOrder = (data) =>
    data.sort(s).map(m).filter(f);

const s = (a, b) => {
    return a.region !== b.region
        ? a.region - b.region
        : order[a.requestType] - order[b.requestType];
};

const m = (e) => {
    return { region: e.region, atmId: e.atmId };
};

const f = (v, i, a) =>
    a.findIndex((e) => e.region === v.region && e.atmId === v.atmId) === i;

const order = {
    FAILURE_RESTART: 0,
    PRIORITY: 1,
    SIGNAL_LOW: 2,
    STANDARD: 3,
};