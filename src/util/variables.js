import { getRandomInt } from './util';

const HABILIDADES = [{ 
    habilidade: "Java",
    nivel: getRandomInt(1, 5),
    qty: 5,
    id: 1
},{
    habilidade: "Javascript",
    nivel: getRandomInt(1, 5),
    qty: 6,
    id: 2
},{
    habilidade: "SQL",
    nivel: getRandomInt(1, 5),
    qty: 7,
    id: 3
},{
    habilidade: "PHP",
    nivel: getRandomInt(1, 5),
    qty: 4,
    id: 4
},{
    habilidade: "C",
    nivel: getRandomInt(1, 5),
    qty: 7,
    id: 5
},{
    habilidade: "C++",
    nivel: getRandomInt(1, 5),
    qty: 4,
    id: 6
},{
    habilidade: "Python",
    nivel: getRandomInt(1, 5),
    qty: 3,
    id: 7
},{
    habilidade: "C#",
    nivel: getRandomInt(1, 5),
    qty: 2,
    id: 8
},{
    habilidade: ".NET",
    nivel: getRandomInt(1, 5),
    qty: 9,
    id: 9
}]

export default {
    HABILIDADES,
    /* SU_LINKS,
    LOGED_LINKS,
    LOGED_LINKS_MATCH */
}