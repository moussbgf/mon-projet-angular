import { Subject } from "rxjs";


interface AppareilObject {
    id: string;
    name: string;
    status: string;
}
export class AppareilService {

    // propriété personalisée, et comunication avec autre component
    // appareilOne='machine à laver';
    // appareilTwo='TV';
    // appareilThree='Ordi';

    // possible de créer une interface de appareils pour remplacer any[]
    appareilSubject = new Subject<any[]>();

    private appareils = [
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

    emitAppareilSubect() {
        this.appareilSubject.next(this.appareils.slice());
    }


    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        this.emitAppareilSubect();
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.emitAppareilSubect();
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
        this.emitAppareilSubect();
    }

    switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';
        this.emitAppareilSubect();
    }

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (s) => {
                return s.id === id;
            }
        );
        return appareil;
    }

    addAppareil(name: string, status: string) {
        const appareilObject = {
            id: 0,
            name: '',
            status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
        this.appareils.push(appareilObject);
        this.emitAppareilSubect();
    }
}