import Pagenation from "./Pagenation";

const About = () => {
  return (
    <div className="m-20">
      {/* heading */}
      <h1 className="font-sans font-serif  mb-8 text-4xl">App Details:</h1>

      <Pagenation previous="/" next="/" HomeLeft={false} HomeRight={true} />

      {/* Content  */}
      <div className=" mt-4">
        <p className="text">
          An app built inorder to have understanding about test driven development , simply a walk-through in building a todo app performing all kinds of CRUD operations like create , read , update and delete .
        </p>
      </div>
    </div>
  );
};

export default About;
