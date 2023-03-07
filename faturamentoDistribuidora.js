/* 
3 - Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:

- O menor valor de faturamento ocorrido em um dia do mês;
- O maior valor de faturamento ocorrido em um dia do mês;
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
*/

const faturamentoDiario = () => {
    const faturamento = [22174.1664, 24537.6698, 26139.61234, 0.0, 0.0, 26742.6612, 0.0, 42889.2258, 46251.174, 11191.4722, 0.0, 0.0, 3847.4823, 373.7838, 2659.7563, 48924.2448, 18419.2614, 0.0, 0.0, 35240.1826, 43829.1667, 18235.6852, 4355.0662, 13327.1025, 0.0, 0.0, 25681.8318, 1718.1221, 13220.495, 8414.61];

    const filtraArray = () => {
        const novoFaturamento = faturamento.filter(valores => {
            return valores;
        })

        maiorMenorValor(novoFaturamento);
    }

    const maiorMenorValor = (novoFaturamento) => {
        const maiorFaturamento = Math.max(...novoFaturamento);
        const menorFaturamento = Math.min(...novoFaturamento);

        console.log(`Menor faturamento do mês: R$${menorFaturamento}`);
        console.log(`Maior faturamento do mês: R$${maiorFaturamento}`);

        mediaMensal(novoFaturamento);
    }

    const mediaMensal = (novoFaturamento) => {
        let soma = 0;
        for(let i = 0; i <= novoFaturamento.length - 1; i++){
            soma += novoFaturamento[i];
        }

        const media = soma / novoFaturamento.length - 1;
        console.log(`Média mensal: R$${media.toFixed(4)}`);

        qtdDias(media, novoFaturamento);
    }

    const qtdDias = (media, novoFaturamento) => {
        let dias = 0;

        for(let i = 0; i <= novoFaturamento.length - 1; i++){
            if(media < novoFaturamento[i]){
                dias += 1;
            }
        }

        console.log(`Quantidade de dias que o faturamento superou à média mensal: ${dias}`);
    }

    filtraArray();
}

faturamentoDiario();