/*let idade = 90;
let pessoa = "Robson";
let vivo = true;
let amigos = ["Catitab123", "PedroGames2344", "McLovin", "Jiafei"];

console.log("A idade de ", pessoa, "é = ", idade, ".");
console.log("Robson está vivo?");

if(vivo == true){
    console.log("Sim!");
} else{
    console.log("Não....");
}

console.log(amigos[3]);

let Pessoa = {
    nome: "Rodrigo doll",
    apelidos: ["Doll", "Palanquinha de panties", "Rodrigue apresentadore"],
    idade: 47,
    corsellete_bairrodrigo: true,
    baranguice: true,
    amigues: ["Lora", "LittleMadruga", "Newfmx"]
}

console.log("A Doll é baranga?");

if(Pessoa.baranguice == true){
    console.log("Siiimmmm!!!");
} else {
    console.log("Nãooo. Ou é....");
}


a = 9;
b = 7;

function sum(a, b){
    result = a + b;
    return result;
}

sum_exemple = sum(a, b);
console.log("A soma de ", a, " + ", b, "é = ", sum_exemple, ".");

let minus = (a, b) => {  // Arrow function
    result = a - b;
    return result;
}

alert(`野花香

我总是想假装自己很固执
但当我看到自己的时候, 我投降了
因为我爱你, 所以我永远都是一样的
再大的压力也阻挡不了你
我无法保护自己免受你的热度
这总是让我开心
幸好我有爱的力量
愿意陪你, 世界都疯狂
请到我这里来
让我的心不再流浪
载歌载舞, 醉至天明
当我醒来时, 地板上充满了野花的香味。

请到我这里来
让我为您拆开包装
今晚我是你最美丽的新娘
陶醉于这里的野花香气
野花的香气 野花的香气
这里真是太美了, 鸟语花香。
命运把我带到了这个地方。

美丽的女孩喜欢香水
野花的香气 野花的香气
我们追逐梦想离开家乡
温暖的拥抱, 醉在你身边
无论你在哪里, 那里都是天堂
我无法保护自己免受你的热度
这总是让我开心
幸好我有爱的力量
愿意陪你, 世界都疯狂
请到我这里来
让我的心不再流浪
载歌载舞, 醉至天明
当我醒来时, 地板上充满了野花的香味。

请到我这里来
让我为您拆开包装
今晚我是你最美丽的新娘
陶醉于这里的野花香气
陶醉于这里的野花香气
野野野野花香
野野野野花香
`)


function display(){
    alert("You've clicked me.")
}

const button_state = document.querySelector("#button")
button_state.addEventListener("click", display)

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    console.log(usdInput.value)
})

brlInput.addEventListener("keyup", () => {
    console.log(brlInput.value)
})

let dolar = 6.07
let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

function convert(type_convertion, value){
    if(type_convertion == "to_brl"){
        converted = value * dolar;
        
    } else if(type_convertion == "to_usd"){
        converted = value / dolar;
    }

    converted = converted.toFixed(2)
    return converted;
}

usdInput.value = 0.00
brlInput.value = 0.00


usdInput.addEventListener("keyup", () => {
    convertion = convert("to_brl", usdInput.value)
    brlInput.value = convertion
})

brlInput.addEventListener("keyup", () => {
    convertion = convert("to_usd", brlInput.value)
    usdInput.value = convertion
})

function convert(type_convertion, value){
    if(type_convertion == "to_brl"){
        converted = value * dolar;
        
    } else if(type_convertion == "to_usd"){
        converted = value / dolar;
    }

    converted = converted.toFixed(2)
    return converted;
}

function fixValue(value){
    let result = value.replace(",", ".") 
    let floatResult = parseFloat(result);
    if (floatResult == NaN){
        floatResult = 0;
    }

    return floatResult;
}

usdInput.value = "0,00"
brlInput.value = "0,00"


usdInput.addEventListener("keyup", () => {
    let value = usdInput.value
    convertion = convert("to_brl", value)
    brlInput.value = convertion
})

brlInput.addEventListener("keyup", () => {
    let value = brlInput.value
    convertion = convert("to_usd", value)
    usdInput.value = convertion
})

let dolar = 6.07;  
let usdInput = document.querySelector("#usd");  
let brlInput = document.querySelector("#brl");  

function convert(type_convertion, value){
    let converted;

    if (type_convertion == "to_brl") {
        converted = value * dolar; 
    } else if (type_convertion == "to_usd") {
        converted = value / dolar;  
    }

    converted = converted.toFixed(2); 
    return converted;
}

function fixValue(value){

    let result = value.replace(",", "."); 
    let floatResult = parseFloat(result);  

    if (isNaN(floatResult)) {
        floatResult = 0;
    }

    return floatResult;
}

usdInput.value = "0,00";
brlInput.value = "0,00";

usdInput.addEventListener("keyup", () => {
    let value = fixValue(usdInput.value);  
    let convertion = convert("to_brl", value); 
    convertion = convertion.replace(".", ",")
    brlInput.value = convertion; 
});

brlInput.addEventListener("keyup", () => {
    let value = fixValue(brlInput.value); 
    let convertion = convert("to_usd", value); 
    convertion = convertion.replace(".", ",")
    usdInput.value = convertion; 
});


*/

//Isso é um comentário

/*Isso é um
Bloco de código */

let dolar = 6.07;  
let usdInput = document.querySelector("#usd");  
let brlInput = document.querySelector("#brl"); 
usdInput.value = "0,00"
brlInput.value = "0,00"


function convert(type_convertion){
    if(type_convertion == "to_brl"){
       let fixedValue = fixValue(usdInput.value)

       let result = fixedValue * dolar;

       result = result.toFixed(2)

       brlInput.value = formatCurrency(result)
        
    } else if(type_convertion == "to_usd"){
        let fixedValue = fixValue(brlInput.value)

        let result = fixedValue / dolar;
 
        result = result.toFixed(2)
 
        usdInput.value = formatCurrency(result)
    }


    return
}

function formatCurrency(value){
    let fixedValue = fixValue(value)
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }

    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)
}

function fixValue(value){
    let result = value.replace(",", ".") 
    let floatResult = parseFloat(result);
    if (floatResult == NaN){
        floatResult = 0;
    }

    return floatResult;
}

usdInput.addEventListener("keyup", () => {
    convertion = convert("to_brl")
})

brlInput.addEventListener("keyup", () => {
    convertion = convert("to_usd")
})



function display(){
    alert("You've clicked me.")
}

const button_state = document.querySelector("#button")
button_state.addEventListener("click", display)




