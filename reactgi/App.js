import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
//very easy
// class App extends Component{
//   render(){
//     return(
//       <div>
//         name: Kevin
//         number: 111111111
//         dob: 09/05/1999
//       </div>
//     )
//   }
// }
//Easy
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: { name: Kevin,
//                number: 111111111,
//                 dob: 9051999}
//     };
//   }

//   render() {
//     return (
//       <div>
//         {/* Your component's JSX goes here */}
//       </div>
//     );
//   }
// }
//Medium
// class BasicInfo extends Component {
//   render() {
//     const { name, number, dob } = this.props.person;
//     return (
//       <div>
//         <p>Name: {name}</p>
//         <p>Number: {number}</p>
//         <p>Date of Birth: {dob}</p>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: 'Kevin',
//         number: '111111111',
//         dob: '09/05/1999'
//       }
//     };
//   }

//   render() {
//     return (
//       <div>
//         <BasicInfo person={this.state.person} />
//       </div>
//     );
//   }
// }
//Hard
class BasicInfo extends Component {
  render() {
    const { name, number, dob } = this.props.person;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        <p>Date of Birth: {dob}</p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Kevin',
          number: '111111111',
          dob: '09/05/1999'
        },
        {
          name: 'Alice',
          number: '222222222',
          dob: '02/10/1990'
        },
        {
          name: 'Bob',
          number: '333333333',
          dob: '12/15/1985'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
