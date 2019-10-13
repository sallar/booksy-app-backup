/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateShelfInput = {
  id?: string | null;
  name?: string | null;
};

export type UpdateShelfInput = {
  id: string;
  name?: string | null;
};

export type DeleteShelfInput = {
  id?: string | null;
};

export type CreateShelfBookInput = {
  id?: string | null;
  shelfBookShelfId: string;
  shelfBookBookId: string;
};

export type UpdateShelfBookInput = {
  id: string;
  shelfBookShelfId?: string | null;
  shelfBookBookId?: string | null;
};

export type DeleteShelfBookInput = {
  id?: string | null;
};

export type CreateReviewInput = {
  id?: string | null;
  bookId: string;
  body: string;
  rating: number;
};

export type UpdateReviewInput = {
  id: string;
  bookId?: string | null;
  body?: string | null;
  rating?: number | null;
};

export type DeleteReviewInput = {
  id?: string | null;
};

export type CreateBookInput = {
  id?: string | null;
  title: string;
  subtitle: string;
  fullTitle: string;
  series?: Array<string> | null;
  editionName?: string | null;
  localId?: Array<string> | null;
  lcClassifications?: Array<string> | null;
  revision: number;
  latestRevision: number;
  sourceRecords?: Array<string> | null;
  languages?: Array<ReferenceInput | null> | null;
  subjects?: Array<string> | null;
  publishCountry: string;
  byStatement?: string | null;
  oclcNumbers?: Array<string> | null;
  type: ReferenceInput;
  description: TypeReferenceInput;
  lastModified: TypeReferenceInput;
  key: string;
  authors: Array<ReferenceInput>;
  pagination: string;
  created: TypeReferenceInput;
  numberOfPages: number;
  deweyDecimalClass?: Array<string> | null;
  isbn13: Array<string>;
  isbn10: Array<string>;
  subjectPlaces?: Array<string> | null;
  publishDate: string;
  works: Array<ReferenceInput>;
};

export type ReferenceInput = {
  key: string;
};

export type TypeReferenceInput = {
  type: string;
  value: string;
};

export type UpdateBookInput = {
  id: string;
  title?: string | null;
  subtitle?: string | null;
  fullTitle?: string | null;
  series?: Array<string> | null;
  editionName?: string | null;
  localId?: Array<string> | null;
  lcClassifications?: Array<string> | null;
  revision?: number | null;
  latestRevision?: number | null;
  sourceRecords?: Array<string> | null;
  languages?: Array<ReferenceInput | null> | null;
  subjects?: Array<string> | null;
  publishCountry?: string | null;
  byStatement?: string | null;
  oclcNumbers?: Array<string> | null;
  type?: ReferenceInput | null;
  description?: TypeReferenceInput | null;
  lastModified?: TypeReferenceInput | null;
  key?: string | null;
  authors?: Array<ReferenceInput> | null;
  pagination?: string | null;
  created?: TypeReferenceInput | null;
  numberOfPages?: number | null;
  deweyDecimalClass?: Array<string> | null;
  isbn13?: Array<string> | null;
  isbn10?: Array<string> | null;
  subjectPlaces?: Array<string> | null;
  publishDate?: string | null;
  works?: Array<ReferenceInput> | null;
};

export type DeleteBookInput = {
  id?: string | null;
};

export type ModelShelfFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
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
  bookId?: ModelIDFilterInput | null;
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
  fullTitle?: ModelStringFilterInput | null;
  series?: ModelStringFilterInput | null;
  editionName?: ModelStringFilterInput | null;
  localId?: ModelStringFilterInput | null;
  lcClassifications?: ModelStringFilterInput | null;
  revision?: ModelIntFilterInput | null;
  latestRevision?: ModelIntFilterInput | null;
  sourceRecords?: ModelStringFilterInput | null;
  subjects?: ModelStringFilterInput | null;
  publishCountry?: ModelStringFilterInput | null;
  byStatement?: ModelStringFilterInput | null;
  oclcNumbers?: ModelStringFilterInput | null;
  key?: ModelStringFilterInput | null;
  pagination?: ModelStringFilterInput | null;
  numberOfPages?: ModelIntFilterInput | null;
  deweyDecimalClass?: ModelStringFilterInput | null;
  isbn13?: ModelStringFilterInput | null;
  isbn10?: ModelStringFilterInput | null;
  subjectPlaces?: ModelStringFilterInput | null;
  publishDate?: ModelStringFilterInput | null;
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
    books: {
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
    books: {
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
    books: {
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
      books: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
      fullTitle: string;
      series: Array<string> | null;
      editionName: string | null;
      localId: Array<string> | null;
      lcClassifications: Array<string> | null;
      revision: number;
      latestRevision: number;
      sourceRecords: Array<string> | null;
      languages: Array<{
        __typename: 'Reference';
        key: string;
      } | null> | null;
      subjects: Array<string> | null;
      publishCountry: string;
      byStatement: string | null;
      oclcNumbers: Array<string> | null;
      type: {
        __typename: 'Reference';
        key: string;
      };
      description: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      lastModified: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      key: string;
      authors: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      pagination: string;
      created: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      numberOfPages: number;
      deweyDecimalClass: Array<string> | null;
      isbn13: Array<string>;
      isbn10: Array<string>;
      subjectPlaces: Array<string> | null;
      publishDate: string;
      works: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
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
      books: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
      fullTitle: string;
      series: Array<string> | null;
      editionName: string | null;
      localId: Array<string> | null;
      lcClassifications: Array<string> | null;
      revision: number;
      latestRevision: number;
      sourceRecords: Array<string> | null;
      languages: Array<{
        __typename: 'Reference';
        key: string;
      } | null> | null;
      subjects: Array<string> | null;
      publishCountry: string;
      byStatement: string | null;
      oclcNumbers: Array<string> | null;
      type: {
        __typename: 'Reference';
        key: string;
      };
      description: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      lastModified: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      key: string;
      authors: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      pagination: string;
      created: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      numberOfPages: number;
      deweyDecimalClass: Array<string> | null;
      isbn13: Array<string>;
      isbn10: Array<string>;
      subjectPlaces: Array<string> | null;
      publishDate: string;
      works: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
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
      books: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
      fullTitle: string;
      series: Array<string> | null;
      editionName: string | null;
      localId: Array<string> | null;
      lcClassifications: Array<string> | null;
      revision: number;
      latestRevision: number;
      sourceRecords: Array<string> | null;
      languages: Array<{
        __typename: 'Reference';
        key: string;
      } | null> | null;
      subjects: Array<string> | null;
      publishCountry: string;
      byStatement: string | null;
      oclcNumbers: Array<string> | null;
      type: {
        __typename: 'Reference';
        key: string;
      };
      description: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      lastModified: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      key: string;
      authors: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      pagination: string;
      created: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      numberOfPages: number;
      deweyDecimalClass: Array<string> | null;
      isbn13: Array<string>;
      isbn10: Array<string>;
      subjectPlaces: Array<string> | null;
      publishDate: string;
      works: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
    };
  } | null;
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput;
};

export type CreateReviewMutation = {
  createReview: {
    __typename: 'Review';
    id: string;
    bookId: string;
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
    bookId: string;
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
    bookId: string;
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
    fullTitle: string;
    series: Array<string> | null;
    editionName: string | null;
    localId: Array<string> | null;
    lcClassifications: Array<string> | null;
    revision: number;
    latestRevision: number;
    sourceRecords: Array<string> | null;
    languages: Array<{
      __typename: 'Reference';
      key: string;
    } | null> | null;
    subjects: Array<string> | null;
    publishCountry: string;
    byStatement: string | null;
    oclcNumbers: Array<string> | null;
    type: {
      __typename: 'Reference';
      key: string;
    };
    description: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    lastModified: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    key: string;
    authors: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    pagination: string;
    created: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    numberOfPages: number;
    deweyDecimalClass: Array<string> | null;
    isbn13: Array<string>;
    isbn10: Array<string>;
    subjectPlaces: Array<string> | null;
    publishDate: string;
    works: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
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
    fullTitle: string;
    series: Array<string> | null;
    editionName: string | null;
    localId: Array<string> | null;
    lcClassifications: Array<string> | null;
    revision: number;
    latestRevision: number;
    sourceRecords: Array<string> | null;
    languages: Array<{
      __typename: 'Reference';
      key: string;
    } | null> | null;
    subjects: Array<string> | null;
    publishCountry: string;
    byStatement: string | null;
    oclcNumbers: Array<string> | null;
    type: {
      __typename: 'Reference';
      key: string;
    };
    description: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    lastModified: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    key: string;
    authors: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    pagination: string;
    created: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    numberOfPages: number;
    deweyDecimalClass: Array<string> | null;
    isbn13: Array<string>;
    isbn10: Array<string>;
    subjectPlaces: Array<string> | null;
    publishDate: string;
    works: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
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
    fullTitle: string;
    series: Array<string> | null;
    editionName: string | null;
    localId: Array<string> | null;
    lcClassifications: Array<string> | null;
    revision: number;
    latestRevision: number;
    sourceRecords: Array<string> | null;
    languages: Array<{
      __typename: 'Reference';
      key: string;
    } | null> | null;
    subjects: Array<string> | null;
    publishCountry: string;
    byStatement: string | null;
    oclcNumbers: Array<string> | null;
    type: {
      __typename: 'Reference';
      key: string;
    };
    description: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    lastModified: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    key: string;
    authors: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    pagination: string;
    created: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    numberOfPages: number;
    deweyDecimalClass: Array<string> | null;
    isbn13: Array<string>;
    isbn10: Array<string>;
    subjectPlaces: Array<string> | null;
    publishDate: string;
    works: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
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
    books: {
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
      books: {
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
    bookId: string;
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
      bookId: string;
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
    fullTitle: string;
    series: Array<string> | null;
    editionName: string | null;
    localId: Array<string> | null;
    lcClassifications: Array<string> | null;
    revision: number;
    latestRevision: number;
    sourceRecords: Array<string> | null;
    languages: Array<{
      __typename: 'Reference';
      key: string;
    } | null> | null;
    subjects: Array<string> | null;
    publishCountry: string;
    byStatement: string | null;
    oclcNumbers: Array<string> | null;
    type: {
      __typename: 'Reference';
      key: string;
    };
    description: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    lastModified: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    key: string;
    authors: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    pagination: string;
    created: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    numberOfPages: number;
    deweyDecimalClass: Array<string> | null;
    isbn13: Array<string>;
    isbn10: Array<string>;
    subjectPlaces: Array<string> | null;
    publishDate: string;
    works: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
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
      fullTitle: string;
      series: Array<string> | null;
      editionName: string | null;
      localId: Array<string> | null;
      lcClassifications: Array<string> | null;
      revision: number;
      latestRevision: number;
      sourceRecords: Array<string> | null;
      languages: Array<{
        __typename: 'Reference';
        key: string;
      } | null> | null;
      subjects: Array<string> | null;
      publishCountry: string;
      byStatement: string | null;
      oclcNumbers: Array<string> | null;
      type: {
        __typename: 'Reference';
        key: string;
      };
      description: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      lastModified: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      key: string;
      authors: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      pagination: string;
      created: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      numberOfPages: number;
      deweyDecimalClass: Array<string> | null;
      isbn13: Array<string>;
      isbn10: Array<string>;
      subjectPlaces: Array<string> | null;
      publishDate: string;
      works: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
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
    books: {
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
    books: {
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
    books: {
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
      books: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
      fullTitle: string;
      series: Array<string> | null;
      editionName: string | null;
      localId: Array<string> | null;
      lcClassifications: Array<string> | null;
      revision: number;
      latestRevision: number;
      sourceRecords: Array<string> | null;
      languages: Array<{
        __typename: 'Reference';
        key: string;
      } | null> | null;
      subjects: Array<string> | null;
      publishCountry: string;
      byStatement: string | null;
      oclcNumbers: Array<string> | null;
      type: {
        __typename: 'Reference';
        key: string;
      };
      description: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      lastModified: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      key: string;
      authors: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      pagination: string;
      created: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      numberOfPages: number;
      deweyDecimalClass: Array<string> | null;
      isbn13: Array<string>;
      isbn10: Array<string>;
      subjectPlaces: Array<string> | null;
      publishDate: string;
      works: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
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
      books: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
      fullTitle: string;
      series: Array<string> | null;
      editionName: string | null;
      localId: Array<string> | null;
      lcClassifications: Array<string> | null;
      revision: number;
      latestRevision: number;
      sourceRecords: Array<string> | null;
      languages: Array<{
        __typename: 'Reference';
        key: string;
      } | null> | null;
      subjects: Array<string> | null;
      publishCountry: string;
      byStatement: string | null;
      oclcNumbers: Array<string> | null;
      type: {
        __typename: 'Reference';
        key: string;
      };
      description: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      lastModified: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      key: string;
      authors: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      pagination: string;
      created: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      numberOfPages: number;
      deweyDecimalClass: Array<string> | null;
      isbn13: Array<string>;
      isbn10: Array<string>;
      subjectPlaces: Array<string> | null;
      publishDate: string;
      works: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
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
      books: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
    book: {
      __typename: 'Book';
      id: string;
      title: string;
      subtitle: string;
      fullTitle: string;
      series: Array<string> | null;
      editionName: string | null;
      localId: Array<string> | null;
      lcClassifications: Array<string> | null;
      revision: number;
      latestRevision: number;
      sourceRecords: Array<string> | null;
      languages: Array<{
        __typename: 'Reference';
        key: string;
      } | null> | null;
      subjects: Array<string> | null;
      publishCountry: string;
      byStatement: string | null;
      oclcNumbers: Array<string> | null;
      type: {
        __typename: 'Reference';
        key: string;
      };
      description: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      lastModified: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      key: string;
      authors: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      pagination: string;
      created: {
        __typename: 'TypeReference';
        type: string;
        value: string;
      };
      numberOfPages: number;
      deweyDecimalClass: Array<string> | null;
      isbn13: Array<string>;
      isbn10: Array<string>;
      subjectPlaces: Array<string> | null;
      publishDate: string;
      works: Array<{
        __typename: 'Reference';
        key: string;
      }>;
      shelves: {
        __typename: 'ModelShelfBookConnection';
        nextToken: string | null;
      } | null;
    };
  } | null;
};

export type OnCreateReviewSubscriptionVariables = {
  owner: string;
};

export type OnCreateReviewSubscription = {
  onCreateReview: {
    __typename: 'Review';
    id: string;
    bookId: string;
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
    bookId: string;
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
    bookId: string;
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
    fullTitle: string;
    series: Array<string> | null;
    editionName: string | null;
    localId: Array<string> | null;
    lcClassifications: Array<string> | null;
    revision: number;
    latestRevision: number;
    sourceRecords: Array<string> | null;
    languages: Array<{
      __typename: 'Reference';
      key: string;
    } | null> | null;
    subjects: Array<string> | null;
    publishCountry: string;
    byStatement: string | null;
    oclcNumbers: Array<string> | null;
    type: {
      __typename: 'Reference';
      key: string;
    };
    description: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    lastModified: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    key: string;
    authors: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    pagination: string;
    created: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    numberOfPages: number;
    deweyDecimalClass: Array<string> | null;
    isbn13: Array<string>;
    isbn10: Array<string>;
    subjectPlaces: Array<string> | null;
    publishDate: string;
    works: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateBookSubscription = {
  onUpdateBook: {
    __typename: 'Book';
    id: string;
    title: string;
    subtitle: string;
    fullTitle: string;
    series: Array<string> | null;
    editionName: string | null;
    localId: Array<string> | null;
    lcClassifications: Array<string> | null;
    revision: number;
    latestRevision: number;
    sourceRecords: Array<string> | null;
    languages: Array<{
      __typename: 'Reference';
      key: string;
    } | null> | null;
    subjects: Array<string> | null;
    publishCountry: string;
    byStatement: string | null;
    oclcNumbers: Array<string> | null;
    type: {
      __typename: 'Reference';
      key: string;
    };
    description: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    lastModified: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    key: string;
    authors: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    pagination: string;
    created: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    numberOfPages: number;
    deweyDecimalClass: Array<string> | null;
    isbn13: Array<string>;
    isbn10: Array<string>;
    subjectPlaces: Array<string> | null;
    publishDate: string;
    works: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteBookSubscription = {
  onDeleteBook: {
    __typename: 'Book';
    id: string;
    title: string;
    subtitle: string;
    fullTitle: string;
    series: Array<string> | null;
    editionName: string | null;
    localId: Array<string> | null;
    lcClassifications: Array<string> | null;
    revision: number;
    latestRevision: number;
    sourceRecords: Array<string> | null;
    languages: Array<{
      __typename: 'Reference';
      key: string;
    } | null> | null;
    subjects: Array<string> | null;
    publishCountry: string;
    byStatement: string | null;
    oclcNumbers: Array<string> | null;
    type: {
      __typename: 'Reference';
      key: string;
    };
    description: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    lastModified: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    key: string;
    authors: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    pagination: string;
    created: {
      __typename: 'TypeReference';
      type: string;
      value: string;
    };
    numberOfPages: number;
    deweyDecimalClass: Array<string> | null;
    isbn13: Array<string>;
    isbn10: Array<string>;
    subjectPlaces: Array<string> | null;
    publishDate: string;
    works: Array<{
      __typename: 'Reference';
      key: string;
    }>;
    shelves: {
      __typename: 'ModelShelfBookConnection';
      items: Array<{
        __typename: 'ShelfBook';
        id: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};
