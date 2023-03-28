// As declarações de importação e exportação são usadas para 
// disponibilizar valores definidos em um módulo de código 
// JavaScript em outro módulo.

// Um módulo é um arquivo de código JavaScript com seu próprio 
// namespace global, completamente independente de todos os 
// outros módulos. A única maneira que um valor (como função 
// ou classe) definido em um módulo pode ser usado em outro 
// módulo é se ele for exportado e outro arquivo de código 
// importá-lo.

// As diretivas de importação são usadas para importar um ou 
// mais valores de outro arquivo de código JavaScript e dar a 
// eles nomes dentro do módulo atual. Elas vêm em algumas 
// formas diferentes e, para visualizar melhor, considere os 
// seguintes exemplos:

import Circle from './geometry/circle.js';

import { PI, TAU } from './geometry/constants.js';

import { magnitude as hypotenuse } from './vectors/utils.js';

// Os valores dentro de um módulo JavaScript são privados e não 
// podem ser importados para outros módulos, a menos que tenham 
// sido exportados explicitamente.

// A diretiva export faz isso: declara que um ou mais valores 
// definidos no módulo atual são exportados e, portanto, 
// disponíveis para importação por outros módulos. A diretiva 
// de exportação tem diferentes maneiras de utilização.

// A palavra-chave export às vezes é usada como um modificador 
// em outras declarações, resultando em um tipo de declaração 
// composta que define uma constante, variável, função ou 
// classe e a exporta ao mesmo tempo. E, quando um módulo 
// exporta apenas um único valor, isso normalmente é feito com 
// o padrão de exportação de formulário especial:

export const TAU = 2 * Math.PI;

export function magnitude(x,y) { 
    return Math.sqrt(x*x + y*y); 
}

export default class Circle { 
    /* codigo da classe */ 
}