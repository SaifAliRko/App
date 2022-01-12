import Pagenation from "../components/Pagenation";

const Intro = () => {
  return (
    <div>
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">Test Driven Development tutorial</h1>

      {/* Next Previous */}

      <Pagenation previous="/intro" next="/getStarted" HomeLeft={true} HomeRight={false} />

      {/* Next Previous */}

      {/* Content div */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  mt-8 text-2xl">What is Test Driven Development?</h1>

        <br />
        <p className="text ">
          Test Driven Development (TDD) is a software development method that prioritizes the
          creation of
          <span className="text-black font-black">
            {" "}
            <i> unit test</i>
          </span>{" "}
          cases before writing the real code. It's a method that combines programming, unit testing,
          and refactoring in an iterative process
        </p>
        <br />
        <h1 className="font-sans font-serif  mb-8 text-2xl">How Does TDD help?</h1>

        <p className="text">
          It's a method that allows developers and testers to obtain{" "}
          <span className="text-black ">
            {" "}
            <i> efficient code</i>
          </span>{" "}
          that is long-lasting. TDD requires developers to begin by writing basic test cases for
          each feature based on their initial understanding. The main goal of this strategy is{" "}
          <q className="text-black">
            {" "}
            <i> to only change or write new code if the tests fail.</i>
          </q>{" "}
          This eliminates the need for duplicate test scripts.
        </p>
        <br />
        <h1 className="font-sans font-serif  mb-8 text-2xl">Learning by doing:</h1>

        <p className="text">
          In this tutorial we will build a{" "}
          <span className="text-black">
            <i> Todo app</i>
          </span>{" "}
          following protocols of
          <span className="text-black">
            {" "}
            <i>TDD using</i>{" "}
          </span>
          <br />
          <br />
          {/* Icon tray */}
          <div className="w-full mx-auto bg-white rounded-lg shadow-lg lg:w-1/3">
            <ul className="divide-y-2 divide-gray-400">
              <li className="flex justify-between p-3 ">
                React JS
                <img className="h-10 object-contain " src="./reactpng.png" alt="" />
              </li>
              <li className="flex justify-between p-3 ">
                TypeScript
                <img className="h-10 object-contain" src="./typescriptpng.png" alt="" />
              </li>
              <li className="flex items-center justify-between p-3 ">
                Jest
                <img className="h-10 object-cover" src="./jestpng.png" alt="" />
              </li>
            </ul>
          </div>
          {/* Icon Tray */}
          <br />
          <br />
          Click Next to follow the practical methodology of TDD
        </p>
      </div>

      {/* Next Previous */}

      <Pagenation previous="/intro" next="/getStarted" HomeLeft={true} HomeRight={false} />

      {/* Next Previous */}
    </div>
  );
};

export default Intro;
