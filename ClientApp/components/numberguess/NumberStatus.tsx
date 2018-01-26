
import * as React from 'react'
import * as PropTypes from 'prop-types'

interface NumberStatusProps {
    message: string,
    numberOfTries: number,
    lowestguess: number,
    highestguess: number
}

const NumberStatus: React.SFC<NumberStatusProps> = ( {message, numberOfTries, lowestguess, highestguess} )=>
    <div>
        <div>Upper Lowest guess so far  {lowestguess}</div>
        <div>Lower Highest guess so far {highestguess}</div>
        <div>Number of Tries {numberOfTries}</div>
        <div>{message}</div>
    </div>


NumberStatus.propTypes={
    message : PropTypes.string,
    numberOfTries : PropTypes.number,
    lowestguess : PropTypes.number,
    highestguess : PropTypes.number
}

NumberStatus.defaultProps ={
    message : '',
    numberOfTries : 0,
    lowestguess : 0,
    highestguess : 0
}

export default NumberStatus
