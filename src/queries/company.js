import { gql } from "@apollo/client";

export const GET_COMPANY_TAG_NUMBER = gql`
  query($identifier: String!, $tag: String!) {
    getCompanyTagNumber(identifier: $identifier, tag: $tag) {
      identifier
      tag
      value
      error {
        clientError
        serverError
        errorCode
        redirect
        text
        method
        path
        hint
      }
    }
  }
`;

export const GET_COMPANY_TAG_TEXT = gql`
  query($identifier: String!, $tag: String!) {
    getCompanyTagText(identifier: $identifier, tag: $tag) {
      identifier
      tag
      value
      error {
        clientError
        serverError
        errorCode
        redirect
        text
        method
        path
        hint
      }
    }
  }
`;

export const GET_COMPANY_HISTORICAL_DATA = gql`
  query(
    $identifier: String!
    $tag: String!
    $frequency: String
    $type: String
    $startDate: Date
    $endDate: Date
    $sortOrder: String
    $pageSize: Int
    $nextPage: String
  ) {
    getCompanyHistoricalData(
      identifier: $identifier
      tag: $tag
      frequency: $frequency
      type: $type
      startDate: $startDate
      endDate: $endDate
      sortOrder: $sortOrder
      pageSize: $pageSize
      nextPage: $nextPage
    ) {
      historical_data {
        date
        value
      }
      company {
        id
        ticker
        name
        lei
        cik
      }
      next_page
    }
  }
`;
