import { gql } from "@apollo/client";

export const GET_COMPANY_DATA_TAG = gql`
  query companyDataPointText($identifier: String!, $tag: String!) {
    companyDataPointText(identifier: $identifier, tag: $tag)
  }
`;
