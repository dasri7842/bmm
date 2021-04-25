import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    if (title) document.title = `${title} | Book my Movie`;
  }, [title]);
};

export default useDocumentTitle;
