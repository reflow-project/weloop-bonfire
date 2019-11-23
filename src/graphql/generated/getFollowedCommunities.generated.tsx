import * as Types from '../types.generated.d';

import { BasicCommunityFragment } from '../fragments/generated/basicCommunity.generated';
import gql from 'graphql-tag';
import { BasicCommunityFragmentDoc } from '../fragments/generated/basicCommunity.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type GetFollowedCommunitiesQueryQueryVariables = {
  limit?: Types.Maybe<Types.Scalars['Int']>,
  endComm?: Types.Maybe<Types.Scalars['String']>
};


export type GetFollowedCommunitiesQueryQuery = (
  { __typename?: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename?: 'Me' }
    & { user: (
      { __typename?: 'User' }
      & Pick<Types.User, 'id'>
      & { followedCommunities: (
        { __typename?: 'FollowedCommunitiesEdges' }
        & { pageInfo: Types.Maybe<(
          { __typename?: 'PageInfo' }
          & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
        )>, edges: Array<Types.Maybe<(
          { __typename?: 'FollowedCommunitiesEdge' }
          & { node: (
            { __typename?: 'FollowedCommunity' }
            & { follow: (
              { __typename?: 'Follow' }
              & Pick<Types.Follow, 'id' | 'canonicalUrl'>
            ), community: (
              { __typename: 'Community' }
              & BasicCommunityFragment
            ) }
          ) }
        )>> }
      ) }
    ) }
  )> }
);


export const GetFollowedCommunitiesQueryDocument = gql`
    query getFollowedCommunitiesQuery($limit: Int, $endComm: String) {
  me {
    user {
      id
      followedCommunities(limit: $limit, after: $endComm) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          node {
            follow {
              id
              canonicalUrl
            }
            community {
              __typename
              ... on Community {
                ...BasicCommunity
              }
            }
          }
        }
      }
    }
  }
}
    ${BasicCommunityFragmentDoc}`;
export type GetFollowedCommunitiesQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables>, 'query'>;

    export const GetFollowedCommunitiesQueryComponent = (props: GetFollowedCommunitiesQueryComponentProps) => (
      <ApolloReactComponents.Query<GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables> query={GetFollowedCommunitiesQueryDocument} {...props} />
    );
    
export type GetFollowedCommunitiesQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables> & TChildProps;
export function withGetFollowedCommunitiesQuery<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetFollowedCommunitiesQueryQuery,
  GetFollowedCommunitiesQueryQueryVariables,
  GetFollowedCommunitiesQueryProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables, GetFollowedCommunitiesQueryProps<TChildProps>>(GetFollowedCommunitiesQueryDocument, {
      alias: 'getFollowedCommunitiesQuery',
      ...operationOptions
    });
};

/**
 * __useGetFollowedCommunitiesQueryQuery__
 *
 * To run a query within a React component, call `useGetFollowedCommunitiesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFollowedCommunitiesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFollowedCommunitiesQueryQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      endComm: // value for 'endComm'
 *   },
 * });
 */
export function useGetFollowedCommunitiesQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables>(GetFollowedCommunitiesQueryDocument, baseOptions);
      }
export function useGetFollowedCommunitiesQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables>(GetFollowedCommunitiesQueryDocument, baseOptions);
        }
export type GetFollowedCommunitiesQueryQueryHookResult = ReturnType<typeof useGetFollowedCommunitiesQueryQuery>;
export type GetFollowedCommunitiesQueryLazyQueryHookResult = ReturnType<typeof useGetFollowedCommunitiesQueryLazyQuery>;
export type GetFollowedCommunitiesQueryQueryResult = ApolloReactCommon.QueryResult<GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }

      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "ActivityContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Resource"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FlagContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Resource"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "LikeContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Resource"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ThreadContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Community"
          },
          {
            "name": "Flag"
          },
          {
            "name": "Resource"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FollowContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Community"
          },
          {
            "name": "Thread"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteContext",
        "possibleTypes": [
          {
            "name": "Activity"
          },
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Flag"
          },
          {
            "name": "Follow"
          },
          {
            "name": "Like"
          },
          {
            "name": "Resource"
          },
          {
            "name": "Thread"
          },
          {
            "name": "User"
          }
        ]
      }
    ]
  }
};

      export default result;
    