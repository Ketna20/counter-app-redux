import React from 'react';
import { connect } from 'react-redux';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import CouterControl from '../../components/CounterControl/CounterControl';
import CounterControl from '../../components/CounterControl/CounterControl';
import * as actionCreators from '../../store/actions/index';
//import { increment } from '../../store/actions/actions';

class Counter extends React.Component {

    render() {
        return (
            <div>
               <CounterOutput value={this.props.ctr} />
               <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
               <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
               <CounterControl label="Add 10" clicked={this.props.onADDCounter} />
               <CounterControl label="Subtract 8" clicked={this.props.onSubtractCounter} />
               <hr />
               <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Results</button>
               <ul>
                   
                   {this.props.storedResults.map(strResult => (
                       <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                   ))}
                   
               </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement),
        onADDCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(8)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);