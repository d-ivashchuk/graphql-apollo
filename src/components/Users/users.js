import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import User from './User/user.js';

const StyledLoading = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  &:after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid grey;
    border-color: grey transparent grey transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
const users = () => (
  <Query
    query={gql`
      {
        allUsers {
          id
          firstName
          lastName
          email
          avatar
        }
      }
    `}>
    {({ loading, error, data }) => {
      if (loading) return <StyledLoading />;
      if (error) return <p>Error :(</p>;

      return data.allUsers.map(user => <User key={user.id} user={user} />);
    }}
  </Query>
);

export default users;
