import { clienteService } from "../service/cliente-service.js"

(async () => {
    const pegaURL = new URL(window.location)

    const id = pegaURL.searchParams.get('id')
    
    const imputNome = document.querySelector('[data-nome]')
    const imputEmail = document.querySelector('[data-email]')
    try {
        const dados = await clienteService.detalhaCliente(id)
        imputNome.value = dados.nome
        imputEmail.value = dados.email
    } catch (erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    
    
        
    const formulario = document.querySelector('[data-form]')
    
    formulario.addEventListener('submit', async (evento)=>{
        evento.preventDefault()
        try {
            await clienteService.atualizaCliente(id, imputNome.value, imputEmail.value)
        window.location.href = "../telas/edicao_concluida.html"
        } catch (erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
            
    })
})()

