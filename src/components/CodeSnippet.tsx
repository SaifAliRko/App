const CodeSnippet: React.FC<{ display: string }> = ({ display }) => {
  return (
    <div className="bg-gray-200  w-full rounded-md py-9">
      <div className=" bg-black rounded-md py-2 border-l-8 pl-2 mx-auto flex items-center  w-11/12  border-blue-600  text-white text-base font-medium">
        <pre>{display}</pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
