/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      profilePicture
      bio
      audioFiles {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        profilePicture
        bio
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAudioFile = /* GraphQL */ `
  query GetAudioFile($id: ID!) {
    getAudioFile(id: $id) {
      id
      title
      category
      tags
      summary
      userId
      user {
        id
        username
        email
        profilePicture
        bio
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listAudioFiles = /* GraphQL */ `
  query ListAudioFiles(
    $filter: ModelAudioFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAudioFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        category
        tags
        summary
        userId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const audioFilesByUserId = /* GraphQL */ `
  query AudioFilesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAudioFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    audioFilesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        category
        tags
        summary
        userId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
