class Library {
  constructor() {
    this.books = []; // 도서 목록 배열
  }

  // 책 추가 메서드
  addBook(title, author) {
    const newBook = { title, author, isAvailable: true }; // 새 책 객체 생성
    this.books.push(newBook); // 도서 목록에 추가
    console.log(`"${title}"이(가) 추가되었습니다.`);
  }

  // 책 대출 메서드
  borrowBook(title) {
    const book = this.books.find(book => book.title === title); // 책 검색

    if (!book) {
      console.error("책을 찾을 수 없습니다.");
      return;
    }
    if (!book.isAvailable) {
      console.error("이미 대출 중인 책입니다.");
      return;
    }

    book.isAvailable = false; // 대출 처리
    console.log(`"${title}"이(가) 대출되었습니다.`);
  }

  // 책 반납 메서드
  returnBook(title) {
    const book = this.books.find(book => book.title === title); // 책 검색

    if (!book) {
      console.error("책을 찾을 수 없습니다.");
      return;
    }
    if (book.isAvailable) {
      console.error("이미 반납된 책입니다.");
      return;
    }

    book.isAvailable = true; // 반납 처리
    console.log(`"${title}"이(가) 반납되었습니다.`);
  }
}

// 테스트 코드
const library = new Library();

library.addBook("자바스크립트 완벽 가이드", "데이비드 플래너건");
library.addBook("클린 코드", "로버트 C. 마틴");

library.borrowBook("클린 코드"); // "클린 코드가 대출되었습니다."
library.borrowBook("클린 코드"); // "이미 대출 중인 책입니다."
library.borrowBook("알 수 없는 책"); // "책을 찾을 수 없습니다."

library.returnBook("클린 코드"); // "클린 코드가 반납되었습니다."
library.returnBook("클린 코드"); // "이미 반납된 책입니다."
library.returnBook("알 수 없는 책"); // "책을 찾을 수 없습니다."

console.log(library.books);
/*
[
  { title: "자바스크립트 완벽 가이드", author: "데이비드 플래너건", isAvailable: true },
  { title: "클린 코드", author: "로버트 C. 마틴", isAvailable: true }
]
*/
