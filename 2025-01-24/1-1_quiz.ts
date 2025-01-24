class Library{
  books :[ {title:string ,
            author:string ,
            isAvailable:boolean
  }]
  addBook(title, author){
    this.books.push( new books{ title, author, true });
  }
  borrowBook(title){
    let isFound = false;
    this.books.forEach( book => {
      if( book.title === title ){
        isFound = true;
        if( book.isAvailable){
          book.isAvailable = false;
          return "책 빌리기";
        }else{
          return "책을 이미 누가 빌렸음";
        }
      }
    })

    if(!isFound){
      return "책을 찾을수 없음";
    }
  }

  returnBook(title){
    let isFound = false;
    this.books.forEach( book => {
      if( book.title === title ){
        isFound = true;
        if( !book.isAvailable){
          book.isAvailable = true;
          return "책 반납완료";
        }else{
          return "뭐야 이미 있는데";
        }
      }
    })

    if(!isFound){
      return "책을 찾을수 없음";
    }
  }
}