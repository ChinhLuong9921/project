"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tuong = /** @class */ (function () {
    function Tuong(name, description, skill) {
        this.name = name;
        this.description = description;
        this.skill = skill;
    }
    Tuong.prototype.display = function () {
        var show_skill = '';
        for (var i = 0; i < this.skill.length; i++) {
            show_skill += this.skill[i];
            show_skill += ' | ';
        }
        return "Name: " + this.name + ",\n        Description: " + this.description + ",\n        Skill: " + show_skill;
    };
    return Tuong;
}());
var Don_sat_thu = /** @class */ (function (_super) {
    __extends(Don_sat_thu, _super);
    function Don_sat_thu(name, description, skill, don_sat_thu) {
        var _this = _super.call(this, name, description, skill) || this;
        _this.don_sat_thu = don_sat_thu;
        return _this;
    }
    Don_sat_thu.prototype.display2 = function () {
        return "Don sat thu: " + this.don_sat_thu;
    };
    return Don_sat_thu;
}(Tuong));
var Quinn = new Tuong('Quinn', 'Doi canh Medacia', ['Chim san moi', 'Khong kich', 'Dot kich', 'Thien ung nhan']);
console.log(Quinn.display());
var Anivia = new Don_sat_thu('Anivia', 'Phuong hoang bang', ['Te cong', 'Tuong bang', 'Dan bang'], 'Bao tuyet');
console.log(Anivia.display());
console.log(Anivia.display2());
// console.log(Quinn.skill);
// console.log(Anivia.skill);
//# sourceMappingURL=inheritance.js.map