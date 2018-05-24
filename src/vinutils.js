// module vinutils
// exports a bunch functions and values

module.exports["sleep"] = function (duration = 1000) {
    let ms1 = Date.now();
    while (true) {
        let ms2 = Date.now();
        if ((ms2 - ms1) > duration) break;
    }
};

module.exports.execAfterDelay = function (callback, duration = 1000) {
    if (!callback || typeof callback != "function") {
        throw "callback was not supplied or not a function!";
    }
    if (typeof duration != "number") {
        throw "duration must be a number"
    }
    module.exports.sleep(duration);
    callback();
};
