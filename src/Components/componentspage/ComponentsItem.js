import React from 'react'
import ComponentIcon from "../../assets/img/brand.png"
import ComponentsCard from './ComponentsCard'
import ComponentsImg from "../../assets/img/components.png";

const Data = [
    {
      id: 1,
      Image: ComponentsImg,
      heading: "Header",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 2,
      Image: ComponentsImg,
      heading: "Back Link",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 3,
      Image: ComponentsImg,
      heading: "Bread Crumbs",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 4,
      Image: ComponentsImg,
      heading: "Buttons",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 5,
      Image: ComponentsImg,
      heading: "Checkbox",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 6,
      Image: ComponentsImg,
      heading: "Panel",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 7,
      Image: ComponentsImg,
      heading: "Radio",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 8,
      Image: ComponentsImg,
      heading: "Select",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 9,
      Image: ComponentsImg,
      heading: "Text Input",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 10,
      Image: ComponentsImg,
      heading: "Warning Text",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 11,
      Image: ComponentsImg,
      heading: "Sidenav",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 12,
      Image: ComponentsImg,
      heading: "Cards",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 13,
      Image: ComponentsImg,
      heading: "Tooltip",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 14,
      Image: ComponentsImg,
      heading: "Badge",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 15,
      Image: ComponentsImg,
      heading: "Chip",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 16,
      Image: ComponentsImg,
      heading: "Toast",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: 17,
      Image: ComponentsImg,
      heading: "Popup",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
  ];

const ComponentsItem = () => {
    return (
        <> 
           <div className="mb-60">
            <div className="flex items-center">
                <img src={ComponentIcon} alt="icon" className="w-6 h-6" />
                <h2 className="text-2xl font-bold pl-2">Components</h2>
            </div>
            <div className="my-4">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="grid grid-cols-3 gap-8 my-2">
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
