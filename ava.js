const puppeter = require('puppeteer');
const clc = require('cli-color');
const params = process.argv.slice(2);

try {
    (async () => {
        console.log(clc.blueBright("Powered Vinicius, Scrapper AVA DIGITAL"))
        console.log(clc.yellow(`INICIANDO PUPPETEER AGUARDE!\n[EN] -- LAUCHING THE PUPPETEER`))
        const browser = await puppeter.launch({
            headless: true,
            executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
        });
        const page = await browser.newPage()
        console.log(clc.blue("ABRINDO LOGIN....\n[EN] - OPENING LOGIN..."))
        await page.goto("https://ava.sae.digital/login")
        .then(async () => {
            await page.type("#usuario", params[0])
            await page.type("#senha", params[1])
            await page.click("#btnEntrar")
            console.log(clc.green("LOGIN EFETUADO COM SUCESSO!!!!"))
            setTimeout(async () => {
                console.log(clc.green("INICIANDO A ABERTURA DO VIDEO"))
                const page2 = await browser.newPage()
                page.close()
                await page2.goto(params[2]).then(async () => {
                    await page2.click('#ava-video-container')
                    console.log(clc.red("VENDO O VIDEO DE " + login + ' COM O TEMPO DE ' + params[3]  + " MINUTOS ENTÃO AGUARDE!"))
                    console.log(`AGUARDE VIDEO EM ANDAMENTO...`)
                    setTimeout(async () => {
                        browser.close()
                        console.log("VIDEO FINALIZADO!!!")
                    }, params[3] * 60000)
                })
            }, 5000)
        })
        .catch(err => {
          console.log(err); 
        })
    })()
} catch (error) {
    console.log('Erro: ' + error)
}