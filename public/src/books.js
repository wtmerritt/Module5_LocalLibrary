function findAuthorById(authors, id) {
  const authorInfo = authors.find(findAuthor);

  function findAuthor(author) {
    return author.id === id;
  }
  return authorInfo;
}

function findBookById(books, id) {
  const bookInfo = books.find(findBook);

  function findBook(book) {
    return book.id === id;
  }
  return bookInfo;
}

function partitionBooksByBorrowedStatus(books) {
  function splitBooks(acc, book) {
    const borrowed = book.borrows.some((borrow) => !borrow.returned);
    if (borrowed) {
      acc[0].push(book);
    } else {
      acc[1].push(book);
    }
    return acc;
  }
  return books.reduce(splitBooks, [[], []]);
}

function getBorrowersForBook(book, accounts) {
  const borrow = book.borrows.map(findBooks);

  function findBooks(bookItem) {
    // console.log("Book Item = ", bookItem.id);
    const accountInfo = accounts.find(findAccounts);

    function findAccounts(account) {
      return account.id === bookItem.id;
    }

    const acct = { ...bookItem, ...accountInfo };    
    return acct;
  }
  const acctFirstTen = borrow.slice(0, 10);
  return acctFirstTen;

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
