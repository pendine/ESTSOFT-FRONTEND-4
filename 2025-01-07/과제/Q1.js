// 문제: 간단한 은행 계좌 시스템 만들기
// 다음 요구사항을 만족하는 BankAccount 클래스를 작성하세요:

// 요구사항
// 클래스 이름: BankAccount

// 생성자:
// 생성자는 accountHolder(계좌 소유자 이름)와 initialBalance(초기 잔액)를 매개변수로 받습니다.
// initialBalance가 0보다 작으면 에러 메시지를 출력하고 계좌를 생성하지 않습니다.

// 메서드:
// deposit(amount):
// 계좌에 amount만큼 돈을 입금합니다.
// 입금 금액이 0보다 작거나 같으면 에러 메시지를 출력합니다.

// withdraw(amount):
// 계좌에서 amount만큼 돈을 출금합니다.
// 출금 금액이 잔액보다 많으면 에러 메시지를 출력합니다.

// checkBalance():
// 현재 잔액을 출력합니다.
// 추가 요구사항:
// 모든 입금과 출금 내역을 기록하는 배열(transactions)을 추가하세요.
// 각 거래 내역은 객체 형태로 저장하며, 다음과 같은 구조를 가집니다:

// { type: 'deposit', amount: 100 }
// { type: 'withdraw', amount: 50 }

// 예상 동작
class BankAccount{
  
  constructor( accountHolder, initialBalance ){
    try{
      this.accountHolder = accountHolder
      this.initialBalance = initialBalance;
      this.transactions = [];

      if(initialBalance < 0){
        throw new Error("balance is lower than 0");
      }
    }
    catch(error){
      console.log(error.message);
      return;
    }
  }

  createTransaction( type , amount){
    return { 'type' : type , 'amount' : amount};
  }

  deposit(amount){
    try{
      if( amount <= 0){
        throw new Error("입금 요청 금액이 0이하");
      }
      this.initialBalance += amount;

      let transaction = this.createTransaction('deposit' , amount);
      
      this.transactions.push( transaction );
      
      console.log( this.accountHolder + "님의 계좌에 "+ this.initialBalance + "원이 입금 되었습니다.");
    }
    catch(error){
      console.log("오류 : " + error.message + "입니다");
      return;
    }
  }

  withdraw(amount){

    try{
      if( amount > this.initialBalance){
        throw new Error("출금 신청 금액이 잔고를 초과");
      }

      this.initialBalance -= amount;

      let transaction = this.createTransaction('withdraw' , amount);
      
      this.transactions.push( transaction );
      
      console.log( this.accountHolder + "님의 계좌에 "+ this.initialBalance + "원이 출금 되었습니다.");
    }
    catch(error){
      console.log("오류 : " + error.message + "입니다");
      return;
    }
  }

  checkBalance(){
    console.log( "잔액 : " + this.initialBalance );
  }
}

// 계좌 생성
const account = new BankAccount("홍길동", 1000);

// 입금
account.deposit(500); // "500원이 입금되었습니다."
account.deposit(-100); // "입금 금액은 0보다 커야 합니다."

// 출금
account.withdraw(300); // "300원이 출금되었습니다."
account.withdraw(1500); // "잔액이 부족합니다."

// 잔액 확인
account.checkBalance(); // "현재 잔액은 1200원입니다."

// 거래 내역 확인
console.log(account.transactions);
/*
[
  { type: 'deposit', amount: 500 },
  { type: 'withdraw', amount: 300 }
]
*/