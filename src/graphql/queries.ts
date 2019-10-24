// tslint:disable
// this is an auto generated file. This will be overwritten

export const getShelf = `query GetShelf($id: ID!) {
  getShelf(id: $id) {
    id
    name
    key
    books {
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
      books {
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
    bookId
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
      bookId
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
    fullTitle
    series
    editionName
    localId
    lcClassifications
    revision
    latestRevision
    sourceRecords
    languages {
      key
    }
    subjects
    publishCountry
    byStatement
    oclcNumbers
    type {
      key
    }
    description {
      type
      value
    }
    lastModified {
      type
      value
    }
    key
    authors {
      key
    }
    pagination
    created {
      type
      value
    }
    numberOfPages
    deweyDecimalClass
    isbn13
    isbn10
    subjectPlaces
    publishDate
    works {
      key
    }
    shelves {
      items {
        id
      }
      nextToken
    }
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
      fullTitle
      series
      editionName
      localId
      lcClassifications
      revision
      latestRevision
      sourceRecords
      languages {
        key
      }
      subjects
      publishCountry
      byStatement
      oclcNumbers
      type {
        key
      }
      description {
        type
        value
      }
      lastModified {
        type
        value
      }
      key
      authors {
        key
      }
      pagination
      created {
        type
        value
      }
      numberOfPages
      deweyDecimalClass
      isbn13
      isbn10
      subjectPlaces
      publishDate
      works {
        key
      }
      shelves {
        nextToken
      }
    }
    nextToken
  }
}
`;
