// tslint:disable
// this is an auto generated file. This will be overwritten

export const getShelf = `query GetShelf($id: ID!) {
  getShelf(id: $id) {
    id
    name
    books
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
      books
    }
    nextToken
  }
}
`;
export const getReview = `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    bookID
    body
    rating
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
      bookID
      body
      rating
    }
    nextToken
  }
}
`;
