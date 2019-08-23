"use strict";
var state;
(function (state) {
    state[state["create"] = 10] = "create";
    state[state["processing"] = 11] = "processing";
    state[state["finish"] = 12] = "finish";
})(state || (state = {}));
var cong_viec = /** @class */ (function () {
    function cong_viec(id, ten, trangthai) {
        this.id = id,
            this.ten = ten,
            this.trangthai = trangthai;
    }
    cong_viec.prototype.display = function () {
        return "ID: " + this.id + ", ten: " + this.ten + ", trang thai: " + this.trangthai;
    };
    cong_viec.id = 1;
    cong_viec.ten = 'hoc lap trinh';
    return cong_viec;
}());
var cv1 = new cong_viec(1, 'hoc TypeScript', state.finish);
console.log(cv1.display());
// console.log(cong_viec.ten);
// console.log(cong_viec.id); 
//# sourceMappingURL=class3.js.map