import * as React from 'react';
import @Module@Form from './@Module@Form/@Module@Form';
import { Translate } from 'react-localize-redux';

export default function @Module@Add() {
  return (
    <div className="af-form">
      <div className="container">
        <h1 className="af-title--content">
          <Translate id="@module@.add.title"></Translate>
        </h1>
        <@Module@Form />
      </div>
    </div>
  );
}
