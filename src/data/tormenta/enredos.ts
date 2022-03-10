import { TipoCarta,enredo } from "../../modelos/tormenta";

const enredos:enredo[] = [
    {
        titulo:"Trabalho de Aventureiro",
        descricao:`O grupo está numa aldeia ou cidade quando uma figura conhecida (um velhinho, uma taverneira, um clérigo...) anuncia que precisa de aventureiros para resolver um problema local. A ameaça está restrita a região e se encontra perto dali, mas a população está indefesa contra ela. Os aventureiros devem descobrir a origem ou fraqueza dos inimigos, então combatê-los. Uma vez que vençam o perigo, os personagens recebem uma recompensa. Esta é a estrutura de história mais básica de todas, ideal para grupos iniciantes.`,
        opcoesEnredo:[
            {
                descricao:"O NPC que contrata os heróis e o vilão da história.",
                quantidade:2,
                tiposDisponiveis:[TipoCarta.PERSONAGEM]
            },
            {
                descricao:" Os capangas do vilão.",
                quantidade:2,
                tiposDisponiveis:[TipoCarta.AMEACA]
            },
            {
                descricao:"A localidade pela qual os personagens devem passar para investigar os inimigos ou ter um primeiro embate. Em seguida, a localidade do combate decisivo.",
                quantidade:2,
                tiposDisponiveis:[TipoCarta.LOCAL]
            },
            {
                descricao:" A recompensa do trabalho ou algo que os personagens podem encontrar na primeira localidade e usar para enfrentar o vilão.",
                quantidade:1,
                tiposDisponiveis:[TipoCarta.OBJETO]
            }
        ]
    },
    {
        titulo:"Jornada",
        descricao:"Os aventureiros precisam chegar até um lugar distante. Assim que se afastam do ponto de origem, entram num terreno exótico, inexplorado, onde maravilhas e horrores aguardam a cada passo. Esta aventura é uma série de encontros ligados entre si apenas pela presença dos heróis. Eles podem encontrar monstros, vilões ou mesmo aliados inesperados. Eles não podem ficar parados muito tempo num mesmo lugar, seja por pressa ou pela atração do destino em si. Cada lugar visitado é muito marcante e diferente. A parte mais importante não é o destino, mas o caminho — uma vez que cheguem lá, os aventureiros cumprem sua missão, ou pelo menos esta fase. A jornada deve transformá-los ou deixar marcas em cada um deles.",
        opcoesEnredo:[
            {
                descricao:"O NPC que contrata os heróis e o vilão da história.",
                quantidade:1,
                tiposDisponiveis:[TipoCarta.PERSONAGEM,TipoCarta.EVENTO,TipoCarta.OBJETO]
            },
            {
                descricao:"As localidades pelas quais os personagens devem passar.",
                quantidade:3,
                tiposDisponiveis:[TipoCarta.LOCAL]
            },
            {
                descricao:"Um encontro para cada local.",
                quantidade:3,
                tiposDisponiveis:[TipoCarta.EVENTO,TipoCarta.AMEACA,TipoCarta.PERSONAGEM]
            }
        ]
    }
]

export default enredos;