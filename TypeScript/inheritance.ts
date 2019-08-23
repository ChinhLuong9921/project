class Tuong {
    name: string;
    description: string;
    private skill: string[];
    constructor (name: string, description: string, skill: string[]) {
        this.name = name;
        this.description = description;
        this.skill = skill;
    }
    display() {
        let show_skill: string = '';
        for (let i = 0; i < this.skill.length; i++) {
            show_skill += this.skill[i];
            show_skill += ' | ';
        }
        return `Name: ${this.name},
        Description: ${this.description},
        Skill: ${show_skill}`;
    }
}

class Don_sat_thu extends Tuong{
    don_sat_thu: string;
    constructor (name: string, description: string, skill: string[], don_sat_thu: string) {
        super (name, description, skill);
        this.don_sat_thu = don_sat_thu;
    }
    display2() {
        return `Don sat thu: ${this.don_sat_thu}`;
    }
}
let Quinn = new Tuong('Quinn', 'Doi canh Medacia', ['Chim san moi', 'Khong kich', 'Dot kich', 'Thien ung nhan']);
console.log(Quinn.display());
let Anivia = new Don_sat_thu('Anivia', 'Phuong hoang bang', ['Te cong', 'Tuong bang', 'Dan bang'], 'Bao tuyet');
console.log(Anivia.display());
console.log(Anivia.display2());
// console.log(Quinn.skill);
// console.log(Anivia.skill);