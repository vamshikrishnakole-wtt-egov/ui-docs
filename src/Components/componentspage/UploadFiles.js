import {
  Header,
  UploadFile,
  UploadImages,
} from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";

const UploadFiles = () => {
  const [file, setFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  function selectfile(e) {
    setFile(e.target.files[0]);
  }
  function getImage(e) {
    setImageFile(e.target.files[0]);
  }
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-4">
        <Header>Upload File</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`Lorem ipsum <UploadFile extraStyleName={"propertyCreate"} accept=".jpg,.png,.pdf" onUpload={selectfile} // onDelete={() => { //   setUploadedFile(null); // }} message={'Choose File'} /> dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis deleniti facilis ex non nobis neque quis sunt quam molestiae iusto molestias dignissimos, dolorem fugit.`}
        </p>
      </div>
      <div className="mb-8">
        <UploadFile
          extraStyleName={"propertyCreate"}
          accept=".jpg,.png,.pdf"
          onUpload={selectfile}
          // onDelete={() => {
          //   setUploadedFile(null);
          // }}
          message={"Choose File"}
        />
      </div>
      <div className="mb-4">
        <Header>Upload Images</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`Lorem ipsum <UploadImages onUpload={getImage}  /> dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis deleniti facilis ex non nobis neque quis sunt quam molestiae iusto molestias dignissimos, dolorem fugit.`}
        </p>
      </div>
      <div className="mb-4">
        <UploadImages thumbnail="upload" onUpload={getImage} />
      </div>
    </div>
  );
};

export default UploadFiles;
