import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import ComingSoon from '../../assets/img/Patterns/soon.png'

const ResourcesOne = () => {
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-4">
        <Header>Resources</Header>
      </div>
      {/* <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure reiciendis dicta voluptatum amet error corporis delectus accusamus nesciunt magnam fuga, asperiores mollitia, possimus eos ducimus numquam architecto est totam autem?
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
        Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem modi necessitatibus velit delectus asperiores totam deleniti quia id placeat incidunt., sit amet consectetur adipisicing elit. Iure reiciendis dicta voluptatum amet error corporis delectus accusamus nesciunt magnam fuga, asperiores mollitia, possimus eos ducimus numquam architecto est totam autem?
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
        Lorem ipsum dolor, sit amet error corporis delectus accusamus nesciunt magnam fuga, asperiores mollitia, possimus eos ducimus numquam architecto est totam autem?
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
        Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde nihil fugiat nobis distinctio culpa atque repellat rem dolores enim. Suscipit corrupti sequi voluptatibus reiciendis, atque aliquam perferendis omnis dolor? ipsum dolor, sit amet consectetur adipisicing elit. Iure reiciendis dicta voluptatum amet error corporis delectus accusamus nesciunt magnam fuga, asperiores mollitia, possimus eos ducimus numquam architecto est totam autem?
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
        Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, id. dolor, sit amet consectetur adipisicing elit. Iure reiciendis dicta voluptatum amet error corporis delectus accusamus nesciunt magnam fuga, asperiores mollitia, possimus eos ducimus numquam architecto est totam autem?
        </p>
      </div> */}
      {/* <div className="w-120 h-60" style={{top:'0',bottom:'0',right:'0',left:'0',margin:'auto'}}> */}
          {/* <img src={rectImg} alt="rectangleImg"></img> */}
          <img src={ComingSoon} className="pl-56 pr-8 pt-8 pb-8 w-4/5" alt="ComingSoonImg"/>
          <h1 style={{textAlign:"center"}} className="sm:text-2xl font-bold">Coming Soon</h1>

      </div>
    // </div>
  );
};

export default ResourcesOne;
