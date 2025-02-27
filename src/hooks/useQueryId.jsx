import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useQueryId = (queryToSearch = "id") => {
   const [searchParams] = useSearchParams();
   const query = useMemo(
      () => searchParams.get(queryToSearch),
      [searchParams.get(queryToSearch)]
   );
   return { query };
};

export default useQueryId;
