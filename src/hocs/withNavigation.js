import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export default ComposedComponent => {
  const mapDispatchToProps = (dispatch) => ({
    goTo(location){
      dispatch(push(location))
    }
  })

  return connect(null, mapDispatchToProps)(ComposedComponent);
}