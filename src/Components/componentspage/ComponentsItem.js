import React from 'react'
import ComponentsCard from './ComponentsCard'
import ComponentsImg1 from "../../assets/img/components/1.png";
import ComponentsImg2 from "../../assets/img/components/2.png";
import ComponentsImg3 from "../../assets/img/components/3.png";
import ComponentsImg4 from "../../assets/img/components/4.png";
import ComponentsImg5 from "../../assets/img/components/5.png";
import ComponentsImg6 from "../../assets/img/components/6.png";
import ComponentsImg7 from "../../assets/img/components/7.png";
import ComponentsImg8 from "../../assets/img/components/8.png";
import ComponentsImg9 from "../../assets/img/components/9.png";
import ComponentsImg10 from "../../assets/img/components/10.png";
import ComponentsImg11 from "../../assets/img/components/11.png";
import ComponentsImg12 from "../../assets/img/components/12.png";
import ComponentsImg13 from "../../assets/img/components/13.png";
import ComponentsImg14 from "../../assets/img/components/14.png";
import ComponentsImg15 from "../../assets/img/components/15.png";
import ComponentsImg16 from "../../assets/img/components/16.png";
import ComponentsImg17 from "../../assets/img/components/17.png";

const Data = [
    {
      id: 1,
      Image: ComponentsImg1,
      heading: "Header",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 2,
      Image: ComponentsImg2,
      heading: "Back Link",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 3,
      Image: ComponentsImg3,
      heading: "Bread Crumbs",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 4,
      Image: ComponentsImg4,
      heading: "Buttons",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 5,
      Image: ComponentsImg5,
      heading: "Checkbox",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 6,
      Image: ComponentsImg6,
      heading: "Panel",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 7,
      Image: ComponentsImg7,
      heading: "Radio",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 8,
      Image: ComponentsImg8,
      heading: "Select",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 9,
      Image: ComponentsImg9,
      heading: "Text Input",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 10,
      Image: ComponentsImg10,
      heading: "Warning Text",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 11,
      Image: ComponentsImg11,
      heading: "Sidenav",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 12,
      Image: ComponentsImg12,
      heading: "Cards",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 13,
      Image: ComponentsImg13,
      heading: "Tooltip",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 14,
      Image: ComponentsImg14,
      heading: "Badge",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 15,
      Image: ComponentsImg15,
      heading: "Chip",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 16,
      Image: ComponentsImg16,
      heading: "Toast",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 17,
      Image: ComponentsImg17,
      heading: "Popup",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
  ];

const ComponentsItem = () => {
    return (
        <> 
           <div className="w-5/6 mb-60">
            <div className="pb-2">
                <h2 className="2xl:text-3xl xl:text-2xl sm:text-xl font-bold">Components</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 my-2">
            {
                Data.map(item=>{
                    return(
                        <ComponentsCard Image={item.Image} heading ={item.heading} para={item.para} key={item.id} />
                    )
                })
            }
            </div>
           </div> 
        </>
    )
}

export default ComponentsItem
