import dynamic from "next/dynamic";
import React from "react";
const BasicEditor = dynamic(() => import('@/components/tools/editor'), {
    loading: () => <p>Loading...</p>,
  })

function Page() {
  return (
    <div>
      Page pa Crear<BasicEditor></BasicEditor>
    </div>
  );
}

export default Page;
