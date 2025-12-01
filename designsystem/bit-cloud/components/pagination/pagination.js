/** @jsx jsx */

import { jsx } from '@emotion/react'
import React from 'react'

import {
  paginationWrapperStyle,
  pageStyle,
  prevPageStyle,
  nextPageStyle,
  distanceIndicatorStyle,
  currentPageStyle,
  prevPageStyleHidden,
} from './pagination.css.js';

import {
  Icon,
} from "@konsumentverket-sverige/designsystem.icon"

export const Pagination = ({
  pageSize,
  total,
  currentPage,
  baseUrl,
  onClick = () => { },
  style,
  seoCallback,
  linkComponent: LinkComponent = 'a',
}) => {

  if (total == 0)
    return null;

  const totalNumberOfPages = Math.ceil(total / pageSize);
  const links = Object.keys([...new Array(totalNumberOfPages)]).map(val => parseInt(val) + 1);

  const searchRadius = currentPage == totalNumberOfPages || currentPage == 1 ? 2 : 1;

  const createHref = (pageNumber) => {
    const url = new URL(baseUrl, "http://f.a");
    url.searchParams.set("page", pageNumber);
    return url.pathname + url.search
  }

  //filter pages that are close to the current page
  const shouldBeDisplayed = (page) => {
    if (page == currentPage)
      return true;
    if (page > currentPage && currentPage + searchRadius >= page)
      return true;
    if (page < currentPage && currentPage - searchRadius <= page)
      return true;

    return false;
  }

  const filteredLink = links.filter((x) => shouldBeDisplayed(x));

  const firstLink = () => {
    if (filteredLink.some(x => x === 1))
      return null;

    const distanceEl = filteredLink.some(x => x === 2) ? null : <span css={distanceIndicatorStyle}>...</span>
    return <><LinkComponent injected="true" className="noStyle first" href={createHref(1)} onClick={(e) => onClick(e, 1)} css={[pageStyle]}>1</LinkComponent>{distanceEl}</>;
  }

  const lastLink = () => {
    const max = Math.max(...links)

    if (filteredLink.some(x => x == max))
      return null

    const distanceEl = filteredLink.some(x => x === max - 1) ? null : <span css={distanceIndicatorStyle}>...</span>
    return <>{distanceEl}<LinkComponent injected="true" className="noStyle last" href={createHref(max)} onClick={(e) => onClick(e, max)} css={pageStyle}>{max}</LinkComponent></>;
  }

  const isFirstPage = currentPage == 1;
  const lastPage = Math.max(...links);
  const isLastPage = lastPage == currentPage;
  const prevPage = isFirstPage ? null : createHref(currentPage - 1)
  const nextPage = isLastPage ? null : createHref(currentPage + 1)
  const SeoCallbackResult = seoCallback ? seoCallback(prevPage, nextPage) : null;

  const getClass = (pageNumber) => {
    if (lastPage === pageNumber)
      return "last noStyle";
    if (pageNumber === 1)
      return "first noStyle";
    return "noStyle";
  }

  return <nav aria-label="pagination" css={[paginationWrapperStyle, style]}>
    {isFirstPage ? (
      <span css={[prevPageStyle, prevPageStyleHidden]}>
        <Icon icon="MonoArrowRight" />
      </span>
    ): (
      <LinkComponent
        injected="true"
        href={createHref(currentPage - 1)}
        onClick={(e) => onClick(e, currentPage - 1)}
        css={prevPageStyle} aria-label="Föregående sida"
      >
        <Icon icon="MonoArrowRight" />
      </LinkComponent>
    )}
    {firstLink()}
    {filteredLink.map((pageNumber) => {
      const isCurrent = pageNumber == currentPage;
      return (
        <LinkComponent
          injected="true"
          href={createHref(pageNumber)}
          className={getClass(pageNumber)}
          onClick={(e) => onClick(e, pageNumber)}
          aria-current={isCurrent ? "page" : null}
          key={`pagination${pageNumber}`}
          css={[pageStyle, isCurrent ? currentPageStyle : null]}
        >
          {pageNumber}
        </LinkComponent>
      )
    }
    )}
    {lastLink()}
    {isLastPage ? (
      <span css={[nextPageStyle, prevPageStyleHidden]}>
        <Icon icon="MonoArrowRight" />
      </span>
    ) : (
      <LinkComponent
        injected="true"
        href={createHref(currentPage + 1)}
        onClick={(e) => onClick(e, currentPage + 1)}
        css={nextPageStyle}
        aria-label="Nästa sida"
      >
        <Icon icon="MonoArrowRight" />
      </LinkComponent>
    )}
    {SeoCallbackResult}
  </nav>
}
