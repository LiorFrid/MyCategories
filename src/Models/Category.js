export default class Catedory {
    constructor(name, isChosen) {
        this.id = new Date().toISOString();
        this.name = name;
        this.isChosen = isChosen;
    }
}