/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { tagItem, invertedTag, tagLink, tagsArea, tagsList, tagBlockItem, arrowStyle, iconStyle, tagHeading, tagIconHeading, tagsListItem, tagItemText, secondaryArrowStyleCSS } from './TagBlock.css';
import { Tag } from '../Tag/Tag'
import LinkArrow from '../Icons/SystemIcons/LinkArrow/LinkArrow';
import Arrow from '../Icons/SystemIcons/Arrow/Arrow';

const GetTags = (tags, onClick) => {
    return <ul css={tagsList}>{tags.slice(0, 3).map((child, idx) => {
        return <li key={`lcbc-${idx}`} css={tagsListItem}><Tag id={idx} onClick={onClick} url={child.url} text={(child.titleInNavigation && child.titleInNavigation) || (child.title && child.title) || (child.headline && child.headline)} style={tagItem} /></li>
    })}</ul>
}

const TagBlock = React.forwardRef(({ invertedColors = false, heading, headingLevel = 2, headingUrl, icon, tags, alternativeTagText, style, onClick, secondaryArrowStyle = false }, ref) => {

    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7']
    const SelectedHeading = headings[headingLevel - 1] || 'h2'
    const EditorIcon = icon
    return <div css={[tagBlockItem, invertedColors ? invertedTag : null, style]}>
        <a ref={ref} href={headingUrl} css={tagLink} className="noStyle" onClick={onClick} >
            {icon && <EditorIcon aria-hidden="true" css={iconStyle} />}
            <SelectedHeading className="tagHeading" css={[tagHeading, icon != null ? tagIconHeading : null]}>{heading}</SelectedHeading>
            {secondaryArrowStyle ?
                <LinkArrow aria-hidden='true' style={secondaryArrowStyleCSS} />
                : <Arrow aria-hidden="true" style={arrowStyle} />
            }
        </a>
        <div css={tagsArea}>
            {tags && tags.length > 0 ? GetTags(tags, onClick) : <p css={tagItemText}>{alternativeTagText}</p>}
        </div>
    </div>
})

export { TagBlock };