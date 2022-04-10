import CodeSnippet from "../components/CodeSnippet";
import Pagenation from "../components/Pagenation";
import {
  AddItem,
  AddItemAttribute,
  cleanUpFunction,
  headingsTesting,
  startOverHandler,
  StartOverPresence,
} from "../components/rawHTML";

const FrontEndTesting = () => {
  return (
    <div>
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">Front End Testing :</h1>

      {/* Next Previous */}

      <Pagenation previous="/addItem" next="/FrontEndTesting2" HomeLeft={false} HomeRight={false} />

      {/* Next Previous */}

      {/* Content  */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  my-8 text-2xl">Cleaning Up our functions:</h1>
        <p className="text">
          Cleaning up function is crucial for unmounting the React tree that were previously mounted
          with the render function , some of the tests of the jest , mocha ,jasmine have automated
          cleanups and don't require these manual cleanups
        </p>
        {/* code part  */}
        <CodeSnippet display={cleanUpFunction} />

        {/* code part  */}
      </div>

      {/* Content  */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  my-8 text-2xl">Checking for Headings:</h1>
        <p className="text">
          We start off by checking whether some headings do exists in our application like{" "}
          <i>Enter your todos</i> and <i>A Simple Todo app created via TDD</i>
          for this purpose we write test using our same <i>Jest library</i> in our{" "}
          <i className="code">App.test.tsx file</i>, additionally we use methods like{" "}
          <i className="code">getByText</i> to grab the text from app and{" "}
          <i className="code">toBeInTheDocument()</i> for checking the presence of text. The Jest
          docs state it is an alias of test. So they are exactly the same from a functional point of
          view.
        </p>
        {/* code part  */}
        <CodeSnippet display={headingsTesting} />

        {/* code part  */}
      </div>
      {/* Content  */}

      {/* Content  */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  my-8 text-2xl">Start Over Button testing:</h1>
        <p className="text">
          Now we start with our front end button testing for which we first write to see if the
          button do exists in our App named as <i>Start over</i>
          i.e.
        </p>
        {/* code part  */}
        <CodeSnippet display={StartOverPresence} />
        {/* code part  */}

        <p className="text">
          Afterwards in order for us to check the functionality of the button i.e. whether its
          working or not we need to see if the function handler such as{" "}
          <i className="code">starOverHandler</i> is fired or not , for this we use{" "}
          <i className="code">jest.fn()</i> to declare our function handler , then we grab our{" "}
          <i>button</i> via text , then use
          <i className="code">fireEvent.click() </i> method to see if the function handler has been
          called .
        </p>
        {/* code part  */}
        <CodeSnippet display={startOverHandler} />
        {/* code part  */}
      </div>

      {/* Content  */}

      {/* Content  */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  my-8 text-2xl">Add Todo submit input:</h1>
        <p className="text">
          Now to our second submit input we again , start by seeing if this input with name{" "}
          <i className="code">Add item </i> exists in our app or not.
        </p>
        {/* code part  */}
        <CodeSnippet display={AddItem} />
        {/* code part  */}

        <p className="text">
          Next we grab our input field again but this time not with <i>text</i> but by{" "}
          <i className="code">getTestById </i>method and for that we need to give an attribute of{" "}
          <i className="code">data-testid </i>
          to our input submit field, next we grab our input button and check whether it has
          attributes like <i>value of Add item and type of submit</i>
        </p>
        {/* code part  */}
        <CodeSnippet display={AddItemAttribute} />
        {/* code part  */}
      </div>
      {/* Content  */}

      {/* Next Previous */}

      <Pagenation previous="/addItem" next="/FrontEndTesting2" HomeLeft={false} HomeRight={false} />

      {/* Next Previous */}
    </div>
  );
};

export default FrontEndTesting;
