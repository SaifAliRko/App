import Pagenation from "../components/Pagenation";
import CodeSnippet from "../components/CodeSnippet";
import {  useReducerExample } from "../components/rawHTML";

const StateReducer = () => {
  return (
    <div>
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">State Reducer</h1>

      {/* Next Previous */}

      <Pagenation previous="/types" next="/testinStarted" HomeLeft={false} HomeRight={false} />

      {/* Next Previous */}

      <div className=" mt-4">
        <h1 className="font-sans font-serif  mt-8 text-2xl">State Management:</h1>
        <br />
        <p className="text">
          In our Todo app we are going to be handling our state through a{" "}
          <i className="code ">reducer </i>. Now there are some special function ( hooks) that serve
          this purpose to handle state like <i className="code ">useState</i>.
          But in this we will use the hook provided by React known as{" "}
          <i className="code">useReducer</i> to mange state
        </p>
        <h1 className="font-sans font-serif  my-8 text-2xl">useReducer Hook:</h1>
        <p className="text">
          useReducer is an alternative to useState , which modifies or changes{" "}
          <i className="code">state </i>
          via a reducer function
          <div className="bg-gray-200 rounded-md w-full h-24 flex justify-center items-center">
            <div className=" bg-black p-5 border-l-8 flex items-center h-10 w-11/12 px-2 py-3 border-blue-600  text-white text-base font-medium">
              <pre>
                <b className="text-pink-400">const</b> <b className="text-blue-400">[</b>
                <b>state,reducer</b>
                <b className="text-blue-400">]</b>
                <b> = </b>
                <b className="text-blue-500">useReducer </b>
                <b className="text-blue-500">(</b>
                <b>reducer, initialState</b>
                <b className="text-blue-500">)</b>
              </pre>
            </div>
          </div>
          <p className="text mt-5">
            <i className="code">Reducer function</i> is the one which takes the two parameters ie{" "}
            <i className="code ">state</i> and <i className="code">action</i> and based on the type
            of <i className="code">action</i> it modifies the state and sends the new one. Note{" "}
            <i className="code">action</i> is sent to <i className="code">reducer</i> via a{" "}
            <i className="code">dispatch function</i>
          </p>
        </p>
        <h1 className="font-sans font-serif  my-8 text-2xl">useReducer example:</h1>
        <p className="text">Below is an example of how a simple counter works with useReducer</p>

        {/* Code Snippet */}

        <CodeSnippet display={useReducerExample} />
        {/* Code Snippet */}

        <p className="text">
          In this very same manner we will deal with our state now since test driven development is
          all about writing test side by side , we will have a look at the testing React JS testing
          library <i className="code">Jest</i>
        </p>

        {/* jest */}
        <h1 className="font-sans font-serif  my-8 text-2xl">Jest:</h1>
        <p className="text">
          Jest is an open-source testing framework that is built on JavaScript , built majorly to
          work with React and React Native applications
        </p>
        <br />
        <p className="text">In the next page we are going to start our tests.</p>

        {/* Next Previous */}

        <Pagenation previous="/types" next="/testinStarted" HomeLeft={false} HomeRight={false} />

        {/* Next Previous */}
      </div>
    </div>
  );
};

export default StateReducer;
