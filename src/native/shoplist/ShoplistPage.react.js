/** Created by hhj on 8/8/16. */
import React, { PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import { IconToggle, Icon } from 'react-native-material-design'
import { CenteredContainer, Text } from '../app/components'

const style = StyleSheet.create({
  column: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default class ShoplistPage extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <View style={style.column}>
        <View style={[style.row]}>
          <IconToggle color="red300">
            <Icon name="golf-course" />
          </IconToggle>
        </View>
        <View style={style.row}>
          <IconToggle color="red300">
            <Icon name="call" />
          </IconToggle>
          <IconToggle color="red300">
            <Icon name="pause" />
          </IconToggle>
        </View>
      </View>
    )
  }
}
