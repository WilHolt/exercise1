// Example program
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Books{
public:
     string name;
     int price;
     bool found;
public:
 Books(string name, int price ){
    this->name = name;
    this->price = price;
    found = false;
 }
 string getName(){
     return name;
 }
 int getPrice(){
     return price;
 }
 bool getFound(){
     return found;
 }
  void setFound(){
    this->found = found
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

void rebate(vector<Books> cart){
        vector<int> count(5,0);
    cout<<"rebate function \n";
    for(int i= 0; i<cart.size() ; i++){
    cout<< cart[i].getName()<<"\n";
    }
    for(int i= 0; i<cart.size() ; i++){
      if(cart[i].getFound() == false){
        for(int j= 0; j<cart.size(); j++){
          if(cart[i].getName() == cart[j].getName()){
            cout<<("found:"+cart[i].getName());
           cart[i].setFound(true);
            if(i==0){
            count[0]++;

          }
          if(i==1){
            count[1]++;


          }
          if(i==2){
            count[2]++;
 
          }
          if(i==3){
            count[3]++;

          }
          if(i==4){
            count[4]++;

          }
          }
        }
      }
    }   
    cout<< count[0]<<'\n';
    cout<< count[1]<<'\n';
    cout<< count[2]<<'\n';
    cout<< count[3]<<'\n';
    cout<< count[4]<<'\n';

}

int main()
{
    vector<Books> cart;    
    vector<Books> books;
    Books b1("book 1", 8);
    Books b2("book 2", 8);
    Books b3("book 3", 8);
    Books b4("book 4", 8);
    Books b5("book 5", 8);
    books.push_back(b1);
    books.push_back(b2);
    books.push_back(b3);
    books.push_back(b4);
    books.push_back(b5);
        cout<<books[0].getName();

    for(int i= 0; i<books.size() ; i++){
        cout<< "teste";
        cout<<books[i].getName();
    }
    buy(cart,books,2);
    buy(cart,books,1);
    buy(cart,books,3);
    buy(cart,books,4);
    rebate(cart);
   //int rebate = rebate();
}
