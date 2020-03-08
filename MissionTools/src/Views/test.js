import React, { Component } from 'react'
import { Headline } from 'react-native-paper';
import { StyleSheet, SafeAreaView,} from 'react-native';
import { withNavigation } from 'react-navigation';
import Header from '../Components/Header'
import TripBasics from '../Components/TripBasics'



class Test extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
    
        
      };
  constructor(props) {
    super(props)
    this.state = {
      open: false
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
      <Header navigation={this.props.navigation}/>
      <SafeAreaView style={styles.container}>
          

    <TripBasics />
    
    </SafeAreaView>
          
      </>
    )
  }
}



export default withNavigation(Test)



const styles = (theme) => {
    return {
        container:{
            backgroundColor: 'red'
        },
      content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        top: '33%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
      gradientBg: {
        background: 'linear-gradient(180deg, #ffffff 0%, #1672B9 100%);',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      },
      title: {
        color: 'white',
        marginBottom: theme.spacing.unit * 1
      },
      logo: {
        height: 300,
        marginBottom: theme.spacing.unit * 5
      },
      subtitle: {
        marginBottom: theme.spacing.unit * 5,
        color: theme.palette.grey['100'],
        marginTop: theme.spacing.unit * 4
      }
    }
  }