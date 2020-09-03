import { gql } from "@apollo/client";

export const LOOKUP_FUNDAMENTAL = gql`
  query(
    $identifier: String!
    $statementCode: String
    $fiscalYear: Int
    $fiscalPeriod: String
  ) {
    lookupFundamental(
      identifier: $identifier
      statementCode: $statementCode
      fiscalYear: $fiscalYear
      fiscalPeriod: $fiscalPeriod
    ) {
      id
      statement_code
      fiscal_year
      fiscal_period
      type
      start_date
      end_date
      filing_date
      is_latest
      company {
        id
        ticker
        name
        lei
        cik
      }
    }
  }
`;

export const GET_STANDARDIZED_FINANCIALS = gql`
  query($id: String!) {
    getFundamentalStandardizedFinancials(id: $id) {
      standardized_financials {
        data_tag {
          id
          name
          tag
          parent
          sequence
          factor
          balance
          unit
        }
        value
      }
      fundamental {
        id
        statement_code
        fiscal_year
        fiscal_period
        type
        start_date
        end_date
        filing_date
        is_latest
        company {
          id
          ticker
          name
          lei
          cik
        }
      }
      nextPage
    }
  }
`;
