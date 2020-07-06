import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field } from 'formik';

import Input from 'components/Input/Input';
import { @module@Request } from '../@Module@Result/@Module@Result.actions';
import { @module@FilterChange, @module@FilterReset } from './@Module@Filter.actions';
import { get@Module@Filter, get@Module@Pagination, getRegionOptions } from 'Store';
import { IState } from 'Model/State';
import Filter from 'components/Filter/Filter';
import { I@Module@Filter } from './@Module@Filter.state.type';
import { IPaginationState } from 'Model';

interface IStateProps {
  filter: I@Module@Filter;
  pagination: IPaginationState;
}
interface IDispatchProps {
  @module@FilterChange: (payload: any) => void;
  @module@Request: (payload: any, callback?: any) => void;
  @module@FilterReset: () => void;
}

type @Module@FilterProps = IStateProps & IDispatchProps;

const initialValues: I@Module@Filter = {
  name: '',
};

class @Module@Filter extends Component<@Module@FilterProps> {
  onSubmit = (values, { setSubmitting }) => {
    const { @module@FilterChange, @module@Request, pagination } = this.props;
    @module@FilterChange({ ...values });
    @module@Request(Object.assign({}, values, pagination), () => {
      if (setSubmitting) {
        setSubmitting(false);
      }
    });
  };

  onReset = () => {
    const { @module@FilterReset } = this.props;
    @module@FilterReset();
  };

  componentDidMount = () => {
    this.onSubmit(initialValues, { setSubmitting: null });
  };

  render() {
    return (
      <Filter
        onReset={this.onReset}
        onSubmit={this.onSubmit}
        initialValues={initialValues}
      >
        <Field
          labelClassName="col-md-4"
          inputClassName="col-md-8"
          component={Input}
          title="@module@.filter.name"
          type="text"
          name="name"
        />
      </Filter>
    );
  }
}

const mapStateToProps = (state: IState): IStateProps => ({
  filter: get@Module@Filter(state),
  pagination: get@Module@Pagination(state),
});

export default connect(mapStateToProps, {
  @module@FilterChange,
  @module@Request,
  @module@FilterReset,
})(@Module@Filter);
