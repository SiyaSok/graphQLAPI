/** @format */

import React from "react";

export default function Loader() {
  return (
    <div>
      <div class='flex justify-center items-center min-h-screen'>
        <div class='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500'></div>
      </div>
    </div>
  );
}
