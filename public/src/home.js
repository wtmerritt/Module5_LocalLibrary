function getTotalBooksCount(books) {
  if (books.length === 0) return 0;
  const count = books.find(findBooks);
  return bookCount++;
}

// Helper Function ...
let bookCount = 0;
function findBooks(book) {
  if (book.id) bookCount++;
  return bookCount++;
}

function getTotalAccountsCount(accounts) {
  let accountCount = 0;
  const count = accounts.find(findAccounts);

  function findAccounts(account) {
    if (account.id) accountCount++;
    return accountCount++;
  }
  return accountCount++;
}

function getBooksBorrowedCount(books) {
  let bookCount = 0;
  const borrow = books.map(findBooks);

  function findBooks(bookBorr) {
    bookBorr.borrows.find(findBorrow);

    function findBorrow(bookNotRet) {
      if (bookNotRet.returned === false) bookCount++;
    }
    // console.log("Book Count = ", bookCount);
  }
  return bookCount++;
}

function getMostCommonGenres(books) {
  let result = {};

  books.forEach((book) => {
    if (result[book.genre]) result[book.genre]++;
    else result[book.genre] = 1;
  });
  //   console.log("Result = ", result);
  let mapResult = Object.entries(result).map(([name, count]) => {
    return { name, count };
  });
  //  console.log("Map Result = ", mapResult);
  let sortResult = mapResult.sort((a, b) => {
    return b.count - a.count;
  });
  //  console.log("Sort Result = ", sortResult);
  return sortResult.slice(0, 5);
  //   console.log("Slice Result = ", sortResult.slice(0, 5));
}

function getMostPopularBooks(books) {
  let result = books.map(findBooks);

  function findBooks(bookBorr) {
    //  console.log("Book Count = ", bookBorr.borrows.length);
    let name = bookBorr.title;
    let count = bookBorr.borrows.length;
    return { name, count };
    // return bookBorr.borrows.length;
  }

  /*
  let mapResult = Object.entries(result).map(([title, count]) => {
    return { title, count };
  });
  */

  // console.log("Map Result = ", mapResult);

  let sortResult = result.sort((a, b) => {
    return b.count - a.count;
  });

  // console.log("Sort Result = ", sortResult);
  return sortResult.slice(0, 5);
  // console.log("Slice Result = ", sortResult.slice(0, 5));
}

function getMostPopularAuthors(books, authors) {
  // let bookCount = 0;

  const resAuthors = authors.map(findAuthors);

  function findAuthors(author) {
    let authId = author.id;
    let name = author.name.first + " " + author.name.last;

    const booksbyAuthor = books.filter((book) => book.authorId === authId);
    const totalBorrows = booksbyAuthor.reduce(
      (accum, book) => accum + book.borrows.length,
      0
    );
    return { name, count: totalBorrows };
  }
  // console.log("Authors = ", resAuthors);

  let sortResult = resAuthors.sort((a, b) => {
    return b.count - a.count;
  });

  // console.log("Sort Result = ", sortResult);
  // console.log("Slice Result = ", sortResult.slice(0, 5));
  return sortResult.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
