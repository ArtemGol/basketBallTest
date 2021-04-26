import React from 'react'
import notFound from '../assets/images/notfound.png'
import {EmptyHereNotFoundStyles} from "../styles/EmptyHereNotFoundStyles"

export const NotFound = () => {
  return (
    <EmptyHereNotFoundStyles unFound>
      <img src={notFound} alt="notFound"/>
      <div className={'firstSpan'}>
        Page not found
      </div>
      <div className={'secondSpan'}>
        Sorry, we can't find what you're looking for
      </div>
    </EmptyHereNotFoundStyles>
  );
}