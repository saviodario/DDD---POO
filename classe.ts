function geradorNumerosSeguidos(inicio: number): () => number {
  let valorAtual = inicio;
  const constante = 1;

  return () => {
    valorAtual += constante;
    return valorAtual;
  }
}

export function listar(): any{
  console.log(Gerente.getInstancias()) 
  console.log(Projeto.getInstancias())
}

export function geraEtapas(tipo:string):number{
  if (tipo = 'desenvolvimento') {
      return 4;} 
  if (tipo = 'concepção') {
      return 5;} 
  if (tipo = 'identidade visual') {
      return 6;}
      return 0 
}

export const gerador = geradorNumerosSeguidos(0);

export class Sistema {

  static criarProjeto(nome:string, tipo:string, gerente:number, etapas:number): Projeto{
    return new Projeto(nome, tipo, gerente, etapas);
  }

  static deletaProjeto(nome: string):void {
    Projeto.getInstancias().forEach(element => {if (element.nome = nome){
      const indice = Projeto.getInstancias().indexOf(element)
      if (indice !== -1) {
        Projeto.getInstancias().splice(indice, 1);
      }else{console.log('Projeto nao existe')}
    }
  });
  }

  static criarGerente(id: number, user:string, senha:string, login:boolean): Gerente{
    return new Gerente(id,user, senha, login);
  }

  static deletaGerente(user:string):void {
    Gerente.getInstancias().forEach(element => {if (element.user = user){
      const indice = Gerente.getInstancias().indexOf(element)
      if (indice !== -1) {
        Gerente.getInstancias().splice(indice, 1);
      }else{console.log('Gerente nao existe')}
    }
  });
  }

}

export class Gerente{
  id:number;
  user:string;
  login:boolean;

  static instancias: Gerente[] = [];
  constructor(id:number , user:string, private senha:string, login:boolean) {
    this.id = id;
    this.user = user;
    this.senha = senha;
    this.login = login;
    Gerente.instancias.push(this)
  }

  static getInstancias() {
    return Gerente.instancias;
  }

  getSenha():string {
    return this.senha;
  }

  logar():any {
    this.login = true
  }

  alterarNome(newname:string){
    this.user = newname
  }

  alterarSenha(newsenha:string){
    this.senha = newsenha
  }

  buscarProjeto():any{
    Projeto.getInstancias().forEach(element => { if(this.id == element.gerente){
      return element
    }
    });
  } 
  
}

export class Projeto{
  nome:string;
  tipo:string;
  gerente:number;
  etapas:number

  
  static instancias: Projeto[] = [];
  constructor(nome: string, tipo:string, gerente:number, etapas:number) {
    this.nome = nome;
    this.tipo = tipo;
    this.gerente = gerente;
    this.etapas = etapas
    Projeto.instancias.push(this)
  }

  static getInstancias() {
    return Projeto.instancias;
  }
}
