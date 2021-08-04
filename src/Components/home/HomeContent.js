import React from "react";
import HomeCard from "../common/HomeCard";
import BrandLogo from "../../assets/img/brand.png";
import Container from "../common/Container";

const Data = [
  {
    id: 1,
    BrandLogo: BrandLogo,
    heading: "Brand",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
    linkText: "Explore our Brand",
  },
  {
    id: 1,
    BrandLogo: BrandLogo,
    heading: "Foundations",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
    linkText: "Explore our Brand",
  },
  {
    id: 1,
    BrandLogo: BrandLogo,
    heading: "Components",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
    linkText: "Explore our Brand",
  },
  {
    id: 1,
    BrandLogo: BrandLogo,
    heading: "Components",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
    linkText: "Explore our Brand",
  },
  {
    id: 1,
    BrandLogo: BrandLogo,
    heading: "Components",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
    linkText: "Explore our Brand",
  },
  {
    id: 1,
    BrandLogo: BrandLogo,
    heading: "Components",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
    linkText: "Explore our Brand",
  },
];

const HomeContent = () => {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-8 my-16">
        {Data.map((item) => {
          return (
            <HomeCard
              brandLogo={item.BrandLogo}
              heading={item.heading}
              text={item.text}
              linkContent={item.linkText}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default HomeContent;
