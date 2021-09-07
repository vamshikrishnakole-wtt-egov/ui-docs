import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/navbar/Header";
import Components from "./Pages/components/Components";
import ComponentsTextInput from "./Pages/components/ComponentsTextInput";
import Foundations from "./Pages/foundations/Foundations";
import FoundationsColor from "./Pages/foundations/FoundationsColor";
import FoundationsTypography from "./Pages/foundations/FoundationsTypography";
import FoundationsIconography from "./Pages/foundations/FoundationsIconography";
import Brand from "./Pages/brand/Brand";
import ComponentsHeader from "./Pages/components/ComponentsHeader";
import Input from "./Pages/components/Input";
import RadioPage from "./Pages/components/RadioPage";
import CheckboxPage from "./Pages/components/CheckboxPage";
import ButtonPage from "./Pages/components/ButtonPage";
import ToastMessagePage from "./Pages/components/ToastMessagePage";
import CardsPage from "./Pages/components/CardsPage";
import BannerPage from "./Pages/components/BannerPage";
import BreadCrumbsPage from "./Pages/components/BreadCrumbsPage";
import RatingPage from "./Pages/components/RatingPage";
import ImageViewerPage from "./Pages/components/ImageViewerPage";
import NumbersPage from "./Pages/components/NumbersPage";
import DropDownsPage from "./Pages/components/DropDownsPage";
import UploadFilesPage from "./Pages/components/UploadFilesPage";
import MissionPage from "./Pages/brand/MissionPage";
import PersonalityPage from "./Pages/brand/PersonalityPage";
import PromisePage from "./Pages/brand/PromisePage";
import ValuesPage from "./Pages/brand/ValuesPage";
import ContentPage from "./Pages/content/ContentPage";
import PatternsPage from "./Pages/patterns/PatternsPage";
import ResourcesPage from "./Pages/resources/ResourcesPage";
import BackLinksPage from "./Pages/components/BackLinksPage";

// import { Body, TopBar } from "@egov/digit-ui-react-components"; // for component use

function App() {
  window.Digit = window.Digit || {};

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/components">
            <Components />
          </Route>
          <Route path="/components/text-input">
            <ComponentsTextInput />
          </Route>
          <Route path="/components/header">
            <ComponentsHeader />
          </Route>
          <Route path="/components/input">
            <Input />
          </Route>
          <Route path="/components/radio">
            <RadioPage />
          </Route>
          <Route path="/components/checkbox">
            <CheckboxPage />
          </Route>
          <Route path="/components/button">
            <ButtonPage />
          </Route>
          <Route path="/components/banner">
            <BannerPage />
          </Route>
          <Route path="/components/toast-message">
            <ToastMessagePage />
          </Route>
          <Route path="/components/cards">
            <CardsPage />
          </Route>
          <Route path="/components/breadcrumbs">
            <BreadCrumbsPage />
          </Route>
          <Route path="/components/ratings">
            <RatingPage />
          </Route>
          <Route path="/components/image-viewer">
            <ImageViewerPage />
          </Route>
          <Route path="/components/number">
            <NumbersPage />
          </Route>
          <Route path="/components/drop-down">
            <DropDownsPage />
          </Route>
          <Route path="/components/upload-file">
            <UploadFilesPage />
          </Route>
          <Route exact path="/components/backlink">
            <BackLinksPage />
          </Route>
          <Route path="/foundations">
            <Foundations />
          </Route>
          <Route path="/foundations/colors">
            <FoundationsColor />
          </Route>
          <Route path="/foundations/typography">
            <FoundationsTypography />
          </Route>
          <Route path="/foundations/iconography">
            <FoundationsIconography />
          </Route>
          <Route path="/brand">
            <Brand />
          </Route>
          <Route path="/brand/mission">
            <MissionPage />
          </Route>
          <Route path="/brand/personality">
            <PersonalityPage />
          </Route>
          <Route path="/brand/promise">
            <PromisePage />
          </Route>
          <Route path="/brand/values">
            <ValuesPage />
          </Route>
          <Route path="/content">
            <ContentPage />
          </Route>
          <Route path="/patterns">
            <PatternsPage />
          </Route>
          <Route path="/resources">
            <ResourcesPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
