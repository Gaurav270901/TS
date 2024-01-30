var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getDefaultConfiguration() {
    return {
        apiKey: "defaultApiKey",
        endpoint: "https://api.example.com",
        timeout: 5000,
    };
}
function updateConfiguration(currentConfig, update) {
    return __assign(__assign({}, currentConfig), update);
}
var initialConfig = getDefaultConfiguration();
var updatedConfig = updateConfiguration(initialConfig, {
    apiKey: "ksdfhkhjsdf", endpoint: "skjfdhkjshdf", timeout: 10000,
});
console.log(updatedConfig);
console.log(initialConfig);
