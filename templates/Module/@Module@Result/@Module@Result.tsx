import React, { Component } from 'react';
import { connect } from 'react-redux';
import RemotePagination from 'components/RemotePagination/RemotePagination';
import { withLocalize, LocalizeContextProps } from 'react-localize-redux';
import { Loader } from '@axa-fr/react-toolkit-all';

import { @module@Request } from './@Module@Result.actions';
import {
  get@Module@Filter,
  get@Module@Pagination,
  get@Module@Results,
  isLoading,
} from 'Store';
import { IState } from 'Model';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IStateProps {
  filter: any;
  pagination: any;
  results: any;
  isLoading: any;
}

interface IDispatchProps {
  @module@Request: (payload: any, callback?: any) => void;
}

type @Module@ResultProps = IStateProps &
  IDispatchProps &
  LocalizeContextProps &
  RouteComponentProps;

class @Module@Result extends Component<@Module@ResultProps> {
  constructor(props) {
    super(props);
    this.onTableChange = this.onTableChange.bind(this);
    this.onRowClick = this.onRowClick.bind(this);

    this.state = {};
  }

  onRowClick(e, row) {
    const { history } = this.props;
    history.push(`/administration/@module@/${row.id}`);
  }

  onTableChange = (type, { page, sizePerPage }) => {
    const { filter } = this.props;
    this.props.@module@Request(
      Object.assign({}, filter, {
        currentPage: page,
        pageSize: sizePerPage,
      })
    );
  };

  render() {
    const { translate, pagination, results, isLoading } = this.props;
    const { currentPage, pageSize, totalNumberOfRecords } = pagination;
    const columns = [
      {
        dataField: 'name',
        text: translate('@module@.table.name'),
      }
    ];
    return (
      <div className="result">
        {isLoading && <Loader />}
        {!isLoading && (
          <div>
            <RemotePagination
              keyField="id"
              data={Object.values(results)}
              columns={columns}
              page={currentPage}
              sizePerPage={pageSize}
              totalSize={totalNumberOfRecords}
              onTableChange={this.onTableChange}
              rowEvents={{ onClick: this.onRowClick }}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IStateProps => ({
  filter: get@Module@Filter(state),
  pagination: get@Module@Pagination(state),
  results: get@Module@Results(state),
  isLoading: isLoading(['@MODULE@'], state),
});

export default withLocalize(
  connect(mapStateToProps, { @module@Request })(withRouter(@Module@Result))
);
