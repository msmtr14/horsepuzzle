/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, TouchableOpacity, SafeAreaView, View} from 'react-native';

export default class App extends Component {
  state = {
    raceCard: null,
    race: 0,
  };

  componentDidMount() {}

  horseProblem = (n: number) => {
    const race = Math.ceil(Math.sqrt(n));
    let raceCard: any = [];

    for (let i: number = 1; i <= race; i++) {
      let temp: any = [];
      for (let j: number = 1; j <= race; j++) {
        temp.push(`R${i}${j}`);
      }
      raceCard[`R${i}`] = temp;
    }
    console.log(raceCard.R1);
    return this.setState({raceCard, race});
  };

  render() {
    const arr = [1, 2, 3, 4, 5];
    return (
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => this.horseProblem(25)}
          style={{
            width: '60%',
            height: 35,
            backgroundColor: '#8f3',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 50,
          }}>
          <Text>Generate 25 Horses</Text>
        </TouchableOpacity>

        {this.state.raceCard !== null && (
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 50,
              minHeight: 100,
              paddingVertical: 20,
            }}>
            <Text style={{marginBottom: 20, textAlign: 'justify'}}>
              R represents the race of horse and in Rnm, n represents the race
              number and m represent the horse number. So I have arrange the
              horse race in increasing order means R15 is faster than R11, R12,
              R13 & R14. Minimum {this.state.race + 2} Races to find the 2nd &
              3rd Fastest Horse.
            </Text>

            {arr.map((keyId: any, i: number) => (
              <View
                key={i}
                style={{
                  width: '100%',
                  height: 25,
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                {this.state.raceCard[`R${keyId}`].map((item, j) => (
                  <Text key={j} style={{fontSize: 16, fontWeight: '500'}}>
                    {item}
                  </Text>
                ))}
              </View>
            ))}
            <View style={{width: '90%', marginTop: 30}}>
              <Text
                style={{fontSize: 18, fontWeight: '600', textAlign: 'center'}}>
                Fastest Horse is "{this.state.raceCard.R1[4]}"
              </Text>
            </View>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
