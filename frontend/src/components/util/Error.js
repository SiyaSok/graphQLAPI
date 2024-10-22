/** @format */

import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Error() {
  const { onError, setError } = useContext(AuthContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [onError]);

  return (
    <div
      class='bg-red-100 border border-red-400 text-red-700 px-4 mt-2 mb-2 py-3 rounded relative'
      role='alert'>
      <strong class='font-bold'>Error! </strong>
      <span class='block sm:inline'> {onError}</span>
    </div>
  );
}
