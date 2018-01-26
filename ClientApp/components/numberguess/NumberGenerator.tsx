import * as React from 'react'
import * as PropTypes from 'prop-types'

interface NumberGeneratorProps {
    isGuessing: boolean,
    handleGenerateNumber: ()=> void,
    guessNumber : number,
}

const NumberGenerator: React.SFC<NumberGeneratorProps> = ( {isGuessing, handleGenerateNumber, guessNumber} )=>{
    return (
        <div>
            <h2>Number Guesser</h2>
            {/* <div>{guessNumber}</div> */}
            { (!isGuessing) ? <button onClick={handleGenerateNumber}>Generator Number</button> : '' }
        </div>)
}

NumberGenerator.propTypes ={
    isGuessing : PropTypes.bool,
    handleGenerateNumber : PropTypes.func,
    guessNumber : PropTypes.number
}

NumberGenerator.defaultProps = {
    isGuessing : false,
    handleGenerateNumber: () => {},
    guessNumber : 0
}

export default NumberGenerator