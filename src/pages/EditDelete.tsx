import CodeSnippet from "../components/CodeSnippet";
import Pagenation from "../components/Pagenation";
import { deleteReducerCase, deleteTest, editTest, reducerEditCase } from "../components/rawHTML";

const EditDelete = () => {
  return (
    <div>
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">Edit and Delete Item Test cases</h1>

      {/* Next Previous */}

      <Pagenation previous="/addItem" next="/userInterface" HomeLeft={false} HomeRight={false} />

      {/* Next Previous */}

      {/* Content  */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  my-8 text-2xl">EDIT Test:</h1>
        <p className="text">
          We start off by writing a failing test case for the editing functionality ie in our{" "}
          <i className="code">reducer.test.ts</i> we pass <i>stateWithOneItem</i> as initial State
          and action of type edit and a custom item so that the function should update initial State
          with the one provided in <i>action</i> ie
        </p>
        {/* code part  */}
        <CodeSnippet display={editTest} />

        {/* code part  */}

        <p className="text">
          Now obviously our test fails as we have no case for <i className="code">edit</i>
        </p>
        <img className="object-cover rounded-md my-6" src="pics/editFail.jpg" alt="" />

        <h1 className="font-sans font-serif  my-8 text-2xl">EDIT case:</h1>
        <p className="text">
          The aim is return a copy of state where the only item gets updated who's id matches with
          the id of Item provided in the action whereas the rest of items remain the same ie
        </p>
        {/* code part  */}
        <CodeSnippet display={reducerEditCase} />

        {/* code part  */}
        <p className="text">And now our edit test works successfully</p>

        <h1 className="font-sans font-serif  my-8 text-2xl">DELETE Test:</h1>
        <p className="text">
          Now again for the delete test case we start with a failing test , ie what we want is to
          pass <i>stateWithTwoItems</i> as well as an action of type of <i>delete</i> and an{" "}
          <i>id</i> which is a number lets say 2 and in result we want the second item to get
          deleted hence receiving <i>stateWithOneItem</i> ie
        </p>
        {/* code part  */}
        <CodeSnippet display={deleteTest} />
        {/* code part  */}

        <p className="text">Now as expected our test fails so we built up our logic next</p>
        <h1 className="font-sans font-serif  my-8 text-2xl">DELETE Case:</h1>
        <p className="text">
          We modify our <i>reducer </i> function in <i className="code">reducer.ts</i> file , with
          the case of <i>delete</i> and returning a filtered copy of state without <i>Item</i> with
          the same id as that in our action ie
        </p>
        {/* code part  */}
        <CodeSnippet display={deleteReducerCase} />
        {/* code part  */}
        <p className="text">and Once again all of our tests run successfully</p>
        <img className="mx-auto object-cover my-5 rounded-md" src="pics/AllTests.jpg" alt="" />
        <p className="text">
          At this point we are done with our Development phase next we will cover the UI left
        </p>
      </div>
      {/* Content  */}

      {/* Next Previous */}

      <Pagenation previous="/addItem" next="/userInterface" HomeLeft={false} HomeRight={false} />

      {/* Next Previous */}
    </div>
  );
};

export default EditDelete;
