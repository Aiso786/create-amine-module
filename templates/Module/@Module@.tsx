import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';

import @Module@Filter from './@Module@Filter/@Module@Filter';
import @Module@Result from './@Module@Result/@Module@Result';
import ErrorMessage from 'Modules/ErrorMessage/ErrorMessage';
import { getError } from 'Store';

import './@Module@.scss';

type @Module@Props = {
  error: any;
} & LocalizeContextProps;

class @Module@ extends Component<@Module@Props> {
  render() {
    const { error, translate } = this.props;
    return (
      <div className="container @module@">
        {!error && (
          <div className="d-flex">
            <@Module@Filter />
            <@Module@Result />
          </div>
        )}
        {error && (
          <ErrorMessage
            code={error}
            message={translate(`errors.${error}`)}
          ></ErrorMessage>
        )}
      </div>
    );
  }
}

export default withLocalize(
  connect(
    (state) => ({
      error: getError(['@MODULE@'], state),
    }),
    null
  )(@Module@)
);
