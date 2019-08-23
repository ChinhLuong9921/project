"use strict";
var nhan_vat_game = /** @class */ (function () {
    function nhan_vat_game(ten_nhan_vat, slogan, mau) {
        this.ten_nhan_vat = ten_nhan_vat;
        this.slogan = slogan;
        this.mau = mau;
    }
    nhan_vat_game.prototype.hien_thi_ten = function () {
        return "Nhan vat: " + this.ten_nhan_vat + ", slogan: " + this.slogan + ", mau: " + this.mau;
    };
    return nhan_vat_game;
}());
var nhan_vat_1 = new nhan_vat_game('irelia', 'y chi la luoi kiem', 729.6);
console.log(nhan_vat_1.hien_thi_ten());
//# sourceMappingURL=class.js.map