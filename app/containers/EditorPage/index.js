/*
 *
 * EditorPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeEditing } from './selectors';

import * as actions from './actions';

// eslint-disable-next-line react/prefer-stateless-function
export class EditorPage extends React.PureComponent {
  constructor() {
    super();

    this.onToggleClick = this.onToggleClick.bind(this);
  }

  onToggleClick() {
    this.props.actions.toggleEditor();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>test: {this.props.editing ? 'on' : 'off'}</p>
          </div>
          <div className="col-md-6">
            <button className="btn btn-default" onClick={this.onToggleClick}>
              Button
            </button>
          </div>
        </div>
      </div>
    );
  }
}

EditorPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

// const mapStateToProps = createStructuredSelector({
//   EditorPage: makeSelectEditorPage(),
// });

const mapStateToProps = createStructuredSelector({
  editing: makeEditing(),
});

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorPage);
