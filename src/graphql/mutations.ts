// tslint:disable
// this is an auto generated file. This will be overwritten

export const createShelf = `mutation CreateShelf($input: CreateShelfInput!) {
  createShelf(input: $input) {
    id
    name
    key
    userBooks {
      items {
        id
      }
      nextToken
    }
    owner
  }
}
`;
export const updateShelf = `mutation UpdateShelf($input: UpdateShelfInput!) {
  updateShelf(input: $input) {
    id
    name
    key
    userBooks {
      items {
        id
      }
      nextToken
    }
    owner
  }
}
`;
export const deleteShelf = `mutation DeleteShelf($input: DeleteShelfInput!) {
  deleteShelf(input: $input) {
    id
    name
    key
    userBooks {
      items {
        id
      }
      nextToken
    }
    owner
  }
}
`;
export const createShelfBook = `mutation CreateShelfBook($input: CreateShelfBookInput!) {
  createShelfBook(input: $input) {
    id
    shelf {
      id
      name
      key
      userBooks {
        nextToken
      }
      owner
    }
    userBook {
      id
      book {
        id
        title
        subtitle
      }
      shelves {
        nextToken
      }
      owner
    }
  }
}
`;
export const updateShelfBook = `mutation UpdateShelfBook($input: UpdateShelfBookInput!) {
  updateShelfBook(input: $input) {
    id
    shelf {
      id
      name
      key
      userBooks {
        nextToken
      }
      owner
    }
    userBook {
      id
      book {
        id
        title
        subtitle
      }
      shelves {
        nextToken
      }
      owner
    }
  }
}
`;
export const deleteShelfBook = `mutation DeleteShelfBook($input: DeleteShelfBookInput!) {
  deleteShelfBook(input: $input) {
    id
    shelf {
      id
      name
      key
      userBooks {
        nextToken
      }
      owner
    }
    userBook {
      id
      book {
        id
        title
        subtitle
      }
      shelves {
        nextToken
      }
      owner
    }
  }
}
`;
export const createUserBook = `mutation CreateUserBook($input: CreateUserBookInput!) {
  createUserBook(input: $input) {
    id
    book {
      id
      title
      subtitle
    }
    shelves {
      items {
        id
      }
      nextToken
    }
    owner
  }
}
`;
export const updateUserBook = `mutation UpdateUserBook($input: UpdateUserBookInput!) {
  updateUserBook(input: $input) {
    id
    book {
      id
      title
      subtitle
    }
    shelves {
      items {
        id
      }
      nextToken
    }
    owner
  }
}
`;
export const deleteUserBook = `mutation DeleteUserBook($input: DeleteUserBookInput!) {
  deleteUserBook(input: $input) {
    id
    book {
      id
      title
      subtitle
    }
    shelves {
      items {
        id
      }
      nextToken
    }
    owner
  }
}
`;
export const createReview = `mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input) {
    id
    book {
      id
      title
      subtitle
    }
    body
    rating
    owner
  }
}
`;
export const updateReview = `mutation UpdateReview($input: UpdateReviewInput!) {
  updateReview(input: $input) {
    id
    book {
      id
      title
      subtitle
    }
    body
    rating
    owner
  }
}
`;
export const deleteReview = `mutation DeleteReview($input: DeleteReviewInput!) {
  deleteReview(input: $input) {
    id
    book {
      id
      title
      subtitle
    }
    body
    rating
    owner
  }
}
`;
export const createBook = `mutation CreateBook($input: CreateBookInput!) {
  createBook(input: $input) {
    id
    title
    subtitle
  }
}
`;
export const updateBook = `mutation UpdateBook($input: UpdateBookInput!) {
  updateBook(input: $input) {
    id
    title
    subtitle
  }
}
`;
export const deleteBook = `mutation DeleteBook($input: DeleteBookInput!) {
  deleteBook(input: $input) {
    id
    title
    subtitle
  }
}
`;
