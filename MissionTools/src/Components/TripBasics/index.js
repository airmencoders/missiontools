import React, { Component } from 'react'
import { Headline } from 'react-native-paper';
import { StyleSheet, SafeAreaView,} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Avatar, Button, Card, Title, Paragraph, TextInput, withTheme } from 'react-native-paper';




class TripBasics extends Component {

  constructor(props) {
    super(props)
    this.state = {
  
    }
  }

  handleOpenSignIn = () => {
    this.setState({ open: true })
  }

  onCloseSignIn = () => {
    this.setState({ open: false })
  }

  render() {
    const { isSignedIn, classes } = this.props
    const { open } = this.state

 
    return (
      <>
      <Card>

    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
      <TextInput
        label='Enter Minutes After Alert'
        value={this.state.text}
        mode="outlined"
       
        style={styles.textinput}
        onChangeText={text => this.setState({ text })}
      />
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
          
      </>
    )
  }
}
const styles = StyleSheet.create({
    textinput: {
      height: 35
    },

  });

// const styles = (theme) => {
//     return {
//         container:{
//             backgroundColor: 'red'
//         },
//         textinput:{
//             height: 250,
//             backgroundColor:'yellow'
//         }
//     }
//   }

export default withTheme(TripBasics)



