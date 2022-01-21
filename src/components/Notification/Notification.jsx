import React from 'react';

import { NotificationText } from './NotificationStyled';

const Notification = ({ message }) => (
  <NotificationText>{message}</NotificationText>
);
export default Notification;
