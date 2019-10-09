// tslint:disable
// this is an auto generated file. This will be overwritten

export const createShelf = `mutation CreateShelf($input: CreateShelfInput!) {
  createShelf(input: $input) {
    id
    name
    books
  }
}
`;
export const updateShelf = `mutation UpdateShelf($input: UpdateShelfInput!) {
  updateShelf(input: $input) {
    id
    name
    books
  }
}
`;
export const deleteShelf = `mutation DeleteShelf($input: DeleteShelfInput!) {
  deleteShelf(input: $input) {
    id
    name
    books
  }
}
`;
export const createReview = `mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input) {
    id
    bookID
    body
    rating
  }
}
`;
export const updateReview = `mutation UpdateReview($input: UpdateReviewInput!) {
  updateReview(input: $input) {
    id
    bookID
    body
    rating
  }
}
`;
export const deleteReview = `mutation DeleteReview($input: DeleteReviewInput!) {
  deleteReview(input: $input) {
    id
    bookID
    body
    rating
  }
}
`;
