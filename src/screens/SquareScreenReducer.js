import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

const  SquareScreenReducer = () => {

    const reducer = (state, action) =>{
        // action be like how to change state
        //state === {red:number, green: number, blue:number}
        //action === { colorToChange : red || green || blue, amount: 15 || -15 }

        switch(action.colorToChange){

            case 'Red':
                return state.Red + action.amount > 255 || state.Red + action.amount < 0 
                ? state
                :{ ...state, Red: state.Red + action.amount };
            case 'Green':
                return state.Green + action.amount > 255 || state.Green + action.amount < 0
                ? state
                : { ...state, Green: state.Green + action.amount };
            case 'Blue':
                return state.Blue + action.amount > 255 || state.Blue + action.amount <0 
                ? state
                : { ...state, Blue: state.Blue + action.amount};
            default:
                return;
        }

    };

    const [state, runMyReducer] = useReducer(reducer, {Red:0, Green:0, Blue:0});
    const {Red, Green, Blue} = state;

    return(
        <View>
            <ColorCounter
                onIncrease={()=> runMyReducer({ colorToChange: 'Red', amount: COLOR_INCREMENT })}
                onDecrease={()=> runMyReducer({ colorToChange: 'Red', amount: -1 * COLOR_INCREMENT})}
                color='Red' 
            />
            <ColorCounter 
                onIncrease={()=> runMyReducer({ colorToChange: 'Blue', amount: COLOR_INCREMENT })}
                onDecrease={()=> runMyReducer({ colorToChange: 'Blue', amount: -1 * COLOR_INCREMENT})}
                color='Blue' 
            />
            <ColorCounter 
                onIncrease={()=> runMyReducer({ colorToChange: 'Green', amount: COLOR_INCREMENT })}
                onDecrease={()=> runMyReducer({ colorToChange: 'Green', amount: -1 * COLOR_INCREMENT})}
                color='Green' 
            />

            <View style={{ height:150, width:150, backgroundColor: `rgb(${state.Red}, ${state.Green}, ${state.Blue})`}}></View>
        </View>
    );
}

const Styles = StyleSheet.create({});

export default SquareScreenReducer;