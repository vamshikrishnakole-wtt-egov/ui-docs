import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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

// import { Body, TopBar } from "@egov/digit-ui-react-components"; // for component use

function App() {
  window.Digit = window.Digit || {};

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/ui-docs">
            <Home />
          </Route>
          <Route exact path="/ui-docs/components">
            <Components />
          </Route>
          <Route exact path="/ui-docs/components/text-input">
            <ComponentsTextInput />
          </Route>
          <Route exact path="/ui-docs/components/header">
            <ComponentsHeader />
          </Route>
          <Route exact path="/ui-docs/components/input">
            <Input />
          </Route>
          <Route exact path="/ui-docs/components/radio">
            <RadioPage />
          </Route>
          <Route exact path="/ui-docs/components/checkbox">
            <CheckboxPage />
          </Route>
          <Route exact path="/ui-docs/components/button">
            <ButtonPage />
          </Route>
          <Route exact path="/ui-docs/components/banner">
            <BannerPage />
          </Route>
          <Route exact path="/ui-docs/components/toast-message">
            <ToastMessagePage />
          </Route>
          <Route exact path="/ui-docs/components/cards">
            <CardsPage />
          </Route>
          <Route exact path="/ui-docs/components/breadcrumbs">
            <BreadCrumbsPage />
          </Route>
          <Route exact path="/ui-docs/components/ratings">
            <RatingPage />
          </Route>
          <Route exact path="/ui-docs/components/image-viewer">
            <ImageViewerPage />
          </Route>
          <Route exact path="/ui-docs/components/number">
            <NumbersPage />
          </Route>
          <Route exact path="/ui-docs/components/drop-down">
            <DropDownsPage />
          </Route>
          <Route exact path="/ui-docs/components/upload-file">
            <UploadFilesPage />
          </Route>
          <Route exact path="/ui-docs/foundations">
            <Foundations />
          </Route>
          <Route exact path="/ui-docs/foundations/colors">
            <FoundationsColor />
          </Route>
          <Route exact path="/ui-docs/foundations/typography">
            <FoundationsTypography />
          </Route>
          <Route exact path="/ui-docs/foundations/iconography">
            <FoundationsIconography />
          </Route>
          <Route exact path="/ui-docs/brand">
            <Brand />
          </Route>
          <Route exact path="/ui-docs/brand/mission">
            <MissionPage />
          </Route>
          <Route exact path="/ui-docs/brand/personality">
            <PersonalityPage />
          </Route>
          <Route exact path="/ui-docs/brand/promise">
            <PromisePage />
          </Route>
          <Route exact path="/ui-docs/brand/values">
            <ValuesPage />
          </Route>
          <Route exact path="/ui-docs/content">
            <ContentPage />
          </Route>
          <Route exact path="/ui-docs/patterns">
            <PatternsPage />
          </Route>
          <Route exact path="/ui-docs/resources">
            <ResourcesPage />
          </Route>
          <Redirect to="/ui-docs/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
