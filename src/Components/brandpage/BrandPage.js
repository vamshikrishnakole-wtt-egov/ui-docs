import { Header } from "@egovernments/digit-ui-react-components";
import React from "react";
import { Link } from "react-router-dom";
import MissionImg from "../../assets/img/brand/mission.png";
import PersonalityImg from "../../assets/img/brand/personality.png";
import PromiseImg from "../../assets/img/brand/promise.png";
import ValuesImg from "../../assets/img/brand/values.png";
import Card from "../common/Card";
import arrowSign from "../../assets/img/arrow.png";

const BrandPage = () => {
  const CardData = [
    {
      id: 1,
      heading: "Mission",
      Image: MissionImg,
      para: "Our mission is to unleash the potential in every team.",
      linkContent: "Explore",
      linkpath : "/brand/mission"
    },
    {
      id: 2,
      heading: "Personality",
      Image: PersonalityImg,
      para: "Our personality describes the tone we use for external communications. It should be expressed as an embodiment of our values.",
      linkContent: "Explore",
      linkpath : "/brand/personality"
    },
    {
      id: 3,
      heading: "Promise",
      Image: PromiseImg,
      para: "Our promise is that our tools and practices will help teams work better together in an agile, open, and scalable way.",
      linkContent: "Explore",
      linkpath : "/brand/promise"
    },
    {
      id: 4,
      heading: "Values",
      Image: ValuesImg,
      para: "Our values reflect the spirit with which DIGIT works to fulfill our promise.",
      linkContent: "Explore",
      linkpath : "/brand/values"
    },
  ];
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="pb-2">
        <Header>Brand</Header>
      </div>
      <div className="pb-4">
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
          Our brand reflects who we are and how we want our users to feel when
          they use our products. It’s the unique combination of our mission and
          values, and principles that drive our promise to unleash the potential
          of every team.
        </p>
      </div>
      <div className="grid grid-cols-1 2xl:gap-8 gap-4 sm:grid-cols-2">
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
                  to={item.linkpath}
                  className="text-border xl:text-base md:text-sm sm:text-xs flex items-center"
                >
                  {item.linkContent}{" "}
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

export default BrandPage;
