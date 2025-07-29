import React, {useState} from 'react';

import { Dropdown } from './drop-down.js';

import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicLinksDropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ minHeight: '400px' }}>
      <CompositionFonts>
        <GlobalStyles />
        <Dropdown
          id="lorem"
          label="Lorem ipsum dolor sit amet"
          type="link"
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          data={[{
            text: 'Vivamus non feugiat justo, id ullamcorper est',
            href: '#1'
          },
          {
            text: 'Integer vehicula luctus',
            href: '#2'
          },
          {
            text: 'Mauris mattis est sapien nec accumsan est',
            href: '#3'
          },
          {
            text: 'Proin sit amet tempor lorem ut sed dignissim velit, semper tristique',
            href: '#4'
          }]}
        />
      </CompositionFonts>
    </div>
  );
}

export const BasicTextDropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onValueSet = (val) => {
  }

  return (
    <div style={{ minHeight: '400px' }}>
      <CompositionFonts>
        <GlobalStyles />
        <Dropdown
          id="lorem"
          label="Lorem ipsum dolor sit amet"
          type="text"
          showApplyButton={false}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          setValue={onValueSet}
          data={[{
            text: 'Vivamus non feugiat justo, id ullamcorper est',
          },
            {
              text: 'Integer vehicula luctus',
            },
            {
              text: 'Mauris mattis est sapien nec accumsan est',
            },
            {
              text: 'Proin sit amet tempor lorem ut sed dignissim velit, semper tristique',
            }]}
        />
      </CompositionFonts>
    </div>
  );
}

const data = [
  {
    text: 'Vivamus non feugiat justo, id ullamcorper est',
    value: 'vivamus-non-feugiat-justo-id-ullamcorper-est-radio',
    disabled: true,
    stats: {
      number: 109,
      label: "Antal sidor: 109"
    }
  },
  {
    text: 'Integer vehicula luctus',
    value: 'integer-vehicula-luctus-radio',
    stats: {
      number: 19,
      label: "Antal sidor: 19"
    }
  },
  {
    text: 'Mauris mattis est sapien nec accumsan est',
    value: 'mauris-mattis-est-sapien-nec-accumsan-est-radio',
    disabled: true,
    stats: {
      number: 9,
      label: "Antal sidor: 9"
    }
  },
  {
    text: 'Proin sit amet tempor lorem ut sed dignissim velit, semper tristique',
    value: 'proin-sit-amet-tempor-lorem-ut-sed-dignissim-velit-semper-tristique-radio',
  }
]

const radioData = [
  {
    text: 'Default',
    value: 'default',
  },
  ...data,
]

export const BasicCheckboxDropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dropdownValue, setDropdownValue] = useState([]);
  console.log("Dropdown value: ", dropdownValue)

  const resetValue = () => {
    setDropdownValue([])
  }

  const onApplyFilter = () => {
    console.log("Apply filter callback")
  }

  return (
    <div style={{ minHeight: '400px' }}>
      <CompositionFonts>
        <GlobalStyles />
        <Dropdown
          id="lorem-check"
          label="Lorem ipsum dolor sit amet"
          type="checkbox"
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          onChange={(value, event) => {
            setDropdownValue(value);
          }}
          value={dropdownValue}
          data={data}
          onApplyFilter={onApplyFilter}
          onResetFilter={resetValue}
          closeOnChange={false}
        />
      </CompositionFonts>
    </div>
  );
}

export const BasicRadioDropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dropdownValue, setDropdownValue] = useState([]);
  console.log("Dropdown value: ", dropdownValue)

  const resetValue = () => {
    setDropdownValue([])
  }

  const onApplyFilter = () => {
    console.log("Apply filters callback")
  }

  return (
    <div style={{ minHeight: '600px' }}>
      <CompositionFonts>
        <GlobalStyles />
        <Dropdown
          id="lorem-select"
          label="Lorem ipsum dolor sit amet"
          type="radio"
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          onChange={(value, event) => {
            setDropdownValue(value);
          }}
          value={dropdownValue}
          data={radioData}
          onApplyFilter={onApplyFilter}
          onResetFilter={resetValue}
        />
      </CompositionFonts>
    </div>
  )
}
