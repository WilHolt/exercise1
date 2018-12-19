class Book {
constructor(name, price) {
  
  this.name = name;
  this.price = price;
  this.found = false;
}
getName(){
  return this.name;
}
getPrice(){
  return this.price;
}
getFound(){
  return this.found;
}
}
var book1 = new Book("book 1", 8.00)
var book2 = new Book("book 2", 8.00)
var book3 = new Book("book 3", 8.00)
var book4 = new Book("book 4", 8.00)
var book5 = new Book("book 5", 8.00)
var count = [0,0,0,0,0,0,0];
var count4;
const Cart = [];
function create(){

}
function buy(num){
  switch(num){
    case 0:
    Cart.push(book1)
    break;
    case 1:
    Cart.push(book2)
    break;
    case 2:
    Cart.push(book3)
    break;
    case 3:
    Cart.push(book4)
    break;
    case 4:
    Cart.push(book5)
    break;
  }
  
};

function rebate(){
  for(var i= 0; i<Cart.length ; i++){
    if(Cart[i].found == false){
      for(var j= 0; j<Cart.length; j++){
        if(Cart[j] == Cart[i]){
          Cart[i].found = true 
          console.log("found:"+Cart[i].name);
          if(i==0){
            count[0]++;
            console.log("adicionado na 0: " + count[0])
          }
          if(i==1){
            count[1]++;
            console.log("adicionado na posicao 1: "+ count[1])

          }
          if(i==2){
            count[2]++;
            console.log("adicionado na posicao 2: "+ count[2])
          }
          if(i==3){
            count[3]++;
            console.log("adicionado  na posicao 3: "+ count[3])

          }
          if(i==4){
            count[4]++;
            console.log("adicionado na posicao 4 : "+ count[4])

          }
        }
      }
      
    }

}
}

//switch(i){
//  case 0:    
//  count[0]+=1;
//  break;
  //case 1:
  ///count[1]+=1;
  //break;
  //case 2:
  //count[2]+=1;            
 // break;
 // case 3:
 // count[3]+=1;
  //break;
  ///case 4:
//  count[4]+=1;
 // break;
//}

buy(0)
buy(1)
buy(1)
buy(2)
buy(2)
buy(2)
buy(3)
buy(3)
buy(4)
buy(4)

console.log(Cart)
rebate()
console.log("POSICAO 1: "+count[0])
console.log("POSICAO 2: "+count[1])
console.log("POSICAO 3: "+count[2])
console.log("POSICAO 4: "+count[3])
console.log("POSICAO 5: "+count[4])
console.log("POSICAO 5: "+count[5])
console.log("POSICAO 5: "+count[6])




