import CodeSnippet from "../components/CodeSnippet";
import Pagenation from "../components/Pagenation";
import { emptyStateAdditionTest, findNextIdFunction, findNextIdTests, reducerAddCase, reducerAddItemToMatureTest } from "../components/rawHTML";

const AddItem = () => {
  return (
    <div>
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">Adding and Testing an Item in Todos</h1>

      {/* Next Previous */}
      <Pagenation previous="/testinStarted" next="/editDelete" HomeLeft={false} HomeRight={false} />
      {/* Next Previous */}

      {/* Content  */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  my-8 text-2xl">Creating a Mock Data file:</h1>
        <p className="text">
          Now in order to get started with TDD we need some dummy data of our states so that we can
          test our program by using them. So we create a <i className="code">mock.ts </i> in <i>src folder</i>.
        </p>
        <br />
        <p className="text">
          we start with creating three static test state Items which are going to be in our todos
          state.
        </p>
        <img className="my-7 rounded-md object-cover" src="pics/mockstate.jpg" alt="" />
        <p className="text">
          Additionally we also create mock states containing one , two or all three items in state
          ie
        </p>
        <img className="my-7 rounded-md object-cover" src="pics/testStates.jpg" alt="" />

        <h1 className="font-sans font-serif  my-8 text-2xl">Adding an Item to empty Todo:</h1>

        <p className="text">
          Now switching back to <i className="code">reducer.test.ts</i> in order to write our first
          failing test and then try to fix it , this is really the beauty of TDD , so including the
          previous test we write additional test ie passing intial state  and action of type add
          and data of test 1 which simply should result the output of reducer to be{" "}
          <i className="code">stateWithOneItem </i>
        </p>

        {/* COde part  */}
        <CodeSnippet display={emptyStateAdditionTest} />
        {/* COde part  */}

        <p className="text">
          Now upon running the test , it certainly fails now we have to wire up and configure  add
          more complexity in our reducer function in <i className="code">reducer.ts </i>
          so that test result is acceptable , the first thing to do is to add a case in our reducer
          function ie 'add' case ,but before writing 'add' case we need to create a function which
          will simply designate an 'id' field in our todos and simply returns 1 if there is no item
          in todos and increments id if another item is being added in todos ie creating{" "}
          <i className="code">findNextId</i> function in reducer.ts , which we obviously write right above our reducer function.
        </p>

        {/* code part  */}
        <CodeSnippet display={findNextIdFunction} />
        {/* code part  */}

        <p className="text">
          Before moving further lets test our newly created function and for that purpose we write
          test cases in <i className="code">reducer.test.ts</i> in which we simply pass our mock
          states todos and get the incremental number as
        </p>
        {/* code part  */}
        <CodeSnippet display={findNextIdTests} />
        {/* code part  */}
        <p className="text">
          Now we shall update our 'add' case in reducer with id field being the function and
          description field to be action.data ie and as you complete the test it runs successfully{" "}
        </p>
        {/* code part  */}
        <CodeSnippet display={reducerAddCase} />
        {/* code part  */}
        <h1 className="font-sans font-serif  my-8 text-2xl">Adding an Item Mature state:</h1>
        <p className="text">
          Now we write yet another test case for action type 'add' but with the state already having
          an item in it ie mature state like
        </p>
        {/* code part  */}
        <CodeSnippet display={reducerAddItemToMatureTest} />
        {/* code part  */}
        <p className="text">
          Again it adds another item in our state (stateWithOneItem) and returns stateWithTwoItems
          and clears our all test cases ie
        </p>

        <img className="object-cover my-7 rounded-md " src="pics/testResult.jpg" alt="" />
        <p className="text">
          Up next we are going to make test cases for delete functionality
        </p>
      </div>
      {/* Content */}

      {/* Next Previous */}
      <Pagenation previous="/testinStarted" next="/editDelete" HomeLeft={false} HomeRight={false} />
      {/* Next Previous */}
    </div>
  );
};

export default AddItem;
