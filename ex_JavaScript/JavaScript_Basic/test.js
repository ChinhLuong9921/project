const today = new Date();
const cmas = new Date(today.getFullYear(), 11, 25);
const oneDay = 1000 * 60 * 60 * 24;

if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}

console.log(`${Math.ceil((cmas.getTime() - today.getTime()) / (oneDay))} days left until Christmas!`);
