const os = require('os')

// a cada 1 segundo esse codigo será rodado até que eu mande parar
setInterval(() => {
    const { arch, platform, totalmem, freemem } = os

    const tRam = totalmem() / 1024 / 1024
    const fRam = freemem() / 1024 / 1024
    const usage = (fRam / tRam) * 100

    const status = {
        OS: platform(),
        Arch: arch(),
        // no código abaixo, ele vai retornar string dizendo que é um megabyte 'MB'
        TotalRAM: `${parseInt(tRam)} MB`,
        FreeRAM: `${parseInt(fRam)} MB`,
        Usage: `${usage.toFixed(2)} %`
    }
    // a cada atualização, ele limpa o que já foi exibido
    console.clear()
    //ele cria uma tabela estilo excel
console.table(status);
// exportando o objeto 'status'
exports.status = status
}, 1000 )
