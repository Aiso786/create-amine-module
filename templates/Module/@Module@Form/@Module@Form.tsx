import * as React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Translate,
  withLocalize,
  LocalizeContextProps,
} from 'react-localize-redux';

import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import { getRegionOptions } from 'Store';
import { IState } from 'Model/State';

import './@Module@Form.scss';
import Checkbox from 'components/Checkbox/Checkbox';
import { @module@AddRequest, @module@UpdateRequest } from './@Module@Form.actions';
import { IOption } from 'Model';
import { I@Module@ } from '../@Module@.model';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IOwnProps {
  @module@?: I@Module@;
}
interface IStateProps {
  translate?: any;
}

interface IDispatchProps {
  @module@AddRequest: (payload: any, callback?) => void;
  @module@UpdateRequest: (payload: any, callback?) => void;
}

type @Module@FormProps = IStateProps &
  IDispatchProps &
  IOwnProps &
  LocalizeContextProps &
  RouteComponentProps;

class @Module@Form extends React.Component<@Module@FormProps> {
  onSubmit = (values, { setSubmitting }) => {
    const @module@ = this.props.@module@;
    if (@module@) {
      this.props.@module@UpdateRequest(values, this.callback(setSubmitting));
    } else {
      this.props.@module@AddRequest(values, this.callback(setSubmitting));
    }
  };
  callback = (setSubmitting) => (someValue: any, isError: boolean) => {
    setSubmitting(false);
    if (!isError) {
      this.goBack();
    }
  };
  goBack = () => {
    this.props.history.goBack();
  };

  public render() {
    const { translate, @module@ } = this.props;

    const requiredKey = 'errors.required';
    const schema = Yup.object().shape({
      name: Yup.string().required(translate(requiredKey)),
    });
    const initialValues: I@Module@ = Object.assign(
      {},
      {
        name: '',
      },
      @module@ ? @module@ : {}
    );
    return (
      <div className="">
        <Formik
          validationSchema={schema}
          initialValues={initialValues}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        >
          {(props) => {
            const { isSubmitting } = props;
            return (
              <Form className="@module@form">
                <article className="af-panel af-panel--new">
                  <section className="af-panel__content">
                    <Field
                      labelClassName="col-xs-12 col-md-4"
                      inputClassName="col-xs-12 col-md-8"
                      component={Input}
                      title="@module@.form.name"
                      type="text"
                      name="name"
                      requiredStar
                    />
                  </section>
                </article>
                <div className="@module@form__footer pb-2">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    className="btn af-btn af-btn--hasiconLeft af-btn--reverse mr-2"
                    title="Retour"
                    onClick={this.goBack}
                  >
                    <Translate id="actions.back" />
                    <span className="glyphicon glyphicon-arrowthin-left"></span>
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn af-btn af-btn--hasiconRight"
                    title="valider"
                  >
                    <Translate id="actions.validate" />
                    <span className="glyphicon glyphicon-arrowthin-right"></span>
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IStateProps => ({
});

export default withRouter(
  connect(mapStateToProps, {
    @module@AddRequest,
    @module@UpdateRequest,
  })(withLocalize(@Module@Form))
);
