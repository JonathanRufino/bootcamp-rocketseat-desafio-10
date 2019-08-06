import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background } from '~/components';

// import { Container } from './styles';

function Meetups() {
  return <Background />;
}

Meetups.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default Meetups;