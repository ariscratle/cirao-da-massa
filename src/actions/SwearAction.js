export const Swear = () => {
    var swear = {
        pre: [
            'Protoliberalzinho',
            'Bandidinho',
            'Chefe de quadrilha',
            'Salafrário',
            'Conspirador',
            'Maior bandido',
            'Golpista',
            'Jumento de carga',
            'Projetinho de',
            'Cadela no cio',
            'Playboy',
            'Na sua vaidade de',
            'Capitãozinho do mato'
        ],
        mid: [
            'oportunista',
            'safado',
            'liberalóide',
            'protofascistinha',
            'frouxo',
            'filho da puta',
            'mentiroso',
            'abirobado',
            'farsante',
            'abestado',
            'chefe de milícia',
            'bobão',
            'selvagem',
            'quadrilheiro',
            'boçal',
            'despreparado',
            'fisiológico',
            'delinquente juvenil',
            'infeliz',
            'vil e pulsânime',
            'amalucado',
            'imbecil',
            'picareta',
            'apartidário',
            'fuxiqueiro',
            'idiota',
            'covarde',
            'fascistóide',
            'cheirador de cocaína',
            'marginal',
            'canalha'
        ],
        pos: [
            'de merda',
            'dos grandes',
            'dos infernos',
            'desgraçado',
            'eleitoreiro',
            'cheio de areia no cu',
            'do Romero Jucá',
            'do capital'
        ],
    }  

    var name = "";
    name += swear.pre[Math.floor(Math.random() * swear.pre.length)] + ' ';
    name += swear.mid[Math.floor(Math.random() * swear.mid.length)] + ' ';
    name += swear.pos[Math.floor(Math.random() * swear.pos.length)];

    return name;
}