/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateAudioFile = /* GraphQL */ `
  subscription OnCreateAudioFile(
    $filter: ModelSubscriptionAudioFileFilterInput
    $owner: String
  ) {
    onCreateAudioFile(filter: $filter, owner: $owner) {
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
export const onUpdateAudioFile = /* GraphQL */ `
  subscription OnUpdateAudioFile(
    $filter: ModelSubscriptionAudioFileFilterInput
    $owner: String
  ) {
    onUpdateAudioFile(filter: $filter, owner: $owner) {
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
export const onDeleteAudioFile = /* GraphQL */ `
  subscription OnDeleteAudioFile(
    $filter: ModelSubscriptionAudioFileFilterInput
    $owner: String
  ) {
    onDeleteAudioFile(filter: $filter, owner: $owner) {
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
