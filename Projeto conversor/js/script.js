class moedas {
    dolar;
    real;
    
    constructor() {
      this.dolar = 4.76
  }
  
  converterRealDolar() {
      this.real = document.getElementById("realDolar").value;

      const valorEmDolar = parseFloat(this.real) / this.dolar;
  
      document.getElementById("resultadoRealDolar"),innertext = valorEmDolar;
 }
  
}

const conversao = new moedas();