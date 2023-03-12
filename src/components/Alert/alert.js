import  { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { closeAlert } from 'actions/todos';
import 'react-toastify/dist/ReactToastify.css';

const Notification = props => {
  const dispatch = useDispatch();

  const notify = (message, kind, timeout) => {
    if (kind === 'info') {
      toast.info(message, { autoClose: timeout });
    } else if (kind === 'warning') {
      toast.warn(message);
    } else if (kind === 'success') {
      toast.success(message, { autoClose: timeout });
    } else if (kind === 'error') {
      toast.error(message, { autoClose: timeout });
    } else {
      toast(message, { autoClose: timeout });
    }
  };

  const silenceToast = () => {
    dispatch(closeAlert());
  };

  useEffect(() => {
    const {todos} = props;
    const {
      alert: { message, show, kind, timeout }
    } = todos;
    if (show) {
      notify(message, kind, timeout);
      silenceToast();
    }
  });

  return <ToastContainer/>;
};

const mapStateToProps = state => {
  const { todos } = state;
  return {
    todos
  };
};

export default connect(mapStateToProps)(Notification);
