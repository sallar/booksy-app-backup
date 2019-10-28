// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateShelf = `subscription OnCreateShelf($owner: String!) {
  onCreateShelf(owner: $owner) {
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
export const onUpdateShelf = `subscription OnUpdateShelf($owner: String!) {
  onUpdateShelf(owner: $owner) {
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
export const onDeleteShelf = `subscription OnDeleteShelf($owner: String!) {
  onDeleteShelf(owner: $owner) {
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
export const onCreateShelfBook = `subscription OnCreateShelfBook {
  onCreateShelfBook {
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
export const onUpdateShelfBook = `subscription OnUpdateShelfBook {
  onUpdateShelfBook {
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
export const onDeleteShelfBook = `subscription OnDeleteShelfBook {
  onDeleteShelfBook {
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
export const onCreateUserBook = `subscription OnCreateUserBook($owner: String!) {
  onCreateUserBook(owner: $owner) {
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
export const onUpdateUserBook = `subscription OnUpdateUserBook($owner: String!) {
  onUpdateUserBook(owner: $owner) {
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
export const onDeleteUserBook = `subscription OnDeleteUserBook($owner: String!) {
  onDeleteUserBook(owner: $owner) {
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
export const onCreateReview = `subscription OnCreateReview($owner: String!) {
  onCreateReview(owner: $owner) {
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
export const onUpdateReview = `subscription OnUpdateReview($owner: String!) {
  onUpdateReview(owner: $owner) {
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
export const onDeleteReview = `subscription OnDeleteReview($owner: String!) {
  onDeleteReview(owner: $owner) {
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
export const onCreateBook = `subscription OnCreateBook {
  onCreateBook {
    id
    title
    subtitle
  }
}
`;
export const onUpdateBook = `subscription OnUpdateBook {
  onUpdateBook {
    id
    title
    subtitle
  }
}
`;
export const onDeleteBook = `subscription OnDeleteBook {
  onDeleteBook {
    id
    title
    subtitle
  }
}
`;
