import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// 1. function that maps state from components to a props Object
// 2. function that binds actionCreators to dispatch
// adds props from state to Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
