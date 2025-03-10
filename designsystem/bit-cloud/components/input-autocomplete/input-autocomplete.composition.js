import React, {useState, useRef} from 'react';

import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';
import { InputAutocomplete } from './input-autocomplete';

const whiteBackground = { padding: "32px", backgroundColor: "#ffffff" };
const toggleButton = { padding: "16px 24px", border: "1px solid black", marginBottom: "20px", cursor: "pointer" };

// Basic Example
export const InputAutocompleteBasicExample = () => {
  const element = <InputAutocomplete
    callbackOnClick={(e, item) => { console.log(e, item); }}
    fetchUrl={'https://localhost:52535/api/contactsearch/place/?query='}
    placeholder="Skriv för att söka"
    keyword={"hej"}
  />;

  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <div style={whiteBackground}>
          {element}
        </div>
      </CompositionFonts>
    </>
  );
}

export const InputAutocompleteInHeaderSeearch = () => {
  const [open, setOpen] = useState(false);
  const inputAutocompleteRef = useRef();

  const handleResetQuery = () => {
    if(inputAutocompleteRef.current){
      inputAutocompleteRef.current.resetQuery();
    }
  }

  const element = <InputAutocomplete
    callbackOnClick={(e, item) => { console.log(e, item); }}
    fetchUrl={'https://api.addsearch.com/v1/suggest/cecae10a7a8fa96ae6ca84428bb77e0f?term='}
    placeholder="Skriv för att söka"
    formatSuggestionsResult={(data) => data.suggestions}
    suggestionText={'value'}
    useHeaderSearchStyle={true}
    focusOnOpen={true}
    searchButton={true}
    searchButtonText={'Söktext'}
    allowFreeTextSearch={true}
    dropdownPositionRelative={true}
    ref={inputAutocompleteRef}
  />;

  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <div style={whiteBackground}>
          <button onClick={() => setOpen(!open)} style={toggleButton}>Click to {open ? 'close' : 'open'} InputAutocomplete</button>
          <button onClick={handleResetQuery} style={toggleButton}>Reset</button>
          <form onSubmit={(e) => e.preventDefault()}>
            {open && element}
          </form>
        </div>
      </CompositionFonts>
    </>
  );
}

// Dummy data to use when testing list of suggestions
export const dummySuggestions = [
  {
    description: "Stockholm, Sverige",
    matched_substrings: [{ length: 4, offset: 0 }],
    place_id: "ChIJywtkGTF2X0YRZnedZ9MnDag",
    reference: "ChIJywtkGTF2X0YRZnedZ9MnDag",
    structured_formatting: {
      main_text: "Stockholm",
      main_text_matched_substrings: [{ length: 4, offset: 0 }],
      secondary_text: "Sverige"
    },
    terms: [
      { offset: 0, value: "Stockholm" },
      { offset: 11, value: "Sverige" }
    ],
    types: ["geocode", "political", "locality"]
  },
  {
    description: "Stockholms län, Sverige",
    matched_substrings: [{ length: 4, offset: 0 }],
    place_id: "ChIJPauYNIoH2EUR-vzAobVCa7M",
    reference: "ChIJPauYNIoH2EUR-vzAobVCa7M",
    structured_formatting: {
      main_text: "Stockholms län",
      main_text_matched_substrings: [{ length: 4, offset: 0 }],
      secondary_text: "Sverige"
    },
    terms: [
      { offset: 0, value: "Stockholms län" },
      { offset: 16, value: "Sverige" }
    ],
    types: ["political", "geocode", "administrative_area_level_1"]
  },
  {
    description: "Stocksund, Sverige",
    matched_substrings: [{ length: 4, offset: 0 }],
    place_id: "ChIJ7Ze3gvmcX0YRie4hytt1A1Q",
    reference: "ChIJ7Ze3gvmcX0YRie4hytt1A1Q",
    structured_formatting: {
      main_text: "Stocksund",
      main_text_matched_substrings: [{ length: 4, offset: 0 }],
      secondary_text: "Sverige"
    },
    terms: [
      { offset: 0, value: "Stocksund" },
      { offset: 11, value: "Sverige" }
    ],
    types: ["geocode", "locality", "political"]
  }
];
