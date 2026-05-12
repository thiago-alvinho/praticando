module.exports = (params) => {
    for (let param in params) {
        if(/Id|id/.test(param)) {
            params[param] = Number(params[param]);
        }
    }

    return params;
}