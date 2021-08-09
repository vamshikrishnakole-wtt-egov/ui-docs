import React from "react";
import HomeCard from "../common/HomeCard";
import Container from "../common/Container";
import brandLogo from "../../assets/img/brand.png"
import foundationLogo from "../../assets/img/foundations.png"
import componnetsLogo from "../../assets/img/components.png"
import contentLogo from "../../assets/img/content.png"
import patternLogo from "../../assets/img/pattern.png"
import resourcesLogo from "../../assets/img/resources.png"

const Data = [
  {
    id: 1,
    BrandLogo: brandLogo,
    heading: "Brand",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
    linkText: "Explore our Brand",
  },
  {
    id: 2,
    BrandLogo: foundationLogo,
    heading: "Foundations",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
    linkText: "Explore our Foundations",
  },
  {
    id: 3,
    BrandLogo: componnetsLogo,
    heading: "Components",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
    linkText: "Explore our Components",
  },
  {
    id: 4,
    BrandLogo: contentLogo,
    heading: "Content",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
    linkText: "Explore our Content",
  },
  {
    id: 5,
    BrandLogo: patternLogo,
    heading: "Patterns",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
    linkText: "Explore our Patterns",
  },
  {
    id: 6,
    BrandLogo: resourcesLogo,
    heading: "Resources",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
    linkText: "Explore our Resources",
  },
];

const HomeContent = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-16">
        {Data.map((item) => {
          return (
            <HomeCard
              key={item.id}
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
