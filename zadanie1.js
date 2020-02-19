// class Obiekt {
//     construktor() {
//         tab = [Obiekt];
//     }
// }
// add(a) {
//     tab.push(a);
// }

// var tablica = [Obiekt];

// console.log(tablica)
// var nowatablica = tablica.unshift('pierwszy')

// console.log(nowatablica);
// var owoce = ['obiekt', 1111, obiekt];
// console.log(owoce);


class Obiekt {
    constructor() {
        this.tablica = [this];
    }
    add(a) {
        this.tablica.unshift(a);
    }
}

const Obiekt = new Obiekt();


