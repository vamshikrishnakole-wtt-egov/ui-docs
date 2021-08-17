import React from "react";
import Card from "../common/Card";
import ColorsIcon from "../../assets/img/foundations/colors.png";
import TypoIcon from "../../assets/img/foundations/typo.png";
import IconoIcon from "../../assets/img/foundations/icono.png";
import { Header } from "@egovernments/digit-ui-react-components";
import arrowSign from "../../assets/img/arrow.png";
import { Link } from "react-router-dom";

const FoundationsPage = () => {
  const CardData = [
    {
      id: 1,
      heading: "Colors",
      Image: ColorsIcon,
      para: "Color distinguishes our brand and helps us create consistent experiences across products.",
      linkItem : "Explore",
      link : "/foundations/colors"
    },
    {
      id: 2,
      heading: "Typography",
      Image: TypoIcon,
      para: "Typography is our system of fonts. Each font conveys the appropriate sentiment to assist our users through each stage of their journey.",
      linkItem : "Explore",
      link : "/foundations/typography"
    },
    {
      id: 3,
      heading: "Iconography",
      Image: IconoIcon,
      para: "Icons are visual representations of commands, devices, directories, or common actions.",
      linkItem : "Explore",
      link :  "/foundations/iconography"
    },
  ];
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="pb-2">
        <Header>Foundations</Header>
      </div>
      <div className="pb-4">
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
          Foundations are the visual elements needed to create engaging
          end-to-end user experiences. This includes guidance on iconography,
          typography, layout and structure.
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
          {" "}
          If you are using the DIGIT Prototype Kit or have DIGIT Frontend
          included in your build, the coded examples in the Design System will
          not need any additional styling.
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
          If you need to apply Foundations manually, you should still follow
          existing DIGIT conventions. For example, do not assign new meanings to
          colours, do not change the style of buttons or adjust the thickness of
          borders on form inputs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {CardData.map((item) => {
          return (
            <Card key={item.id}>
              <div className="p-8">
                <img src={item.Image} alt={item.heading} className="w-16" />
                <h2 className="py-3 2xl:text-2xl sm:text-xl">{item.heading}</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                  {item.para}
                </p>
                <Link
                  to={item.link}
                  className="text-border xl:text-base md:text-sm sm:text-xs flex items-center"
                >
                  {item.linkItem}{" "}
                  <span>
                    <img src={arrowSign} alt="->" className="w-4 pl-1" />
                  </span>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FoundationsPage;
