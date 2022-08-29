import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import DocumentsUpload from '../../assets/img/Patterns/DocumentsUpload.png'

const PatternDocumentsUpload = () => {
      return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-8">
        <Header>Documents Upload</Header>
      </div>
          <img src={DocumentsUpload} className=" pr-8  pb-8 w-1/2" alt="ComingSoonImg"></img>
          </div>
  );
  
};

export default PatternDocumentsUpload;
