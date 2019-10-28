// tslint:disable
// this is an auto generated file. This will be overwritten

export const getShelf = `query GetShelf($id: ID!) {
  getShelf(id: $id) {
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
export const listShelfs = `query ListShelfs(
  $filter: ModelShelfFilterInput
  $limit: Int
  $nextToken: String
) {
  listShelfs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      key
      userBooks {
        nextToken
      }
      owner
    }
    nextToken
  }
}
`;
export const getUserBook = `query GetUserBook($id: ID!) {
  getUserBook(id: $id) {
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
export const listUserBooks = `query ListUserBooks(
  $filter: ModelUserBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getReview = `query GetReview($id: ID!) {
  getReview(id: $id) {
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
export const listReviews = `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getBook = `query GetBook($id: ID!) {
  getBook(id: $id) {
    id
    title
    subtitle
  }
}
`;
export const listBooks = `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      subtitle
    }
    nextToken
  }
}
`;
