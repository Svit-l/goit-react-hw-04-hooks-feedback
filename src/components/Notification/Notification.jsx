import React from 'react';
import PropTypes from 'prop-types';
import { NotificationText } from './NotificationStyled';

const Notification = ({ message }) => (
  <NotificationText>{message}</NotificationText>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
