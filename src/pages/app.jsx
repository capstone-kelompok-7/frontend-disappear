import { useState } from "react";
import Layout from "../components/layout";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <Layout>
      <div className="">
        {/* ISI CONTENT DISINI */}
        <h1>ISI CONTENT DISINI</h1>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label htmlFor="picture">Picture</label>
          <Input id="picture" type="file" />
        </div>
      </div>
    </Layout>
  );
}

export default App;
