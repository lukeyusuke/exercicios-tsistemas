/* 
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 
*/

const faturamentoDistribuidora = () => {
    const faturamento = {
        sp: 67836.43,
        rj: 36678.66,
        mg: 29229.88,
        es: 27165.48,
        outros: 19849.53,
    }
    
    valorTotalMensal = () => {
        const valor = (faturamento.sp + faturamento.rj + faturamento.mg + faturamento.es + faturamento.outros);
    
        percentual(valor);
    }
    
    const percentual = (valor) => {
        sp = (faturamento.sp / valor) * 100;
        rj = (faturamento.rj / valor) * 100;
        mg = (faturamento.mg / valor) * 100;
        es = (faturamento.es / valor) * 100;
        outros = (faturamento.outros / valor) * 100;
    
        console.log(`SP: ${sp.toFixed(1)}%`);
        console.log(`RJ: ${rj.toFixed(1)}%`);
        console.log(`MG: ${mg.toFixed(1)}%`);
        console.log(`ES: ${es.toFixed(1)}%`);
        console.log(`Outros: ${outros.toFixed(1)}%`);
    
        console.log(`Valor Total: ${formataNumero(valor)}`);
    }
    
    formataNumero = (valor) => {
        const resul = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return resul;
    }

    valorTotalMensal();
}

faturamentoDistribuidora();