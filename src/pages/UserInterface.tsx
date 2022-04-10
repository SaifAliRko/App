import CodeSnippet from "../components/CodeSnippet";
import Pagenation from "../components/Pagenation";
import { runCommand, TodosComponent, userInterface } from "../components/rawHTML";

const UserInterface = () => {
  return (
    <div>
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">User Interface</h1>

      <Pagenation previous="/ComponentTesting" next="/" HomeLeft={false} HomeRight={true} />

      {/* Content  */}
      <div className=" mt-4">
        <p className="text">
          First of all we clear every mess that is present in <i className="code">App.tsx </i> .Then
          we write all our User Interface related code in <i className="code">App.tsx</i> file which
          is according to the front end tests that we have written previously , now the approach is
          that we have to create yet another component named as <i className="code">Todos.tsx </i>{" "}
          which will render array of todos i.e.
        </p>
        <p className="text">
          We use the useReducer for state ,and useState hook for managing our user entered input
          ,Now as far as the array or collection of our todo items is concerned we have yet another
          component named as <i className="code">Todos.tsx </i> In which we pass our array of state
          as props and is being mapped and displayed with name along with a button for deleting , We
          also pass a delete handler function as a prop to this component for deleting any todo.
          Upon clicking delete button we dispatch a <i>delete </i> type with id of the item to
          reducer.Finally we also add another button named as <i>Start Over</i> which resets our
          state and dispatches type of reset to reducer function ie
        </p>
        {/* code snippet */}
        <CodeSnippet display={userInterface} />
        {/* code snippet */}
        <p className="text">
          And our <i className="code">Todos.tsx </i> component looks something like
        </p>
        <CodeSnippet display={TodosComponent} />
        <p className="text">
          And after completing this code our previous tests in <i className="code">App.test.ts </i> run by entering following command
        </p>
        <CodeSnippet display={runCommand} />
        <img className="rounded-md my-3 object-cover mx-auto" src="pics/33.jpg" alt="" />

        <p className="text">after writing this code our display looks something like this</p>

        <img className="rounded-md my-3 object-cover " src="pics/UserInterface.jpg" alt="" />
      </div>
      <Pagenation previous="/ComponentTesting" next="/" HomeLeft={false} HomeRight={true} />
    </div>
  );
};

export default UserInterface;
