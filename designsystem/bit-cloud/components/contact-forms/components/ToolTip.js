/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useEffect, useRef } from 'react';
import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';
import {useOnClickOutside} from '@konsumentverket-sverige/designsystem.utils';
import {
  centerPosition,
  informationButton, informationButtonOpen,
  informationButtonWrapper,
  leftPosition,
  rightPosition, showTooltip, tooltip, tooltipText
} from "../contact-forms.css";

const ToolTip = ({position = 'left', id = '', text='', label=''}) => {
  const [isOpen , setIsOpen] = useState(false);

  const tooltipRef = useRef();

  useOnClickOutside(tooltipRef, () => setIsOpen(false));

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!text) return null;

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  const positions = {
    left: leftPosition,
    center: centerPosition,
    right: rightPosition,
  }

  const handleBlur = (e) => {
    // Close tooltip when focusing outside of it
    if (!tooltipRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div css={informationButtonWrapper} className="tooltip">

      <button
        type="button"
        css={[informationButton, isOpen ? informationButtonOpen : null]}
        onClick={onClick}
        aria-controls={`tooltip-${id}`}
        aria-expanded={isOpen}
        aria-label={`Visa en hjälpande text för detta fält: ${label}`}
      >
        <SystemIcon icon={'Information'}/>
      </button>

      <div
        css={[
          tooltip,
          positions[position],
          isOpen ? showTooltip : null
        ]}
        role="tooltip"
        className="tooltip"
        ref={tooltipRef}
        onBlur={handleBlur}
        id={`tooltip-${id}`}
      >

        <p css={tooltipText}>{text}</p>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-controls={`tooltip-${id}`}
          aria-label={`Stäng tooltip ${label}`}
        >
          <SystemIcon icon={'MonoDeleteSmall'}/>
        </button>

      </div>
    </div>
  )
}

export default ToolTip;
