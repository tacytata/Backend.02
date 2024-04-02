//lendo arquivo usando fs
    const { errorMonitor } = require('events');
const fs=require('fs');

    // fs.readFile('./dados.csv',(error,data)=>{
    //     if(erro){
    //         console.log(erro);
    //     }else{
    //         console.log(data);
    //     }
    // })

    //testar o método assíncrono

    let dados='';
    if(fs.existsSync('dados.csv')){
        dados=fs.readFileSync('dados.csv');
        console.log(dados.toString());
    }else{
        console.log("Arquivo não encontrado")
    }
        console.log("Segunda operação");