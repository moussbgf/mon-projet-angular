export class AppareilService {

    // propriété personalisée, et comunication avec autre component
    // appareilOne='machine à laver';
    // appareilTwo='TV';
    // appareilThree='Ordi';


    appareils = [
        {
            id: 1,
            name: 'Maniche à laver',
            status: 'éteint'
        },
        {
            id: 2,
            name: 'ordinateur',
            status: 'allumé'
        },
        {
            id: 3,
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

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
          (s) => {
            return s.id === id;
          }
        );
        return appareil;
    }
}