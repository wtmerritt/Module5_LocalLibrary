function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id === id) {
      return accounts[i];
    }
  }
}

function sortAccountsByLastName(accounts) {
  accounts.sort(function (accountsA, accountsB) {
    if (accountsA.name.last < accountsB.name.last) {
      return -1;
    } else {
      if (accountsA.name.last > accountsB.name.last) {
        return 1;
      } else return 0;
    }
    return accounts;
  });

  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let borrowCount = 0;
  for (let j = 0; j < books.length; j++) {
    const book = books[j];
    for (let k = 0; k < book.borrows.length; k++) {
      if (
        account.id === book.borrows[k].id &&
        book.borrows[k].returned === true
      ) {
        borrowCount += 1;
      }
    }
  }
  return borrowCount;
}

function getBooksPossessedByAccount(account, books, authors) {
  let bookCount = 0;
  const booksNotRet = books.filter(booksOut);

  // Search thru All Books
  function booksOut(book) {
    return book.borrows.some(bookCheckedOut);
  }

  // Find All Books borrowed and not returned
  function bookCheckedOut(borrow) {
    if (borrow.returned === false) {
      bookCount++;
    }
    return account.id === borrow.id && borrow.returned === false;
  }

  // Find Accounts for Books not Returned
  const accountsInfo = booksNotRet.map(findAccounts);

  // Find Author for books not returned
  function findAccounts(bookItem) {
    const authorInfo = authors.find(findAuthor);

    function findAuthor(auth) {
      return auth.id === bookItem.authorId;
    }

    const author = { ...authorInfo };
    const bookNotReturned = { ...bookItem, author };

    return bookNotReturned;
  }

  // Return Account & Author info for books not returned
  return accountsInfo;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
