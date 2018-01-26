import * as React from 'react'
import * as PropTypes from 'prop-types'
import { RouteComponentProps } from 'react-router';

import NumberGenerator from './NumberGenerator';
import NumberInput from './NumberInput';
import NumberStatus from './NumberStatus'


type Props = {}
interface State {
    isGuessing: boolean;
    guessNumber: number;
    numberOfTries: number;
    lastGuess: string;
    message: string;
    highestguess: number;
    lowestguess: number;   
}

export class NumberGuess extends React.Component<RouteComponentProps<{}>, State>{

    constructor(){
        super()
        this.state ={
            isGuessing: false,
            guessNumber: 0,
            numberOfTries: 0,
            lastGuess: '',
            message: '',
            highestguess: 100,
            lowestguess: 0
        }

        this.generateNumber = this.generateNumber.bind(this);
        this.generateGuessNumber = this.generateGuessNumber.bind(this);
        this.processGuess = this.processGuess.bind(this);
    }

    generateNumber(){
        return Math.floor((Math.random() * 100) + 1);
    }

    generateGuessNumber(){

        this.setState( {
            isGuessing : true,
            guessNumber : this.generateNumber(),
            numberOfTries: 0,
            lastGuess: '',
            message: '',
            highestguess: 100,
            lowestguess: 0
        });
    }

    processGuess(guessnumber : string){
        let guessInt = parseInt(guessnumber, 10)

        let numberOfTries = this.state.numberOfTries + 1
        let message = 'The anwser is greater than ' + guessnumber
        let lowestguess = this.state.lowestguess
        let highestguess = this.state.highestguess
        let isGuessing = this.state.isGuessing

        if(guessInt === this.state.guessNumber){
            isGuessing = false
            message = 'Well done you have guessed correctly ' + guessnumber
        }else if(guessInt >= this.state.guessNumber) {
            if(highestguess > guessInt){
                highestguess = guessInt
            }
            message = 'The anwser is less than ' + guessnumber
        }else{
            if(lowestguess < guessInt)
            {
                lowestguess = guessInt
            }
        }

        this.setState( {
            isGuessing,
            message,
            numberOfTries,
            highestguess,
            lowestguess
        });

    }

    public render(){
        return ( 
        <div>
            <NumberGenerator 
                    isGuessing={this.state.isGuessing} 
                    handleGenerateNumber={this.generateGuessNumber}
                    guessNumber={this.state.guessNumber} />
            <NumberStatus 
                message={this.state.message}
                numberOfTries={this.state.numberOfTries}
                lowestguess={this.state.lowestguess}
                highestguess={this.state.highestguess}
            />
            <NumberInput /*lastGuess={parseInt(this.state.lastGuess, 10)} */
                processGuess={this.processGuess} />
        </div>)
    }
}