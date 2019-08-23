class nhan_vat_game {
    ten_nhan_vat: string;
    slogan: string;
    mau: number;
    constructor (ten_nhan_vat: string, slogan: string, mau: number) {
        this.ten_nhan_vat = ten_nhan_vat;
        this.slogan = slogan;
        this.mau = mau;
    }
    hien_thi_ten() {
        return `Nhan vat: ${this.ten_nhan_vat}, slogan: ${this.slogan}, mau: ${this.mau}`;
    }
}
let nhan_vat_1 = new nhan_vat_game('irelia', 'y chi la luoi kiem', 729.6);
console.log(nhan_vat_1.hien_thi_ten());