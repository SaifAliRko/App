
import Pagenation from "../components/Pagenation";

const Types = () => {
  return (
    <div>
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">Types Declaration</h1>

      {/* Next Previous */}

      <Pagenation previous="/getStarted" next="/reducer" HomeLeft={false} HomeRight={false} />
      {/* Next Previous */}

      {/* Content div */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  mt-8 text-2xl">Setting type for State:</h1>
        <br />
        <p className="text">
          We start off by  creating a file named <i className="code"> types.ts </i> in our <i className="code">src </i> folder , where we first declare
          the type of an <i className="code">Item</i> which has an id and a description , an Item is nothing but our todo , Now our <i>State </i> type is nothing but an array of <i>Item</i>{" "}
          <i className="code">Item</i> ie
        </p>
        <img className="object-cover w-full my-4" src="pics/ItemnState.jpg" alt="" />
        <p className="text">
          Now since our our app performs all kinds of  operations like Adding ,Deleting ,
          and setting default so we create the actions for each and every action in TypeScript.
          Moreover Adding action has type of <i className="code">add</i> and data which is{" "}
          <i className="code">string</i> , delete action has
          type of <i className="code">delete</i> and data which is a{" "}
          <i className="code">number (id)</i> and lastly default action is of type{" "}
          <i className="code">default</i>
          .Now the general type of <i className="code">Action</i> is the union of all types stated
          ie
        </p>
        <img className="object-cover w-full my-4" src="pics/ActionTypes.jpg" alt="" />
        <p className="text">
          In the very next section we're gonna execute our logic and handle our state with the help
          of <i className="code">reducer</i>
        </p>

        {/* Next Previous */}

        <Pagenation previous="/getStarted" next="/reducer" HomeLeft={false} HomeRight={false} />
        {/* Next Previous */}
      </div>
    </div>
  );
};

export default Types;
