import rootReducer from "../../redux/rootReducer";
//create my first logger
const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`)

    const upcomingState = [action].reduce(rootReducer, store.getState());

    console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);

    //pass action
    return next(action);
    
}

export default myLogger;