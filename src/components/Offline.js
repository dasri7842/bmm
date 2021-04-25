import useDocumentTitle from "../hooks/useDocumentTitle";
import offline from "./../assets/Offline.svg";
const Offline = () => {
  useDocumentTitle("Offline");
  return (
    <div className="m-5 col-lg-6 mx-auto">
      <img src={offline} alt="offline" className="img-fluid p-5"></img>
      <h3 className="text-center text-danger">You are Offline!</h3>
    </div>
  );
};

export default Offline;
