
import Pagenation from "../components/Pagenation";
// import { correctVersion } from "../components/rawHTML";

const TestinStarted = () => {
  return (
    <div>
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">Getting Started with Testing</h1>
      {/* Next Previous */}

      <Pagenation previous="/reducer" next="/addItem" HomeLeft={false} HomeRight={false} />

      {/* Next Previous */}

      {/* content */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  my-8 text-2xl">Creating Required Files:</h1>
        <p className="text">
          In order to get started we first create two files named as <i className="code">reducer.ts </i> and <i className="code">reducer.test.ts </i> both in <i className="code">src </i> folder. For managing the state through reducer
          function we create <i className="code">reducer.ts</i>
          and similarly for writing their equivalent unit tests we create{" "}
          <i className="code">reducer.test.ts</i>
        </p>
        <h1 className="font-sans font-serif  my-8 text-2xl">Writing First Test:</h1>
        <p className="text">
          Now we write our first test in reducer.test.ts , which should simply reflect that if we
          pass our <i className="code">initialState</i> and action of type{" "}
          <i className="code">default</i> in <i className="code">reducer function </i>
          we should strictly get our <i className="code">initialState</i>
          <br />
          <br />
          Simultaneously we write our first <i className="code">reducer function </i> inside{" "}
          <i className="code">reducer.ts</i>
          in Which we simply return the initialState if our action type is{" "}
          <i className="code">default </i>
          ie
          <img className="my-7 rounded-md" src="pics/1st test.jpg" alt="" />
          <p className="text">
            The <i className="code">describe </i> function expects a string and a callback function
            , which in this case is <i className="code">it </i>which also in return expects another
            callback function , where we used <i className="code">expect </i> method and passed our
            reducer function , so the that method<i className="code">toStrictEqual </i> can be
            initialState. Now is the time to run test which we can by typing the following command
            in terminal
          </p>
          <p className="text">But before running the test it is crucial to use the correct version of jest-watch typehead for that purpose at first you enter the following command in terminal</p>
           {/* command terminal */}
           <div className="bg-gray-200 rounded-md w-full h-24 flex justify-center items-center my-3">
            <div className=" bg-black p-2 border-l-8  h-9 w-11/12   border-blue-600  text-white text-base font-thin">
              <pre>
                <b className="text-yellow-300"> npm</b> {" "}
                <b className="text-gray-400 text-sm">i -D --exact jest-watch-typeahead@0.6.5</b>
              </pre>
            </div>
          </div>
            {/* command terminal */}
            <p className="text">Afterwards you are good to run the following command in your terminal to successfully run your first test.</p>
          {/* command terminal */}
          <div className="bg-gray-200 rounded-md w-full h-24 flex justify-center items-center my-3">
            <div className=" bg-black p-2 border-l-8  h-9 w-11/12   border-blue-600  text-white text-base font-thin">
              <pre>
                <b className="text-yellow-300"> npm</b> test reducer{" "}
                <b className="text-gray-400 text-sm">--watch</b>
              </pre>
            </div>
          </div>
            {/* command terminal */}
        </p>
        <p className="text">and here we have our very first test being passed</p>
        <img className="object-cover my-5 rounded-md" src="pics/testResult.jpg" alt="" />
      </div>

      {/* Next Previous */}

      <Pagenation previous="/reducer" next="/addItem" HomeLeft={false} HomeRight={false} />

      {/* Next Previous */}
    </div>
  );
};

export default TestinStarted;
