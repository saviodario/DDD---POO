import { Sistema,Gerente,Projeto, gerador,listar,geraEtapas} from './classe'
import prompt from 'prompt-sync'

class Telas{
    telaPrincipal() {
        let teclado = prompt()
        let option:number = 0
        while(option != 7){
            console.log('----------------------------MENU PRINCIPAL----------------------------')
            console.log('Selecione uma das opções abaixo:')
            console.log('1 - Fazer login')
            console.log('2 - Criar conta gerente') 
            console.log('3 - Remover conta gerente')
            console.log('4 - Criar projeto')
            console.log('5 - Remover Projeto')
            console.log('6 - Listar Projetos/Gerentes')
            console.log('7 - Sair')
            console.log('----------------------------------------------------------------------')

            option = + teclado('Escolha uma ação: ')

            switch(option){
                case 1:
                    let userlog:string = teclado('Nome usuário: ')
                    let usersenha:string = teclado('Senha: ')
                    Gerente.getInstancias().forEach(element => { if(userlog == element.user && usersenha == element.getSenha()){
                        element.logar()
                        option = 7
                        this.telaGerente(element)
                    }else{console.log('Usuário ou senha incorretos...')}
                        
                    });
                    break
                case 2:
                    let user:string = teclado('Qual será o user do novo Gerente? ')
                    let senha:string = teclado('Qual será a senha do novo Gerente? ')
                    let login:boolean = false
                    let id: number = gerador()
                    Sistema.criarGerente(id, user, senha, login)
                    break
                case 3:
                    let userDel:string = teclado('Qual o user Gerente que será apagado? ')
                    Sistema.deletaGerente(userDel)
                    break
                case 4:
                    let nome:string = teclado('Qual será o nome do novo Projeto? ')
                    let tipo:string = teclado('Qual será o tipo do novo Projeto? ')
                    let gerente:number = parseInt(teclado('Qual será o id do gerente responsável do novo Projeto? '))
                    let etapas:number = geraEtapas(tipo)
                    
                    Sistema.criarProjeto(nome,tipo,gerente,etapas)
                    break
                case 5:
                    let nomeDel:string = teclado('Qual o nome do Projeto que será apagado? ')
                    Sistema.deletaGerente(nomeDel)
                    break
                case 6:
                    listar()
                    break
                case 7:
                    break
            }
        }
    }

    telaGerente(gerente:Gerente) {
        let teclado = prompt()
        let option:number = 0
        while(option != 6){
            console.log('----------------------------GERENTE----------------------------')
            console.log('1 - Ver dados')
            console.log('2 - Modificar dados')
            console.log('3 - Verificar projeto')
            console.log('4 - Avançar projeto')
            console.log('5 - Entregar projeto')
            console.log('6 - Voltar menu principal')
            
            option = + teclado('Escolha uma ação: ')

            switch(option){
                case 1:
                    console.log(gerente)
                    break
                case 2:
                    console.log('1 - Alterar nome')
                    console.log('2 - Modificar senha')
                    let alvo:string = teclado('escolha: ')
                    if(alvo = '1'){
                        let newname:string = teclado('Novo nome: ')
                        gerente.alterarNome(newname)
                    }
                    if(alvo = '2'){
                        let newsenha:string = teclado('Nova senha: ')
                        gerente.alterarSenha(newsenha)
                    }else{console.log('Escolha uma opção válida')}
                    break
                case 3:
                    console.log(gerente.buscarProjeto())
                    break
                case 4:
                    let proj: Projeto = gerente.buscarProjeto()
                    proj.etapas = proj.etapas - 1
                    console.log(`Restam ${proj.etapas} etapas do projeto ${proj}`)
                    break
                case 5:
                    break
                case 6:
                    this.telaPrincipal()
                    break
            }
        }
    }
}
const tela = new Telas
tela.telaPrincipal()