import React from 'react';
import { ContactForms } from './contact-forms.js';
import { WithContentExpander } from '@konsumentverket-sverige/designsystem.with-content-expander';

import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';

const formMicroCopy = {
  guidance: {
    guidanceEmailLabel: 'E-post (obligatoriskt)*',
    guidanceEmailPlaceholder: 'Skriv din e-postadress',
    guidanceEmailHelpText: 'Hjälptext för emailfält',
    guidanceMunicipalityLabel: 'Kommun (frivilligt)',
    guidanceMunicipalityPlaceholder: 'Skriv din kommun',
    guidanceMunicipalityHelpText: 'Hjälptext för kommunfält',
    guidanceCompanyLabel: 'Företag (frivilligt)',
    guidanceCompanyPlaceholder: 'Skriv vilket företag det berör',
    guidanceCompanyHelpText: 'Hjälptext för företagsfält',
    guidanceSubjectLabel: 'Ämne (obligatoriskt)*',
    guidanceSubjectPlaceholder: 'Skriv ämnet för ditt ärende',
    guidanceSubjectHelpText: 'Hjälptext för ämnesfält',
    guidanceQuestionLabel: 'Din fråga (obligatoriskt)*',
    guidanceQuestionPlaceholder: 'Skriv din fråga',
    guidanceSubmitButtonText: 'Skicka',
  },
  otherCases: {
    otherCasesEmailLabel: 'E-post (obligatoriskt)*',
    otherCasesEmailPlaceholder: 'Skriv din e-postadress',
    otherCasesEmailHelpText: 'Hjälptext för emailfält',
    otherCasesSubjectLabel: 'Ämne (obligatoriskt)*',
    otherCasesSubjectPlaceholder: 'Beskriv kort vad din fråga handlar om',
    otherCasesSubjectHelpText: 'Hjälptext för ämnesfält',
    otherCasesQuestionLabel: 'Din fråga (obligatoriskt)*',
    otherCasesQuestionPlaceholder: 'Skriv kort vad du vill ha hjälp med',
    otherCasesFileLabel: 'Lägg till filer',
    otherCasesFileTypes: '(pdf, docx, txt, odt, jpg, png, gif. Max 20 MB)',
    otherCasesUploadBoxLabel: 'Ladda upp dina filer här',
    otherCasesUploadBoxText: 'Dra filer hit eller klicka här för att bläddra',
    otherCasesFileDescriptionLabel: 'Beskriv vad filen visar',
    otherCasesFileDescriptionText: '(t.ex. bild på varan, annonsen eller mejlen)',
    otherCasesRemoveFile: 'Ta bort filen',
    otherCasesFileDescriptionPlaceholder: 'Skriv en kort beskrivning av filen',
    otherCasesSubmitButtonText: 'Skicka',
  },
  subscribe: {
    subscribeEmailLabel: 'E-post (obligatoriskt)*',
    subscribeEmailPlaceholder: 'Skriv din e-postadress',
    subscribeEmailHelpText: '',
    consentLabel: 'Ja, jag samtycker till att Konsumentverket får använda min e-postadress för att skicka nyheter från Konsumentverket till mig.',
    subscribeSubmitButtonText: 'Skicka',
  }
}

export const BasicFormGuidance = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <ContactForms
        title="Kontakta vägledning"
        type={'guidance'}
        handleFormSubmit={(data) => console.log(data)}
        texts={formMicroCopy.guidance}
      >
        <WithContentExpander
          useLightBlueAlternativeStyling={true}
          text="Så behandlar vi dina personuppgifter"
          wrappedComponent={
            <>
              <p>Lorem ipsum dolor sit amet</p>
            </>
          }
        />
      </ContactForms>
    </CompositionFonts>
  );
};

export const BasicFormOtherCases = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <ContactForms
        title="Kontakta vägledning"
        type={'otherCases'}
        handleFormSubmit={(data) => console.log(data)}
        texts={formMicroCopy.otherCases}
      >
        <WithContentExpander
          useLightBlueAlternativeStyling={true}
          text="Så behandlar vi dina personuppgifter"
          wrappedComponent={
            <>
              <p>Lorem ipsum dolor sit amet</p>
            </>
          }
        />
        <WithContentExpander
          useLightBlueAlternativeStyling={true}
          text="Så behandlar vi dina personuppgifter"
          wrappedComponent={
            <>
              <p>Lorem ipsum dolor sit amet</p>
            </>
          }
        />
      </ContactForms>
    </CompositionFonts>
  );
};

export const BasicFormSubscribe = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <ContactForms
        title="Prenumerera"
        type={'subscribe'}
        handleFormSubmit={(data) => console.log(data)}
        texts={formMicroCopy.subscribe}
      >
        <WithContentExpander
          useLightBlueAlternativeStyling={true}
          text="Så behandlar vi dina personuppgifter"
          wrappedComponent={
            <>
              <p>Lorem ipsum dolor sit amet</p>
            </>
          }
        />
      </ContactForms>
    </CompositionFonts>
  );
};
