import React, { useState } from "react";
import ExportIcon from "../../assets/img/Vector.png";
import CopyIcon from "../../assets/img/copyIcon.png";
import {
  Card,
  Header,
  Label,
  TextInput,
} from "@egovernments/digit-ui-react-components";

const TextInputs = () => {
  const [name, setName] = useState(false);
  const [inputName, setInputName] = useState("");
  const [number, setNumber] = useState(false);
  const [errorCode, setErrorCode] = useState(false);
  const handleChange = (e) => {
    setInputName(e.target.value);
  };
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-4">
        <Header>Text Input</Header>
        <Card
          className="px-3 py-5 cursor-pointer"
          onClick={() => setName(!name)}
        >
          <form>
            <div className="flex flex-col">
              <Label>Name</Label>
              <TextInput
                className="text-base"
                onChange={handleChange}
                value={inputName}
              />
            </div>
          </form>
          {name && (
            <div className="py-4 flex justify-between items-start">
              <div className="text-text_input_code">
                <p className="text-text_input_code py-2 text-xs">
                  <span className="text-banner_bg font-bold">import</span>
                  {` React from 'react';`}
                </p>
                <p className="text-text_input_code py-2 text-xs">
                  <span className="text-banner_bg font-bold">import</span>{" "}
                  Textfield from '@atlaskit/textfield';
                </p>
                <p className="text-text_input_code py-2 text-xs">{`export default function TextFieldDefaultExample() {`}</p>
                <p className="text-text_input_code py-2 text-xs">{`return <Textfield name="basic" aria-label="default text field" />;`}</p>
                <p className="text-text_input_code py-2 text-xs">{`}`}</p>
              </div>
              <div className="flex items-center">
                <img src={ExportIcon} alt="" className="pr-4" />
                <img src={CopyIcon} alt="" />
              </div>
            </div>
          )}
        </Card>
      </div>
      <div className="content_main">
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            When to use this component
          </h3>
          <p className="2xl:text-lg sm:text-sm">
            Use the text input component when you need to let users enter text
            that’s no longer than a single line, such as their name or phone
            number.
          </p>
        </div>
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            When not to use this component
          </h3>
          <p className="2xl:text-lg sm:text-sm">
            Do not use the text input component if you need to let users enter
            longer answers that might span multiple lines. In this case, you
            should use the textarea component.
          </p>
        </div>
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            How it works
          </h3>
          <p className="2xl:text-lg sm:text-sm">
            All text inputs must have visible labels; placeholder text is not an
            acceptable replacement for a label as it vanishes when users start
            typing.
          </p>
          <p className="2xl:text-lg sm:text-sm py-3">
            Labels should be aligned above the text input they refer to. They
            should be short, direct and written in sentence case. Do not use
            colons at the end of labels.
          </p>
          <p className="2xl:text-lg sm:text-sm py-3">
            If you’re asking just one question per page as recommended, you can
            set the contents of the <label /> as the page heading.{" "}
          </p>
          <p className="2xl:text-lg sm:text-sm py-3">
            This is good practice as it means that users of screen readers will
            only hear the contents once.
          </p>
          <p className="2xl:text-lg sm:text-sm py-3">
            Read more about why and how to set legends as headings.
          </p>
          <p className="2xl:text-lg sm:text-sm py-3">
            {" "}
            There are 2 ways to use the text input component. You can use HTML
            or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can
            use the Nunjucks macro.
          </p>
        </div>
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            Hint text
          </h3>
          <p className="2xl:text-lg sm:text-sm">
            Use hint text for help that’s relevant to the majority of users,
            like how their information will be used, or where to find it.
          </p>
        </div>
        <Card
          className="px-3 py-5 cursor-pointer"
          onClick={() => setNumber(!number)}
        >
          <form>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <TextInput
                  className="text-base"
                  onChange={handleChange}
                  value={inputName}
                />
              </div>
              <small className="text-xs">
                The mobile number entered must be unique
              </small>
            </div>
          </form>
          {number && (
            <div className="py-4 flex justify-between items-start">
              <div className="text-text_input_code">
                <p className="text-text_input_code py-2 text-xs">
                  <span className="text-banner_bg font-bold">import</span>
                  {` React from 'react';`}
                </p>
                <p className="text-text_input_code py-2 text-xs">
                  <span className="text-banner_bg font-bold">import</span>{" "}
                  Textfield from '@atlaskit/textfield';
                </p>
                <p className="text-text_input_code py-2 text-xs">{`export default function TextFieldDefaultExample() {`}</p>
                <p className="text-text_input_code py-2 text-xs">{`return <Textfield name="basic" aria-label="default text field" />;`}</p>
                <p className="text-text_input_code py-2 text-xs">{`}`}</p>
              </div>
              <div className="flex items-center">
                <img src={ExportIcon} alt="" className="pr-4" />
                <img src={CopyIcon} alt="" />
              </div>
            </div>
          )}
        </Card>
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            When not to use hint text
          </h3>
          <p className="2xl:text-lg sm:text-sm">
            Do not include links within hint text. While screen readers will
            read out the link text when describing the field, they will not tell
            users that the text is a link.
          </p>
        </div>
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            Avoid links
          </h3>
          <p className="2xl:text-lg sm:text-sm">
            Do not use long paragraphs and lists in hint text. Screen readers
            read out the entire text when users interact with the form element.
            This could frustrate users if the text is long.
          </p>
        </div>
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            Error Messages
          </h3>
          <p className="2xl:text-lg sm:text-sm">
            Error messages should be styled like this:
          </p>
        </div>
        <Card
          className="px-3 py-5 cursor-pointer"
          onClick={() => setErrorCode(!errorCode)}
        >
          <form>
            <div className="flex flex-col">
              <TextInput
                className="text-base border-red-400"
                value="+91945746"
              />
              <small className="text-xs text-red-400">
                The mobile number entered must be unique
              </small>
            </div>
          </form>
          {errorCode && (
            <div className="py-4 flex justify-between items-start">
              <div className="text-text_input_code">
                {/* <p>
              {`{% from "govuk/components/input/macro.njk" import govukInput %} 
                  {{ govukInput({
                    label: {
                      text: "What is the name of the event?",
                      classes: "govuk-label--l",
                      isPageHeading: true
                    },
                    id: "event-name",
                    name: "event-name",
                    hint: {
                      text: "The name you’ll use on promotional material."
                    },
                    errorMessage: {
                      text: "Enter an event name"
                    }
                  }) }}`} 
            </p> */}
                <p className="text-text_input_code py-2 pb-4 text-xs">{`{% from "govuk/components/input/macro.njk" import govukInput %}`}</p>
                <p className="text-text_input_code text-xs">{`{{ govukInput({`}</p>
                <p className="text-text_input_code text-xs">{`label: {`}</p>
                <p className="text-text_input_code text-xs">
                  text: "What is the name of the event?",
                </p>
                <p className="text-text_input_code text-xs">
                  classes: "govuk-label--l",
                </p>
                <p className="text-text_input_code text-xs">
                  isPageHeading: true
                </p>
                <p className="text-text_input_code text-xs">{`},`}</p>
                <p className="text-text_input_code text-xs">{`id: "event-name",`}</p>
                <p className="text-text_input_code text-xs">{`name: "event-name",`}</p>
                <p className="text-text_input_code text-xs">{`hint: {`}</p>
                <p className="text-text_input_code text-xs">{`text: "The name you’ll use on promotional material."`}</p>
                <p className="text-text_input_code text-xs">{`},`}</p>
                <p className="text-text_input_code text-xs">{`errorMessage: {`}</p>
                <p className="text-text_input_code text-xs">{`text: "Enter an event name"`}</p>
                <p className="text-text_input_code text-xs">{`}`}</p>
                <p className="text-text_input_code text-xs">{`}) }}`}</p>
              </div>
              <div className="flex items-center">
                <img src={ExportIcon} alt="" className="pr-4" />
                <img src={CopyIcon} alt="" />
              </div>
            </div>
          )}
        </Card>
        <div className="sm:w-3/5 w-full py-4">
          <p className="2xl:text-lg sm:text-sm">
            Make sure errors follow the guidance in error message and have
            specific error messages for specific error states.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextInputs;
