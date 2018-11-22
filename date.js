"use strict";
//classe date
Object.defineProperty(exports, "__esModule", { value: true });
var date = /** @class */ (function () {
    //constructeurs
    function date(year, month, day) {
        this._year = year;
        this._month = month;
        this._day = day;
    }
    Object.defineProperty(date.prototype, "year", {
        //getters
        get: function () {
            return this._year;
        },
        //setters
        set: function (year) {
            if (year < 2999) {
                this._year = year;
            }
            else {
                console.log("Error: inexistant year! Retry");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(date.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (month) {
            if (month > 12 || month < 1) {
                console.log("Error: inexistant month! Retry");
            }
            else {
                this._month = month;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(date.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (day) {
            if (day < 31) {
                this._day = day;
            }
            else {
                console.log("Error: inexistant day! Retry");
            }
        },
        enumerable: true,
        configurable: true
    });
    //méthodes    
    date.prototype.toString = function (year, month, day) {
        var dateString = year + "-" + month + "-" + day;
        return dateString;
    };
    date.prototype.Create = function (year, month, day) {
        if (year === void 0) { year = 2019; }
        if (month === void 0) { month = 8; }
        if (day === void 0) { day = 8; }
        this._year = year;
        this._month = month;
        this._day = day;
        var dateDefaut = this.toString(year, month, day);
        return dateDefaut;
    };
    date.prototype.setDate = function (year, month, day) {
        var NewDate = this.Create(year, month, day);
        return NewDate;
    };
    date.prototype.yesterday = function (day) {
        if (day === void 0) { day = this._day; }
        day = day - 1;
        var yestDate = this.toString(this._year, this._month, day);
        return yestDate;
    };
    date.prototype.tomorrow = function (day) {
        if (day === void 0) { day = this._day; }
        day = day + 1;
        var tomoDate = this.toString(this._year, this._month, day);
        return tomoDate;
    };
    date.prototype.addDay = function (day) {
        if (day === void 0) { day = 1; }
        this._day = this._day + day;
        var aDay = this.toString(this._year, this._month, this._year);
        return aDay;
    };
    date.prototype.subDay = function (day) {
        if (day === void 0) { day = 1; }
        this._day = this._day - day;
        var sDay = this.toString(this._year, this._month, this._year);
        return sDay;
    };
    date.prototype.addMonth = function (month) {
        if (month === void 0) { month = 1; }
        this._month = this._month + month;
        var aMonth = this.toString(this._year, this._month, this._year);
        return aMonth;
    };
    date.prototype.subMonth = function (month) {
        if (month === void 0) { month = 1; }
        this._month = this._month - month;
        var sMonth = this.toString(this._year, this._month, this._year);
        return sMonth;
    };
    date.prototype.addYear = function (year) {
        if (year === void 0) { year = 1; }
        this._year = this._year + year;
        var aYear = this.toString(this._year, this._month, this._year);
        return aYear;
    };
    date.prototype.subYear = function (year) {
        if (year === void 0) { year = 1; }
        this._year = this._year - year;
        var sYear = this.toString(this._year, this._month, this._year);
        return sYear;
    };
    return date;
}());
exports.default = date;
