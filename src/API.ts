/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateShelfInput = {
  id?: string | null;
  name?: string | null;
  key?: string | null;
};

export type UpdateShelfInput = {
  id: string;
  name?: string | null;
  key?: string | null;
};

export type DeleteShelfInput = {
  id?: string | null;
};

export type CreateShelfBookInput = {
  id?: string | null;
  shelfBookShelfId: string;
  shelfBookUserBookId: string;
};

export type UpdateShelfBookInput = {
  id: string;
  shelfBookShelfId?: string | null;
  shelfBookUserBookId?: string | null;
};

export type DeleteShelfBookInput = {
  id?: string | null;
};

export type CreateUserBookInput = {
  id?: string | null;
  bookId: string;
};

export type UpdateUserBookInput = {
  id: string;
  bookId?: string | null;
};

export type DeleteUserBookInput = {
  id?: string | null;
};

export type CreateReviewInput = {
  id?: string | null;
  body: string;
  rating: number;
  bookId: string;
};

export type UpdateReviewInput = {
  id: string;
  body?: string | null;
  rating?: number | null;
  bookId?: string | null;
};

export type DeleteReviewInput = {
  id?: string | null;
};

export type CreateBookInput = {
  id?: string | null;
  title: string;
  subtitle: string;
};

export type UpdateBookInput = {
  id: string;
  title?: string | null;
  subtitle?: string | null;
};

export type DeleteBookInput = {
  id?: string | null;
};

export type ModelShelfFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  key?: ModelStringFilterInput | null;
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

export type ModelUserBookFilterInput = {
  id?: ModelIDFilterInput | null;
  and?: Array<ModelUserBookFilterInput | null> | null;
  or?: Array<ModelUserBookFilterInput | null> | null;
  not?: ModelUserBookFilterInput | null;
};

export type ModelReviewFilterInput = {
  id?: ModelIDFilterInput | null;
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

export type ModelBookFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  subtitle?: ModelStringFilterInput | null;
  and?: Array<ModelBookFilterInput | null> | null;
  or?: Array<ModelBookFilterInput | null> | null;
  not?: ModelBookFilterInput | null;
};

export type CreateShelfMutationVariables = {
  input: CreateShelfInput;
};

export type CreateShelfMutation = {
  createShelf: {
    __typename: 'Shelf';
    id: string;
    name: string | null;
    key: string | null;
    userBooks: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
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
    key: string | null;
    userBooks: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
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
    key: string | null;
    userBooks: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
};

export type CreateShelfBookMutationVariables = {
  input: CreateShelfBookInput;
};

export type CreateShelfBookMutation = {
  createShelfBook: {
    __typename: 'ShelfBook';
    id: string;
    shelf: {
      __typename: 'Shelf';
      id: string;
      name: string | null;
      key: string | null;
      userBooks: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    userBook: {
      __typename: 'UserBook';
      id: string;
      book: {
        __typename: 'Book';
        id: string;
        title: string;
        subtitle: string;
      };
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
  } | null;
};

export type UpdateShelfBookMutationVariables = {
  input: UpdateShelfBookInput;
};

export type UpdateShelfBookMutation = {
  updateShelfBook: {
    __typename: 'ShelfBook';
    id: string;
    shelf: {
      __typename: 'Shelf';
      id: string;
      name: string | null;
      key: string | null;
      userBooks: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    userBook: {
      __typename: 'UserBook';
      id: string;
      book: {
        __typename: 'Book';
        id: string;
        title: string;
        subtitle: string;
      };
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
  } | null;
};

export type DeleteShelfBookMutationVariables = {
  input: DeleteShelfBookInput;
};

export type DeleteShelfBookMutation = {
  deleteShelfBook: {
    __typename: 'ShelfBook';
    id: string;
    shelf: {
      __typename: 'Shelf';
      id: string;
      name: string | null;
      key: string | null;
      userBooks: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    userBook: {
      __typename: 'UserBook';
      id: string;
      book: {
        __typename: 'Book';
        id: string;
        title: string;
        subtitle: string;
      };
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
  } | null;
};

export type CreateUserBookMutationVariables = {
  input: CreateUserBookInput;
};

export type CreateUserBookMutation = {
  createUserBook: {
    __typename: 'UserBook';
    id: string;
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
};

export type UpdateUserBookMutationVariables = {
  input: UpdateUserBookInput;
};

export type UpdateUserBookMutation = {
  updateUserBook: {
    __typename: 'UserBook';
    id: string;
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
};

export type DeleteUserBookMutationVariables = {
  input: DeleteUserBookInput;
};

export type DeleteUserBookMutation = {
  deleteUserBook: {
    __typename: 'UserBook';
    id: string;
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput;
};

export type CreateReviewMutation = {
  createReview: {
    __typename: 'Review';
    id: string;
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    body: string;
    rating: number;
    owner: string | null;
  } | null;
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput;
};

export type UpdateReviewMutation = {
  updateReview: {
    __typename: 'Review';
    id: string;
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    body: string;
    rating: number;
    owner: string | null;
  } | null;
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput;
};

export type DeleteReviewMutation = {
  deleteReview: {
    __typename: 'Review';
    id: string;
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    body: string;
    rating: number;
    owner: string | null;
  } | null;
};

export type CreateBookMutationVariables = {
  input: CreateBookInput;
};

export type CreateBookMutation = {
  createBook: {
    __typename: 'Book';
    id: string;
    title: string;
    subtitle: string;
  } | null;
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput;
};

export type UpdateBookMutation = {
  updateBook: {
    __typename: 'Book';
    id: string;
    title: string;
    subtitle: string;
  } | null;
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput;
};

export type DeleteBookMutation = {
  deleteBook: {
    __typename: 'Book';
    id: string;
    title: string;
    subtitle: string;
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
    key: string | null;
    userBooks: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
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
      key: string | null;
      userBooks: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetUserBookQueryVariables = {
  id: string;
};

export type GetUserBookQuery = {
  getUserBook: {
    __typename: 'UserBook';
    id: string;
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
};

export type ListUserBooksQueryVariables = {
  filter?: ModelUserBookFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUserBooksQuery = {
  listUserBooks: {
    __typename: 'ModelUserBookConnection';
    items: Array<{
      __typename: 'UserBook';
      id: string;
      book: {
        __typename: 'Book';
        id: string;
        title: string;
        subtitle: string;
      };
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
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
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    body: string;
    rating: number;
    owner: string | null;
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
      book: {
        __typename: 'Book';
        id: string;
        title: string;
        subtitle: string;
      };
      body: string;
      rating: number;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetBookQueryVariables = {
  id: string;
};

export type GetBookQuery = {
  getBook: {
    __typename: 'Book';
    id: string;
    title: string;
    subtitle: string;
  } | null;
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListBooksQuery = {
  listBooks: {
    __typename: 'ModelBookConnection';
    items: Array<{
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateShelfSubscriptionVariables = {
  owner: string;
};

export type OnCreateShelfSubscription = {
  onCreateShelf: {
    __typename: 'Shelf';
    id: string;
    name: string | null;
    key: string | null;
    userBooks: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
};

export type OnUpdateShelfSubscriptionVariables = {
  owner: string;
};

export type OnUpdateShelfSubscription = {
  onUpdateShelf: {
    __typename: 'Shelf';
    id: string;
    name: string | null;
    key: string | null;
    userBooks: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
};

export type OnDeleteShelfSubscriptionVariables = {
  owner: string;
};

export type OnDeleteShelfSubscription = {
  onDeleteShelf: {
    __typename: 'Shelf';
    id: string;
    name: string | null;
    key: string | null;
    userBooks: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
};

export type OnCreateShelfBookSubscription = {
  onCreateShelfBook: {
    __typename: 'ShelfBook';
    id: string;
    shelf: {
      __typename: 'Shelf';
      id: string;
      name: string | null;
      key: string | null;
      userBooks: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    userBook: {
      __typename: 'UserBook';
      id: string;
      book: {
        __typename: 'Book';
        id: string;
        title: string;
        subtitle: string;
      };
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
  } | null;
};

export type OnUpdateShelfBookSubscription = {
  onUpdateShelfBook: {
    __typename: 'ShelfBook';
    id: string;
    shelf: {
      __typename: 'Shelf';
      id: string;
      name: string | null;
      key: string | null;
      userBooks: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    userBook: {
      __typename: 'UserBook';
      id: string;
      book: {
        __typename: 'Book';
        id: string;
        title: string;
        subtitle: string;
      };
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
  } | null;
};

export type OnDeleteShelfBookSubscription = {
  onDeleteShelfBook: {
    __typename: 'ShelfBook';
    id: string;
    shelf: {
      __typename: 'Shelf';
      id: string;
      name: string | null;
      key: string | null;
      userBooks: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    userBook: {
      __typename: 'UserBook';
      id: string;
      book: {
        __typename: 'Book';
        id: string;
        title: string;
        subtitle: string;
      };
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
  } | null;
};

export type OnCreateUserBookSubscriptionVariables = {
  owner: string;
};

export type OnCreateUserBookSubscription = {
  onCreateUserBook: {
    __typename: 'UserBook';
    id: string;
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
};

export type OnUpdateUserBookSubscriptionVariables = {
  owner: string;
};

export type OnUpdateUserBookSubscription = {
  onUpdateUserBook: {
    __typename: 'UserBook';
    id: string;
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
};

export type OnDeleteUserBookSubscriptionVariables = {
  owner: string;
};

export type OnDeleteUserBookSubscription = {
  onDeleteUserBook: {
    __typename: 'UserBook';
    id: string;
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null;
};

export type OnCreateReviewSubscriptionVariables = {
  owner: string;
};

export type OnCreateReviewSubscription = {
  onCreateReview: {
    __typename: 'Review';
    id: string;
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    body: string;
    rating: number;
    owner: string | null;
  } | null;
};

export type OnUpdateReviewSubscriptionVariables = {
  owner: string;
};

export type OnUpdateReviewSubscription = {
  onUpdateReview: {
    __typename: 'Review';
    id: string;
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    body: string;
    rating: number;
    owner: string | null;
  } | null;
};

export type OnDeleteReviewSubscriptionVariables = {
  owner: string;
};

export type OnDeleteReviewSubscription = {
  onDeleteReview: {
    __typename: 'Review';
    id: string;
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
    };
    body: string;
    rating: number;
    owner: string | null;
  } | null;
};

export type OnCreateBookSubscription = {
  onCreateBook: {
    __typename: 'Book';
    id: string;
    title: string;
    subtitle: string;
  } | null;
};

export type OnUpdateBookSubscription = {
  onUpdateBook: {
    __typename: 'Book';
    id: string;
    title: string;
    subtitle: string;
  } | null;
};

export type OnDeleteBookSubscription = {
  onDeleteBook: {
    __typename: 'Book';
    id: string;
    title: string;
    subtitle: string;
  } | null;
};
