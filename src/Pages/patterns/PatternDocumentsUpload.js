import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import DocumentsUpload from '../../assets/img/Patterns/DocumentsUpload.png'

const isMobile = window.innerWidth < 768;
const PatternDocumentsUpload = () => {
      return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "300%"} : {}}>
      <div className="mb-8">
        <Header>Documents Upload</Header>
      </div>
          <img src={DocumentsUpload} className={" pr-8  pb-8" + isMobile ? "w-58%" : "w-4/12"} alt="DocumentsUpload"></img>
          </div>
  );
  
};

export default PatternDocumentsUpload;
