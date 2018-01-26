import * as React from 'react'
import * as PropTypes from 'prop-types'

type Props = {
    processGuess: ( num : string) => void,
}
type State = {}

export default class NumberInput extends React.Component<Props, State >{

    private stepInput: HTMLInputElement | null;

    constructor(props: Props){
        super(props);
        this.submit = this.submit.bind(this)
    }

    render(){
        return (
            <form onSubmit={this.submit}>
                <input ref={(input) => { this.stepInput = input}} type="number"  />
                <button>Guess</button>
            </form>)
    }

    public static defaultProps = {
        processGuess: (num: string) => { }
    }    

    submit(e: any) {
        e.preventDefault();
        this.props.processGuess((this.stepInput) ? this.stepInput.value : '0')
    }

}

//NumberInput.propTypes = {
//    processGuess : PropTypes.func
//}

//NumberInput.defaultProps = {
//    processGuess: (num: string) => { }
//}


