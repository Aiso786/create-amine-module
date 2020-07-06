import React, { useEffect } from 'react';
import { Translate } from 'react-localize-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import @Module@Form from './@Module@Form';
import { I@Module@ } from '../@Module@.model';
import { get@Module@ToEdit, isLoading } from 'Store';
import { IState } from 'Model';
import { connect } from 'react-redux';
import { @module@GetByIdRequest } from './@Module@Form.actions';

interface IOwnProps {
  _@module@?: I@Module@;
}
interface IStateProps {
  @module@ToEdit: I@Module@;
  isLoading: boolean;
}
interface IDispatchProps {
  @module@GetByIdRequest: (payload: any) => void;
}
type TParams = { id: string };
type I@Module@EditProps = IStateProps &
  IDispatchProps &
  IOwnProps &
  RouteComponentProps<TParams>;

const @Module@Edit: React.FunctionComponent<I@Module@EditProps> = (props) => {
  const { _@module@, @module@ToEdit, match, @module@GetByIdRequest, isLoading } = props;
  const @module@: I@Module@ = _@module@ || @module@ToEdit;

  useEffect(() => {
    if (!_@module@ && match.params.id) {
      @module@GetByIdRequest(match.params.id);
    }
  }, [_@module@, match.params.id, @module@GetByIdRequest]);

  return (
    <div className="af-form">
      <div className="container p0-xs">
        <h1 className="af-title--content hide_md">
          <Translate id="@module@.update.title"></Translate>
        </h1>
        {isLoading === false && @module@ && <@Module@Form @module@={@module@} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState): IStateProps => ({
  @module@ToEdit: get@Module@ToEdit(state),
  isLoading: isLoading(['@MODULE@.BYID'], state),
});

export default withRouter(
  connect(mapStateToProps, {
    @module@GetByIdRequest,
  })(@Module@Edit)
);
