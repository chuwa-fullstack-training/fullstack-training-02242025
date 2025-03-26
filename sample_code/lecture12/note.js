//onClick will pass a function and run



//When passing a function as a prop in React,
// it is passed by reference.
// This means that the receiving component can
// call the function, and any changes
// that the function makes will reflect in the parent component,
// as the same function reference is being used.

//In JavaScript, functions are first-class objects, and when you pass a function as a prop, you're passing the reference to that function, not a copy of it.


// When you pass a function as a prop in React,
// you're creating a closure in a way because
// the child component’s function still has access to
// the parent component’s state. The child component can
// call the function, which can
// still modify or access the parent component's state.


// When you create an instance of a class, JavaScript creates an object and then attaches properties
// and methods to that object as defined in the constructor.

//this in arrow functino refers to the lexical csope where it get dinfed
//it only get defined when the instance get created not the class denifition

class App {
    handleClick = () => {
      console.log(this);  // `this` refers to the App instance, even before appInstance is created
    };
  }

  const appInstance = new App();  // Instance is created here


//class component
//create the app instance and use render to render
//this inside the render method (and other methods of the class) refers to the instance of the class.
