validarLogin(): boolean {

  let blackList = ["SELECT", "OR", ' ""="" ', "-- ", ";", "1 = 1", "1=1", "DROP", "\"\"=\"\"", "'='"];//lista de palavras chave

  let ataque = 0;

  blackList.forEach((palavra) => {//passa por cada palavra - parecido com um form
    if (this.userModel.email?.toUpperCase().includes(palavra)) {//se o que foi digitado é igual à palavra da balcklist
      ataque++;//conta mais uma palavra proibida
    }
  })


  if (
    ataque > 0 ||
    this.userModel.email === "" || this.userModel.email === undefined ||
    this.userModel.password === "" || this.userModel.password === undefined
  ) {//não pode logar/ chamar a api
    return false;
  } else {
    return true;
  }

}



userModel = new User()

receberDados(){
