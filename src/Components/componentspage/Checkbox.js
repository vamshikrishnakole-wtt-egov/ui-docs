import { CheckBox, Header } from "@egovernments/digit-ui-react-components";
import React from "react";

const Checkbox = () => {
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="pb-2">
        <Header>Checkbox</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`Lorem ipsum dolor <CheckBox /> sit amet consectetur adipisicing elit. Laudantium
          voluptates quaerat officiis architecto nam repudiandae veniam in
          ipsam, repellendus accusantium cumque nostrum id officia aliquam
          dolore vitae expedita adipisci animi.`}
        </p>
        <br />
        <CheckBox label="This is checkbox" />
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
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">How to Apply</h2>
        <ul className="list-disc list-inside">
            <li className="md:text-xs lg:text-sm 2xl:text-base">Lorem ipsum dolor sit amet consectetur adipisicing. tempore omnis! Iure?</li>
            <li className="md:text-xs lg:text-sm 2xl:text-base">Lorem ipsum dolor sit amet consectetur adipisicing. tempore omnis! Iure?</li>
            <li className="md:text-xs lg:text-sm 2xl:text-base">Lorem ipsum dolor sit amet consectetur adipisicing. tempore omnis! Iure?</li>
        </ul>
      </div>
    </div>
  );
};

export default Checkbox;
