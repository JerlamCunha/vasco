// Função para capturar valores e interpretar a análise do solo
function interpretar() {
    // Capturar valores dos inputs
    let ph = parseFloat(document.querySelector(".ph").value);
    let p = parseFloat(document.querySelector(".p").value);
    let k = parseFloat(document.querySelector(".k").value);
    let ca = parseFloat(document.querySelector(".ca").value);
    let mg = parseFloat(document.querySelector(".mg").value);
    let al = parseFloat(document.querySelector(".al").value);
    let s = parseFloat(document.querySelector(".s").value);
    let mo = parseFloat(document.querySelector(".mo").value);
    let boro = parseFloat(document.querySelector(".boro").value);
    let fe = parseFloat(document.querySelector(".fe").value);
    let cobre = parseFloat(document.querySelector(".cobre").value);
    let mn = parseFloat(document.querySelector(".mn").value);
    let zn = parseFloat(document.querySelector(".zn").value);
    
    // Variável para armazenar os resultados
    let resultado = {};

    // Interpretação do pH
    if (ph < 5.5) {
        resultado.ph = "pH ácido - Correção com calcário recomendada.";
    } else if (ph >= 5.5 && ph <= 6.5) {
        resultado.ph = "pH adequado para a maioria das culturas.";
    } else {
        resultado.ph = "pH alcalino - Pode ser necessário ajuste.";
    }

    // Interpretação do Fósforo (P)
    if (p < 10) {
        resultado.p = "Baixo nível de P - Recomenda-se adubação fosfatada.";
    } else if (p >= 10 && p <= 30) {
        resultado.p = "Nível adequado de P.";
    } else {
        resultado.p = "Alto nível de P - Reduzir a adubação fosfatada.";
    }

    // Interpretação do Potássio (K)
    if (k < 60) {
        resultado.k = "Baixo nível de K - Necessário adubação potássica.";
    } else if (k >= 60 && k <= 120) {
        resultado.k = "Nível adequado de K.";
    } else {
        resultado.k = "Alto nível de K - Monitorar aplicações.";
    }

    // Demais interpretações (exemplo para Cálcio e Magnésio)
    resultado.ca = ca < 2 ? "Baixo Ca - Aplicação de calcário recomendada." : "Ca adequado.";
    resultado.mg = mg < 0.5 ? "Baixo Mg - Aplicação de calcário dolomítico recomendada." : "Mg adequado.";
    resultado.al = al > 0.5 ? "Alto nível de Al - Pode causar toxidez, corrigir acidez." : "Al dentro dos limites aceitáveis.";
    resultado.s = s < 10 ? "Baixo S - Aplicação de enxofre recomendada." : "S adequado.";
    resultado.mo = mo < 30 ? "Baixa MO - Pode ser necessário manejo para aumentar matéria orgânica." : "Nível adequado de MO.";

    // Interpretar micronutrientes (Boro, Ferro, Cobre, Manganês, Zinco)
    resultado.boro = boro < 0.5 ? "Baixo Boro - Aplicação de Boro recomendada." : "Boro adequado.";
    resultado.fe = fe < 30 ? "Baixo Ferro - Aplicação de fertilizantes com Fe pode ser necessária." : "Ferro adequado.";
    resultado.cobre = cobre < 0.5 ? "Baixo Cobre - Pode ser necessário suplemento de Cu." : "Cobre adequado.";
    resultado.mn = mn < 5 ? "Baixo Manganês - Monitorar necessidade de aplicação." : "Manganês adequado.";
    resultado.zn = zn < 1 ? "Baixo Zinco - Recomenda-se adubação com Zn." : "Zinco adequado.";

    // Exibir os resultados no modal
    document.querySelector(".res-ph").innerText = resultado.ph;
    document.querySelector(".res-p").innerText = resultado.p;
    document.querySelector(".res-k").innerText = resultado.k;
    document.querySelector(".res-ca").innerText = resultado.ca;
    document.querySelector(".res-mg").innerText = resultado.mg;
    document.querySelector(".res-al").innerText = resultado.al;
    document.querySelector(".res-s").innerText = resultado.s;
    document.querySelector(".res-mo").innerText = resultado.mo;
    document.querySelector(".res-boro").innerText = resultado.boro;
    document.querySelector(".res-fe").innerText = resultado.fe;
    document.querySelector(".res-cobre").innerText = resultado.cobre;
    document.querySelector(".res-mn").innerText = resultado.mn;
    document.querySelector(".res-zn").innerText = resultado.zn;

    // Abrir o modal
    abrirModal();
}

// Função para exibir o modal
function abrirModal() {
    let modal = document.getElementById("resultadoModal");
    modal.style.display = "block";
}

// Fechar modal ao clicar no botão de fechar
document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("resultadoModal").style.display = "none";
});

// Fechar modal ao clicar fora dele
window.onclick = function (event) {
    let modal = document.getElementById("resultadoModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

