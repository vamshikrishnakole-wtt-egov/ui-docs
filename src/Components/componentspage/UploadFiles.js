import {
  Card,
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
        <Header>File Upload</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          The File Uploader component allows users to select and upload files on the application
          screens.
        </p>
      </div>
      <div className="pb-4">
        <Card className="mb-8">
          <UploadFile
            extraStyleName={"propertyCreate"}
            accept=".jpg,.png,.pdf"
            onUpload={selectfile}
            // onDelete={() => {
            //   setUploadedFile(null);
            // }}
            message={"No File Selected"}
          />
        </Card>
      </div>
      {/* <div className="mb-4">
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
      </div> */}
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Guidelines</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Follow the guidelines here to provide standardized UI components across DIGIT screens
          and modules.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          When to Apply
        </h3>
        <p className="2xl:text-lg sm:text-sm">
          Follow the guidelines here to provide standardized UI components across DIGIT screens
          and modules.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          How to Apply
        </h3>
        <ul className="list-outside list-disc pl-4">
          <li className="py-2">
            Use standardized DIGIT specific text to describe the user action like "Upload Files"</li>
          <li className="py-2">Provide information on the applicable file types and maximum file size that can be
            uploaded</li>
          <li className="py-2">Show error messages consistent with DIGIT design style standards</li>
        </ul>
      </div>
    </div>
  );
};

export default UploadFiles;
