import React from 'react';
import { Header } from "@egovernments/digit-ui-react-components";

import Table from './Table'
const Accessibility = () => {
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-4">
        <Header className="sm:text-3xl font-bold">Accessibility</Header>
        <h1 className="sm:text-2xl font-bold">Overview</h1>
        <p>Accessible design lets people of all abilities interact with, understand, and navigate our products.</p>
        <br/> 
        <h1 className="sm:text-2xl font-bold ">Guideline 1.1</h1><br/>
        {/* <table className="border-separate border">
          <thead>
          <tr>
            <th>Success Criteria</th>
            <th>Recommendation</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>Non Text Content</td>
              <td>
                <ul className="list-outside list-disc pl-4">
                    <li className='py-2 '>Images, form image buttons, and image map hot spots have appropriate, equivalent alternative text.</li>
                    <li className='py-2'>Images that do not convey content, are decorative, or contain content that is already conveyed in text are given empty alternative text (alt="") or implemented as CSS backgrounds. All linked images have descriptive alternative text.</li>
                    <li className='py-2'>Equivalent alternatives to complex images are provided in context or on a separate linked page.</li>
                    <li className='py-2'>Form buttons have a descriptive value.</li>
                    <li className='py-2'>Form inputs have associated text labels.</li>
                    <li className='py-2'>Embedded multimedia is identified via accessible text.</li>
                    <li className='py-2'>Frames and iframes are appropriately titled.</li>
                </ul>
              </td>
              </tr>
              <tr>
              <td>
                
                    <li className='py-2  h-6 w-7'><img src={tickImg} alt="tickImg"/></li>
                    <li className='py-2  h-6 w-7'><img src={crossImg} alt="crossImg"/></li>
                    <li className='py-2  h-6 w-7'><img src={crossImg} alt="crossImg"/></li>
                    <li className='py-2  h-6 w-7'><img src={tickImg} alt="tickImg"/></li>
                    <li className='py-2  h-6 w-7'><img src={crossImg} alt="crossImg"/></li>
                    <li className='py-2  h-6 w-7'><img src={tickImg} alt="tickImg"/></li>
                    <li className='py-2  h-6 w-7'><img src={crossImg} alt="crossImg"/></li>
                
              </td>
            </tr>
          </tbody>
        </table>
         */}
         <Table />
      </div>
    </div>
  );
};

export default Accessibility;
