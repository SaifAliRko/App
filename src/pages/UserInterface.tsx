import CodeSnippet from "../components/CodeSnippet";
import Pagenation from "../components/Pagenation";
import { userInterface } from "../components/rawHTML";

const UserInterface = () => {
  return (
    <div>
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">User Interface</h1>

      <Pagenation previous="/editDelete" next="/" HomeLeft={false} HomeRight={true} />

      {/* Content  */}
      <div className=" mt-4">
        <p className="text">
          We write all our User Interface related code in <i className="code">App.tsx</i> file
        </p>
        <h1 className="font-sans font-serif  my-8 text-2xl">Creating States:</h1>
        <p className="text">
          We start off by creating two ie one is our main state of todos using <i>useReducer</i>{" "}
          hook and the other one is input state using <i>useState</i> hook for managing user entered
          input. Now for the DOM we render a form and our input to our state using{" "}
          <i className="code">onChange</i> attribute and on submission of the form we simply
          dispatch our <i>add</i> case to reducer function along with entered input.
          <br />
          Our array of state is being mapped and displayed with name along with two buttons one for
          deleting and one for edit. Upon clicking delete button we dispatch a <i>delete </i> type
          with id of the item to reducer , like wise upon clicking edit button we trigger a{" "}
          <i className="code">editTodo</i> method which simply dispatches type edit and whole item
          to reducer Finally we also add another button named as <i>Start Over</i> which resets our
          state and dispatches type of reset to reducer function ie
        </p>

        {/* code snippet */}
        <CodeSnippet display={userInterface} />
        {/* code snippet */}
        <p className="text">after writing this code our display looks something like this</p>
        <img className="rounded-md my-3 object-cover " src="pics/userInterface.jpg" alt="" />
      </div>
      <Pagenation previous="/editDelete" next="/" HomeLeft={false} HomeRight={true} />
    </div>
  );
};

export default UserInterface;
