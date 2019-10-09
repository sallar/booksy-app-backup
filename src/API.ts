/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateShelfInput = {
  id?: string | null;
  name?: string | null;
  books?: Array<string> | null;
};

export type UpdateShelfInput = {
  id: string;
  name?: string | null;
  books?: Array<string> | null;
};

export type DeleteShelfInput = {
  id?: string | null;
};

export type CreateReviewInput = {
  id?: string | null;
  bookID: string;
  body: string;
  rating: number;
};

export type UpdateReviewInput = {
  id: string;
  bookID?: string | null;
  body?: string | null;
  rating?: number | null;
};

export type DeleteReviewInput = {
  id?: string | null;
};

export type ModelShelfFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  books?: ModelIDFilterInput | null;
  and?: Array<ModelShelfFilterInput | null> | null;
  or?: Array<ModelShelfFilterInput | null> | null;
  not?: ModelShelfFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelReviewFilterInput = {
  id?: ModelIDFilterInput | null;
  bookID?: ModelIDFilterInput | null;
  body?: ModelStringFilterInput | null;
  rating?: ModelIntFilterInput | null;
  and?: Array<ModelReviewFilterInput | null> | null;
  or?: Array<ModelReviewFilterInput | null> | null;
  not?: ModelReviewFilterInput | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type CreateShelfMutationVariables = {
  input: CreateShelfInput;
};

export type CreateShelfMutation = {
  createShelf: {
    __typename: 'Shelf';
    id: string;
    name: string | null;
    books: Array<string> | null;
  } | null;
};

export type UpdateShelfMutationVariables = {
  input: UpdateShelfInput;
};

export type UpdateShelfMutation = {
  updateShelf: {
    __typename: 'Shelf';
    id: string;
    name: string | null;
    books: Array<string> | null;
  } | null;
};

export type DeleteShelfMutationVariables = {
  input: DeleteShelfInput;
};

export type DeleteShelfMutation = {
  deleteShelf: {
    __typename: 'Shelf';
    id: string;
    name: string | null;
    books: Array<string> | null;
  } | null;
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput;
};

export type CreateReviewMutation = {
  createReview: {
    __typename: 'Review';
    id: string;
    bookID: string;
    body: string;
    rating: number;
  } | null;
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput;
};

export type UpdateReviewMutation = {
  updateReview: {
    __typename: 'Review';
    id: string;
    bookID: string;
    body: string;
    rating: number;
  } | null;
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput;
};

export type DeleteReviewMutation = {
  deleteReview: {
    __typename: 'Review';
    id: string;
    bookID: string;
    body: string;
    rating: number;
  } | null;
};

export type GetShelfQueryVariables = {
  id: string;
};

export type GetShelfQuery = {
  getShelf: {
    __typename: 'Shelf';
    id: string;
    name: string | null;
    books: Array<string> | null;
  } | null;
};

export type ListShelfsQueryVariables = {
  filter?: ModelShelfFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListShelfsQuery = {
  listShelfs: {
    __typename: 'ModelShelfConnection';
    items: Array<{
      __typename: 'Shelf';
      id: string;
      name: string | null;
      books: Array<string> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetReviewQueryVariables = {
  id: string;
};

export type GetReviewQuery = {
  getReview: {
    __typename: 'Review';
    id: string;
    bookID: string;
    body: string;
    rating: number;
  } | null;
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListReviewsQuery = {
  listReviews: {
    __typename: 'ModelReviewConnection';
    items: Array<{
      __typename: 'Review';
      id: string;
      bookID: string;
      body: string;
      rating: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateShelfSubscription = {
  onCreateShelf: {
    __typename: 'Shelf';
    id: string;
    name: string | null;
    books: Array<string> | null;
  } | null;
};

export type OnUpdateShelfSubscription = {
  onUpdateShelf: {
    __typename: 'Shelf';
    id: string;
    name: string | null;
    books: Array<string> | null;
  } | null;
};

export type OnDeleteShelfSubscription = {
  onDeleteShelf: {
    __typename: 'Shelf';
    id: string;
    name: string | null;
    books: Array<string> | null;
  } | null;
};

export type OnCreateReviewSubscription = {
  onCreateReview: {
    __typename: 'Review';
    id: string;
    bookID: string;
    body: string;
    rating: number;
  } | null;
};

export type OnUpdateReviewSubscription = {
  onUpdateReview: {
    __typename: 'Review';
    id: string;
    bookID: string;
    body: string;
    rating: number;
  } | null;
};

export type OnDeleteReviewSubscription = {
  onDeleteReview: {
    __typename: 'Review';
    id: string;
    bookID: string;
    body: string;
    rating: number;
  } | null;
};
