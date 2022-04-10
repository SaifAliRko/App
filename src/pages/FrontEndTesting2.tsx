import CodeSnippet from "../components/CodeSnippet";
import Pagenation from "../components/Pagenation";
import {
  AddItem,
  AddItemAttribute,
  cleanUpFunction,
  deleteReducerCase,
  deleteTest,
  editTest,
  entryField,
  entryFieldValue,
  headingsTesting,
  reducerEditCase,
  startOverHandler,
  StartOverPresence,
  submitForm,
} from "../components/rawHTML";

const FrontEndTesting2 = () => {
  return (
    <div>
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">Continuing our Front-end testing:</h1>

      {/* Next Previous */}

      <Pagenation
        previous="/FrontEndTesting"
        next="/userInterface"
        HomeLeft={false}
        HomeRight={false}
      />

      {/* Next Previous */}

      {/* Content  */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  my-8 text-2xl">Testing Input Field for data entry:</h1>
        <p className="text">
          Afterwards we switch to our input field from which we can enter our todos items , again
          first we give our input field an attribute of <i className="code">data-testid </i> and
          then grab our input field by <i className="code">getByTestId</i>
          method and then check to see if our input field has an attribute of <i>type </i> with{" "}
          <i>text </i> and <i>placeholder </i> with <i>Enter Your Todo Here </i>
        </p>
        {/* code part  */}
        <CodeSnippet display={entryField} />
        {/* code part  */}
        <p className="text">
          Up next we want to see if by entering a value in the input field changes its value or not
          , for that purpose we grab input field again by id and then use <i>change </i> method to
          set value of input field i.e.
        </p>
        {/* code part  */}
        <CodeSnippet display={entryFieldValue} />
        {/* code part  */}
      </div>

      {/* Content  */}

      {/* Content  */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  my-8 text-2xl">Testing submit form tag:</h1>
        <p className="text">
          On this point we test if there exists a form html tag with an attribute <i>method </i> of{" "}
          <i>post</i>.
        </p>
        {/* code part  */}
        <CodeSnippet display={submitForm} />
        {/* code part  */}
      </div>
      <p className="text">
        Until this point we have done testing of our form and all buttons now we intend to create
        another component with name <i className="code">Todos.tsx </i> which will have the array of
        all the todo items that are being entered by the user , along with the option to delete any
        item.
      </p>
      {/* Content  */}

      {/* Next Previous */}

      <Pagenation
        previous="/FrontEndTesting"
        next="/userInterface"
        HomeLeft={false}
        HomeRight={false}
      />

      {/* Next Previous */}
    </div>
  );
};

export default FrontEndTesting2;
