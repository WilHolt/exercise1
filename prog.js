
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
    var count = [0,0,0,0,0];
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
              if(Cart[i].name=="book 1"){
                count[0]++;
                console.log("numero de repetiçoes na 0: " + count[0])
              }
              if(Cart[i].name=="book 2"){
                count[1]++;
                console.log("numero de repetiçoes na posicao 1: "+ count[1])
    
              }
              if(Cart[i].name=="book 3"){
                count[2]++;
                console.log("numero de repetiçoes na posicao 2: "+ count[2])
              }
              if(Cart[i].name=="book 4"){
                count[3]++;
                console.log("numero de repetiçoes  na posicao 3: "+ count[3])
    
              }
              if(Cart[i].name=="book 5"){
                count[4]++;
                console.log("numero de repetiçoes na posicao 4 : "+ count[4])
    
              }
            }
          }
          
        }
    
    }
        var different=0;
        var price =0;
        var total = Cart.length;
      for(var i = 0 ; i< 5; i++){
        if(count[i] > 0){
          different++;
          console.log("number of different books :" +different)
        }
      }
      switch(different){
        case 1:
        console.log("none rebate")
          for( var i= 0 ; i<5; i++){
            if(count[i]>0){
              price= 8.00 * count[i]
            }
          }
          console.log(" the price to be paid is: "+price)
          return price;

        break;
        case 2:
        console.log("rebate of 5%");
          for( var i= 0 ; i<5; i++){
            if(count[i]>0){
              price+= 7.60 * count[i]
             }
                
              }
              console.log(" the price to be paid is: "+price)
          return price;


        break;
        case 3:
        console.log("rebate of 10%");
        for( var i= 0 ; i<5; i++){
          if(count[i]>0){
            price+= 7.20 * count[i]
          }
          
        }
        console.log(" the price to be paid is: "+price)
        return price;
        break;
        case 4:
        console.log("rebate of 20%");
        for( var i= 0 ; i<5; i++){
          if(count[i]>0){
            price+= 6.40 * count[i]
          }
          
        }
        console.log(" the price to be paid is: "+price)
        return price;

        
        break;
        case 5:
        console.log("rebate of 25%");
        for( var i= 0 ; i<5; i++){
          if(count[i]>0){
            price+= 6.00 * count[i]
          }
          
        }
        return price;

        console.log(" the price to be paid is: "+price)
        //price = (32*-64)+(total)
  
        break;
      }
      // about now five of them will receive the rebate in their price and the restant of will be 8 Euro
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
    
    buy(2)
    buy(4)
    buy(3)
    buy(4)





    function more(){
      return 10+10
    }
    console.log(Cart)
    rebate()
    console.log("POSICAO 1: "+count[0])
    console.log("POSICAO 2: "+count[1])
    console.log("POSICAO 3: "+count[2])
    console.log("POSICAO 4: "+count[3])
    console.log("POSICAO 5: "+count[4])
  


