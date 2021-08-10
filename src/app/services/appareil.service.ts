export class AppareilService {

    // propriété personalisée, et comunication avec autre component
    // appareilOne='machine à laver';
    // appareilTwo='TV';
    // appareilThree='Ordi';


    appareils = [
        {
            name: 'Maniche à laver',
            status: 'éteint'
        },
        {
            name: 'ordinateur',
            status: 'allumé'
        },
        {
            name: 'TV',
            status: 'éteint'
        }
    ];


    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
    }

    switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';
    }
}