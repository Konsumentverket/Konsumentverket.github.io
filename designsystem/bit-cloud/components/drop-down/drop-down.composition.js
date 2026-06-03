import React, { useState } from 'react';

import { Dropdown } from './drop-down.js';

import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';
import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';

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
          data={[
            {
              text: 'Vivamus non feugiat justo, id ullamcorper est',
              href: '#1',
            },
            {
              text: 'Integer vehicula luctus',
              href: '#2',
            },
            {
              text: 'Mauris mattis est sapien nec accumsan est',
              href: '#3',
            },
            {
              text: 'Proin sit amet tempor lorem ut sed dignissim velit, semper tristique',
              href: '#4',
            },
          ]}
        />
      </CompositionFonts>
    </div>
  );
};

export const BasicTextDropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [value, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState(false);

  const onValueSet = (val, e) => {
    alert('VAL' + val);
    setPlaceholder(val);
    const value = val;
    setInputValue({ value: value, label: value });
  };

  return (
    <div style={{ minHeight: '400px' }}>
      <CompositionFonts>
        <GlobalStyles />
        <Dropdown
          id="lorem"
          type="text"
          closeOnChange={true}
          showApplyButton={false}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          setValue={onValueSet}
          label={placeholder ? placeholder : 'Lorem ipsum dolor sit amet'}
          value={value}
          onChange={(e) => {
            setInputValue(e.value);
            setIsExpanded(false);
          }}
          data={[
            {
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
            },
          ]}
        />
      </CompositionFonts>
    </div>
  );
};

const data = [
  {
    text: 'Vivamus non feugiat justo, id ullamcorper est',
    value: 'vivamus-non-feugiat-justo-id-ullamcorper-est-radio',
    disabled: true,
    stats: {
      number: 109,
      label: 'Antal sidor: 109',
    },
  },
  {
    text: 'Integer vehicula luctus',
    value: 'integer-vehicula-luctus-radio',
    stats: {
      number: 19,
      label: 'Antal sidor: 19',
    },
  },
  {
    text: 'Mauris mattis est sapien nec accumsan est',
    value: 'mauris-mattis-est-sapien-nec-accumsan-est-radio',
    disabled: true,
    stats: {
      number: 9,
      label: 'Antal sidor: 9',
    },
  },
  {
    text: 'Proin sit amet tempor lorem ut sed dignissim velit, semper tristique',
    value:
      'proin-sit-amet-tempor-lorem-ut-sed-dignissim-velit-semper-tristique-radio',
  },
];

const radioData = [
  {
    text: 'Default',
    value: 'default',
  },
  ...data,
];

export const BasicCheckboxDropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dropdownValue, setDropdownValue] = useState([]);
  console.log('Dropdown value: ', dropdownValue);

  const resetValue = () => {
    setDropdownValue([]);
  };

  const onApplyFilter = () => {
    console.log('Apply filter callback');
  };

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
};

export const PlainSortDropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState(['updated']);

  const sortOptions = [
    { text: 'Senast uppdaterad', value: 'updated' },
    { text: 'Kort lektionstid överst', value: 'shortTime' },
    { text: 'Lång lektionstid överst', value: 'longTime' },
    { text: 'Namn på lektion (A-Ö)', value: 'nameAZ' },
  ];

  const currentLabel =
    sortOptions.find((o) => o.value === selected[0])?.text ?? '';

  return (
    <div style={{ minHeight: '400px', padding: '24px' }}>
      <CompositionFonts>
        <GlobalStyles />
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <Dropdown
            id="plain-sort"
            plain={true}
            panelWidth="310px"
            type="radio"
            showApplyButton={false}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            label={
              <>
                <SystemIcon icon="SortOrder" aria-hidden="true" />
                {currentLabel}
              </>
            }
            value={selected}
            onChange={(value) => {
              setSelected(value);
              setIsExpanded(false);
            }}
            data={sortOptions}
          />
        </div>
      </CompositionFonts>
    </div>
  );
};

export const PlainSortDropDownToTheFarRight = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState(['updated']);

  const sortOptions = [
    { text: 'Senast uppdaterad', value: 'updated' },
    { text: 'Kort lektionstid överst', value: 'shortTime' },
    { text: 'Lång lektionstid överst', value: 'longTime' },
    { text: 'Namn på lektion (A-Ö)', value: 'nameAZ' },
  ];

  const currentLabel =
    sortOptions.find((o) => o.value === selected[0])?.text ?? '';

  return (
    <div style={{ minHeight: '400px', padding: '24px' }}>
      <CompositionFonts>
        <GlobalStyles />
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'right' }}
        >
          <Dropdown
            id="plain-sort"
            plain={true}
            panelWidth="310px"
            type="radio"
            showApplyButton={false}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            label={
              <>
                <SystemIcon icon="SortOrder" aria-hidden="true" />
                {currentLabel}
              </>
            }
            value={selected}
            onChange={(value) => {
              setSelected(value);
              setIsExpanded(false);
            }}
            data={sortOptions}
          />
        </div>
      </CompositionFonts>
    </div>
  );
};

export const BasicRadioDropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dropdownValue, setDropdownValue] = useState([]);
  console.log('Dropdown value: ', dropdownValue);

  const resetValue = () => {
    setDropdownValue([]);
  };

  const onApplyFilter = () => {
    console.log('Apply filters callback');
  };

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
  );
};
