enum state {
    create = 10,
    processing,
    finish
}
class cong_viec {
    static id: number = 1;
    static ten: string = 'hoc lap trinh';
    trangthai: state;
    constructor (id: number, ten: string, trangthai: state) {
        this.id = id,
        this.ten = ten,
        this.trangthai = trangthai
    }
    display() {
        return `ID: ${this.id}, ten: ${this.ten}, trang thai: ${this.trangthai}`;
    }
}
let cv1 = new cong_viec(1, 'hoc TypeScript', state.finish);
console.log(cv1.display());
// console.log(cong_viec.ten);
// console.log(cong_viec.id); 