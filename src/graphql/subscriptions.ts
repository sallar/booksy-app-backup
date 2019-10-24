// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateShelf = `subscription OnCreateShelf($owner: String!) {
  onCreateShelf(owner: $owner) {
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
export const onUpdateShelf = `subscription OnUpdateShelf($owner: String!) {
  onUpdateShelf(owner: $owner) {
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
export const onDeleteShelf = `subscription OnDeleteShelf($owner: String!) {
  onDeleteShelf(owner: $owner) {
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
export const onCreateShelfBook = `subscription OnCreateShelfBook {
  onCreateShelfBook {
    id
    shelf {
      id
      name
      key
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
export const onUpdateShelfBook = `subscription OnUpdateShelfBook {
  onUpdateShelfBook {
    id
    shelf {
      id
      name
      key
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
export const onDeleteShelfBook = `subscription OnDeleteShelfBook {
  onDeleteShelfBook {
    id
    shelf {
      id
      name
      key
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
export const onCreateReview = `subscription OnCreateReview($owner: String!) {
  onCreateReview(owner: $owner) {
    id
    bookId
    body
    rating
    owner
  }
}
`;
export const onUpdateReview = `subscription OnUpdateReview($owner: String!) {
  onUpdateReview(owner: $owner) {
    id
    bookId
    body
    rating
    owner
  }
}
`;
export const onDeleteReview = `subscription OnDeleteReview($owner: String!) {
  onDeleteReview(owner: $owner) {
    id
    bookId
    body
    rating
    owner
  }
}
`;
export const onCreateBook = `subscription OnCreateBook {
  onCreateBook {
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
export const onUpdateBook = `subscription OnUpdateBook {
  onUpdateBook {
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
export const onDeleteBook = `subscription OnDeleteBook {
  onDeleteBook {
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
