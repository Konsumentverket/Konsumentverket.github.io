import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';
import { Pagination } from './Pagination';

let name = 'Pagination';


storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () => 
        <>
        <Pagination total={100} currentPage={2} pageSize={10} baseUrl="/sok?page=2" />
        <br /><br /><hr /><br /><br />
        <Pagination total={200} currentPage={3} pageSize={10} baseUrl="/sok?q=test" />
        <br /><br /><hr /><br /><br />
        <Pagination total={100} currentPage={5} pageSize={10} baseUrl="/sok" />
        <br /><br /><hr /><br /><br />
        <Pagination total={60} currentPage={2} pageSize={10} baseUrl="/sok" />
        <br /><br /><hr /><br /><br />
        <Pagination total={60} currentPage={4} pageSize={10} baseUrl="/sok" />
        <br /><br /><hr /><br /><br />
        <Pagination total={60} currentPage={1} pageSize={10} baseUrl="/sok" />
        <br /><br /><hr /><br /><br />
        <Pagination total={80} currentPage={8} pageSize={10} baseUrl="/sok" />
        
        </>
    , { notes: NotesLoader(name) }
    );