import { BreadCrumb, Header } from "@egovernments/digit-ui-react-components";
import React from "react";

const BreadCrumbs = () => {
    const crumbs = [
        {
          path: "/",
          content: "Home",
          show: true,
        },
        {
          path: "/components",
          content: "components",
          show: true,
        },
        {
          path: "/components/breadcrumbs",
          content: "Breadcrumbs",
          show: true
        },
      ];
  return (
    <div className="md:w-5/6 w-full mb-60">
    <BreadCrumb crumbs={crumbs} />
      <div className="pb-2">
        <Header>Bread Crumbs</Header>
      </div>
      <div className="pb-4"> 
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs pb-2 lg:text-sm 2xl:text-base">
         {`<BreadCrumb crumbs={crumbs} />`} Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptates quaerat officiis architecto nam repudiandae veniam in ipsam, repellendus accusantium cumque nostrum id officia aliquam dolore vitae expedita adipisci animi.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Guidelines</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">When to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          adipisicing elit. Quaerat, quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">When not to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          adipisicing elit. Quaerat, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore dolores excepturi fuga nemo nesciunt tempore commodi pariatur eaque tenetur, itaque error odio architecto quae quidem labore nobis, illum alias?. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis.
        </p>
      </div>
    </div>
  );
};

export default BreadCrumbs;
