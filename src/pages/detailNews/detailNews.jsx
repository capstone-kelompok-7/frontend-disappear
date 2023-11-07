import React from 'react'
import Layout from "../components/layout";
import SideBar from "../components/sidebar/sidebar";

function DetailNews() {
  return (
    <div className="flex">
      <SideBar />
      <Layout>
        <div className="mt-7 border-spacing-x-2 shadow-md p-4 flex justify-between items-center">
        </div>
      </Layout>
    </div>
  )
}

export default DetailNews