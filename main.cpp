// Example program
#include <iostream>
#include <string>
#include <vector>
using namespace std;

struct Books{
public:
     string name;
     int price;
     bool found;
public:
 Books(string name, int price ){
    name = name;
    price = price;
    found = false;
 }
    };

void buy(vector<Books> cart, vector<Books> books, int num){
     switch(num){
       case 0:
       cart.push_back(books[0]);
       break;
       case 1:
       cart.push_back(books[1]);
       break;
       case 2:
       cart.push_back(books[2]);
       break;
       case 3:
       cart.push_back(books[3]);
       break;
       case 4:
       cart.push_back(books[4]);
       break;
     }
    
};

int rebate(vector<Books> cart){
     // for(int i= 0; i<5 ; i++){
      //if(cart[i].getFound() === false){
     //   for(int j= 0; j<5; j++){
       //   if(cart[i] == cart[j]){
       //     //found++;
       //     cout<<("found:"+cart[i].name);
       //     cart[i].found = true
        //  }
       // }
     // }
}

int main()
{
    vector<Books> cart;    
    vector<Books> books;
    books.push_back(Books("book 1", 8));
    books.push_back(Books("book 2", 8));
    books.push_back(Books("book 3", 8));
    books.push_back(Books("book 4", 8));
    books.push_back(Books("book 5", 8));
    for(int i= 0; i<5 ; i++){
        cout<<books[i].name;
    }
   //int rebate = rebate();
}
