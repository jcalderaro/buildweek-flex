### Self-Study/Essay Questions

### Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

-----------------------------------------------------

1)  In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    a. `Actions` is defined as: a regular JavaScript object that usually has two properties, type and payload.

    b. `Reducers` are defined as: a pure function that takes the current state and an action, and returns the next state.
    b2. It is called that because you could "reduce" a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state.

    c. `Store` is defined as: a place where the application's state is stored. Instead of setting state at a component level, redux offers a store where we can store all component states.

    d. Their role in Redux is: 
        Actions: Pass / Dispatch information (Type) to the reducer.
        Reducers: Using the data it received it will then know how to update the state according to the Type / Payload.
        Store: The Redux store is read only. The only way to modify application state when using Redux is by dispatching actions.

    e. The `Store` is known as a 'Single Source of Truth' because: It's a single source of truth because unlike component-state, redux state is accessible by all components. If a component connects and subscribes to the redux store, it can access all the stored state without requiring state to be passed up or down from parent/child components.

-----------------------------------------------------

2)  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    a. An Application State is: roughly the entire contents of its memory.

    b. A Component State is: something that would normally take in props and render. But, components also offer state, and it is used to store information about the component that can change over time.

        c: You would choose one over the other when: you have an application architecture that is Deep, you may want to manage state at the application level to avoid passing state down through multiple levels of components that don't actually need the state. If your components are set up broadly, where everything is imported to a single parent or grandparent component, the overhead of managing application state in redux may not be worth it, because passing down state one or two levels isn't as challenging.

-----------------------------------------------------

3) Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    a. Redux-Thunk is: a middleware that lets you call action creators that return a function instead of an action object.

    b. It Allows us to: utilize the function to recieve the store's dispatch method. Which is then used to dispatch regular sychronous actions inside the body of the function once the asynchronous operations have completed. 

    c. It changes our action-creators by: enabling them to perform asychronously.
-----------------------------------------------------