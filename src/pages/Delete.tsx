import CodeSnippet from "../components/CodeSnippet";
import Pagenation from "../components/Pagenation";
import { deleteReducerCase, deleteTest} from "../components/rawHTML";

const Delete = () => {
  return (
    <div>
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">Delete Item Test case</h1>

      {/* Next Previous */}

      <Pagenation previous="/addItem" next="/FrontEndTesting" HomeLeft={false} HomeRight={false} />

      {/* Next Previous */}

      {/* Content  */}
      <div className=" mt-4">
   

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

      <Pagenation previous="/addItem" next="/FrontEndTesting" HomeLeft={false} HomeRight={false} />

      {/* Next Previous */}
    </div>
  );
};

export default Delete;
