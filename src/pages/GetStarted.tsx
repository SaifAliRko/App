import CodeSnippet from "../components/CodeSnippet";
import Pagenation from "../components/Pagenation";
import { createReactApp } from "../components/rawHTML";

const GetStarted = () => {
  return (
    <div>
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">TDD Getting Started</h1>

      {/* Next Previous */}

      <Pagenation previous="/intro" next="/types" HomeLeft={false} HomeRight={false} />

      {/* Next Previous */}

      {/* Content div */}
      <div className=" mt-4">
        <h1 className="font-sans font-serif  mt-8 text-2xl">Setting up Environment:</h1>
        <br />
        <p className="text">
          If you have npx and Node.js installed, you can create a React application with TypeScript
          and Jest by using{" "}
          <code className="text-red-500 text-lg bg-gray-300 "> create-react-app.</code>
        </p>
        <br />
        <p className="text">
          Run this command to create a React application with TypeScript and Jest named{" "}
          <code className="text-red-500 text-lg bg-gray-300 ">my-app</code>:
        </p>
        <br />
        {/* code part */}
        <CodeSnippet display={createReactApp} />
        {/* code part */}
   
    
        <br />
        <p className="text">
          type cd my-app and then enter{" "}
          <code className="text-red-500 text-lg bg-gray-300 "> npm start</code> to start your React
          app with both typeScript and Jest , you will the following screen
        </p>
        <img className="mx-auto my-10" src="pics/react-app.png" alt="" />
      </div>
      {/* Next Previous */}

      <Pagenation previous="/intro" next="/types" HomeLeft={false} HomeRight={false} />

      {/* Next Previous */}
    </div>
  );
};

export default GetStarted;
