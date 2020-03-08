import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class Header extends React.Component {

    constructor(props) {
        super(props)
        this.navigation = props.navigation;
      }
  _goBack = () => console.log('Went back');

  _handleSearch = () => console.log('Searching');

  _handleMore = () => console.log('Shown more');

  render() {
    return (
      <Appbar.Header>
        {/* <Appbar.BackAction
          onPress={this._goBack}
        /> */}
        <Appbar.Action icon="menu" onPress={() => this.navigation.openDrawer()} />
        <Appbar.Content
          title="KCHS"
          subtitle="Charleston Air Force Base/Intl"
        />
        <Appbar.Action icon="share" onPress={this._handleMore} />
      </Appbar.Header>
    );
  }
}