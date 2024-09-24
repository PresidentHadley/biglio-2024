/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAudioFile = /* GraphQL */ `
  mutation CreateAudioFile(
    $input: CreateAudioFileInput!
    $condition: ModelAudioFileConditionInput
  ) {
    createAudioFile(input: $input, condition: $condition) {
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
export const updateAudioFile = /* GraphQL */ `
  mutation UpdateAudioFile(
    $input: UpdateAudioFileInput!
    $condition: ModelAudioFileConditionInput
  ) {
    updateAudioFile(input: $input, condition: $condition) {
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
export const deleteAudioFile = /* GraphQL */ `
  mutation DeleteAudioFile(
    $input: DeleteAudioFileInput!
    $condition: ModelAudioFileConditionInput
  ) {
    deleteAudioFile(input: $input, condition: $condition) {
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
