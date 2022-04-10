import CodeSnippet from "../components/CodeSnippet";
import Pagenation from "../components/Pagenation";
import {
  AppSnapshot,
  componentTesting,
  deleteButton,
  deleteButtonHandler,
  reactTestRenderer,
  TodosSnapshot,
} from "../components/rawHTML";

const ComponentTesting = () => {
  return (
    <div>
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">Component Testing:</h1>

      {/* Next Previous */}

      <Pagenation
        previous="/FrontEndTesting2"
        next="/userInterface"
        HomeLeft={false}
        HomeRight={false}
      />

      {/* Next Previous */}

      {/* Content  */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  my-8 text-2xl">Todos Component Testing:</h1>
        <p className="text">
          Previously we let the user to enter his input and any data that he enters will be included
          in the array , for that purpose we pass the entered data array as{" "}
          <i className="code">props </i> to a new React component called{" "}
          <i className="code">Todos.tsx </i>
          <div className=""></div>
          For testing purposes we simply create a dummy{" "}
          <i>
            <b>todos </b>
          </i>
          and pass it as a prop to our Todos component , additionally we give a{" "}
          <i>
            <b>p tag </b>
          </i>
          an attribute of <i className="code">article </i> and then grab it by{" "}
          <i className="code">getAllByRole </i> method ie we grab the resulting todos and then check
          to see if its description is same as the dummy todos description as well as if it has a
          color of red. Which will mean that our component is working as it should work.
        </p>
        {/* code part  */}
        <CodeSnippet display={componentTesting} />

        {/* code part  */}
      </div>

      {/* Content  */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  my-8 text-2xl">Testing delete todo button:</h1>
        <p className="text">
          Up next we test whether our delete button exists adjacent to our todos , for that we again
          give our button a <i className="code">data-testid </i> attribute and then use getByTestId
          method to test.
        </p>
        {/* code part  */}
        <CodeSnippet display={deleteButton} />
        {/* code part  */}
        <p className="text">
          Now to test the functionality of our delete button we simply use{" "}
          <i className="code">jest.fn() </i> to build a <i>deleteHandler </i> and then again grab
          our delete button via <i className="code">getByText </i> and then use{" "}
          <i className="code">fireEvent.click </i> method on button to see if our desired function
          handler has been called or not.
        </p>
        {/* code part  */}
        <CodeSnippet display={deleteButtonHandler} />
        {/* code part  */}
      </div>
      {/* Content  */}

      <div className=" mt-4">
        <h1 className="font-sans font-serif  my-8 text-2xl">Snapshot Testing:</h1>
        <p className="text">
          Finally we intend to create a snapshot tree of our both components ie{" "}
          <i className="code">App.tsx </i> and <i className="code">Todos.tsx </i> , a snapshot tree
          is a shallow component structure which provides a blueprint and throws error if you modify
          our component for which you need to update your snapshot tree by entering{" "}
          <i className="code">u </i> simply. Also for snapshot tree you need to install an
          additional package ie <i className="code">react-test-renderer </i> in order to render
          snapshots properly like
          {/* code part  */}
          <CodeSnippet display={reactTestRenderer} />
          {/* code part  */}
        </p>

        <p className="text">
          Now we use <i className="code">renderer.create </i> method to create a JSON snapshot of
          both the components ie for <i className="code">App.tsx</i>
        </p>
        {/* code part  */}
        <CodeSnippet display={AppSnapshot} />
        {/* code part  */}

        <p className="text">
          Similarly we create another snapshot of our <i className="code">Todos </i> component like
        </p>
        {/* code part  */}
        <CodeSnippet display={TodosSnapshot} />
        {/* code part  */}
        <p className="text">
          After running these two tests you will see a folder named as{" "}
          <i className="code">_snapshots_ </i> being created which has the snapshot of your
          components. So after writing all of your tests we create the relevant UI
        </p>
      </div>
      {/* Content  */}

      {/* Next Previous */}

      <Pagenation
        previous="/FrontEndTesting2"
        next="/userInterface"
        HomeLeft={false}
        HomeRight={false}
      />

      {/* Next Previous */}
    </div>
  );
};

export default ComponentTesting;
