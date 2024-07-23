<template>
  <div id="app">
    <h1 class="title">Master_Genie_Logiciel</h1>
    <h2>Mini-Calculatrice</h2>
    <div class="calculator">
      <input type="text" class="result" :value="result" readonly />
      <div class="buttons">
        <button class="number" @click="clicker('1')">1</button>
        <button class="number" @click="clicker('2')">2</button>
        <button class="number" @click="clicker('3')">3</button>
        <button class="operator" @click="clickerOp('/')">/</button>
        <button class="number" @click="clicker('4')">4</button>
        <button class="number" @click="clicker('5')">5</button>
        <button class="number" @click="clicker('6')">6</button>
        <button class="operator" @click="clickerOp('*')">x</button>
        <button class="number" @click="clicker('7')">7</button>
        <button class="number" @click="clicker('8')">8</button>
        <button class="number" @click="clicker('9')">9</button>
        <button class="operator" @click="clickerOp('-')">-</button>
        <button class="number" @click="clicker('0')">0</button>
        <button class="number" @click="clicker('.')">.</button>
        <button class="number" @click="clicker('00')">00</button>
        <button class="operator" @click="clickerOp('+')">+</button>
        <button class="clear" @click="clearAll">C</button>
        <button class="clear" @click="clearNumber">CE</button>
        <button class="egal" @click="calculer()">=</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      result: '',
      calculated: false
    };
  },
  methods: {
    clicker(value) {
  if (this.calculated) {
    this.result = value;
    this.calculated = false;
  }
  else {
    this.result += value;
  }
},
clearAll() {
  this.result = '';
  this.calculated = false;
},
clearNumber(){
  if (this.result && this.result.length > 0) {
    this.result = this.result.slice(0, -1);
    if (this.result.length == 0) {
      this.clearAll();
    }
  } else {
    this.clearAll();
  }
},
clickerOp(operator) {
  if (/[+*/-]$/.test(this.result)) {
    this.result = this.result.slice(0, -1) + operator;
  } else {
    this.result += operator;
  }
  this.calculated = false;
},
calculer() {
  try {
    let evaluatedResult = eval(this.result.replace(/(^|[^0-9])0+(\d+)/g, '$1$2'));
    if (evaluatedResult === Infinity || evaluatedResult == -Infinity) {
      throw new Error('Division Par Zero');
    }
    this.result = Number.isFinite(evaluatedResult) ? evaluatedResult : 'Erreur';
    this.calculated = true;
  } catch (error) {
    if (error.message === 'Division Par Zero') {
      this.result = 'Erreur, Division Par Zero';
    } else {
      this.result = 'Erreur';
    }
  }
}
  }
}
</script>

<style src="./assets/calculator.css"></style>
