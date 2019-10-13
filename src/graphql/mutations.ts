// tslint:disable
// this is an auto generated file. This will be overwritten

export const createShelf = `mutation CreateShelf($input: CreateShelfInput!) {
  createShelf(input: $input) {
    id
    name
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
export const updateShelf = `mutation UpdateShelf($input: UpdateShelfInput!) {
  updateShelf(input: $input) {
    id
    name
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
export const deleteShelf = `mutation DeleteShelf($input: DeleteShelfInput!) {
  deleteShelf(input: $input) {
    id
    name
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
export const createShelfBook = `mutation CreateShelfBook($input: CreateShelfBookInput!) {
  createShelfBook(input: $input) {
    id
    shelf {
      id
      name
      books {
        nextToken
      }
      owner
    }
    book {
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
  }
}
`;
export const updateShelfBook = `mutation UpdateShelfBook($input: UpdateShelfBookInput!) {
  updateShelfBook(input: $input) {
    id
    shelf {
      id
      name
      books {
        nextToken
      }
      owner
    }
    book {
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
  }
}
`;
export const deleteShelfBook = `mutation DeleteShelfBook($input: DeleteShelfBookInput!) {
  deleteShelfBook(input: $input) {
    id
    shelf {
      id
      name
      books {
        nextToken
      }
      owner
    }
    book {
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
  }
}
`;
export const createReview = `mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input) {
    id
    bookId
    body
    rating
    owner
  }
}
`;
export const updateReview = `mutation UpdateReview($input: UpdateReviewInput!) {
  updateReview(input: $input) {
    id
    bookId
    body
    rating
    owner
  }
}
`;
export const deleteReview = `mutation DeleteReview($input: DeleteReviewInput!) {
  deleteReview(input: $input) {
    id
    bookId
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
export const updateBook = `mutation UpdateBook($input: UpdateBookInput!) {
  updateBook(input: $input) {
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
export const deleteBook = `mutation DeleteBook($input: DeleteBookInput!) {
  deleteBook(input: $input) {
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
