import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const classNames = mergeStyleSets({
    table: {
      margin: 'auto',
    }
});

const operations = [
    {
        airport: 'Indira Gandhi International Airport',
        location: 'Delhi',
        area: '5,106 acres',
        datefrom: '20-05-2020',
        dateto: '20-05-2020',
    },
    {
        airport: 'Indira Gandhi International Airport',
        location: 'Delhi',
        area: '5,106 acres',
        datefrom: '20-05-2020',
        dateto: '20-05-2020',
    },
    {
        airport: 'Indira Gandhi International Airport',
        location: 'Delhi',
        area: '5,106 acres',
        datefrom: '20-05-2020',
        dateto: '20-05-2020',
    },
    {
        airport: 'Indira Gandhi International Airport',
        location: 'Delhi',
        area: '5,106 acres',
        datefrom: '20-05-2020',
        dateto: '20-05-2020',
    },
    {
        airport: 'Indira Gandhi International Airport',
        location: 'Delhi',
        area: '5,106 acres',
        datefrom: '20-05-2020',
        dateto: '20-05-2020',
    },
    {
        airport: 'Indira Gandhi International Airport',
        location: 'Delhi',
        area: '5,106 acres',
        datefrom: '20-05-2020',
        dateto: '20-05-2020',
    },
    {
        airport: 'Indira Gandhi International Airport',
        location: 'Delhi',
        area: '5,106 acres',
        datefrom: '20-05-2020',
        dateto: '20-05-2020',
    },
    {
        airport: 'Indira Gandhi International Airport',
        location: 'Delhi',
        area: '5,106 acres',
        datefrom: '20-05-2020',
        dateto: '20-05-2020',
    },
    {
        airport: 'Indira Gandhi International Airport',
        location: 'Delhi',
        area: '5,106 acres',
        datefrom: '20-05-2020',
        dateto: '20-05-2020',
    },
    {
        airport: 'Indira Gandhi International Airport',
        location: 'Delhi',
        area: '5,106 acres',
        datefrom: '20-05-2020',
        dateto: '20-05-2020',
    },
    {
        airport: 'Indira Gandhi International Airport',
        location: 'Delhi',
        area: '5,106 acres',
        datefrom: '20-05-2020',
        dateto: '20-05-2020',
    }

]

const columns = [
    { key: 'column1', iconName: 'Airplane' ,name: '  Name', fieldName: 'airport', minWidth: 100, maxWidth: 250, isResizable: true },
    { key: 'column2', name: 'Location', fieldName: 'location', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column3', name: 'Area', fieldName: 'area', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column4', name: 'License From', fieldName: 'datefrom', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column5', name: 'License To', fieldName: 'dateto', minWidth: 100, maxWidth: 150, isResizable: true },
]

const OperationsTable = () => {
  return (
    <div data-is-scrollable={true}>
      <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
        <DetailsList
          items={operations}
          columns={columns}
          selectionMode={0}
        />
      </div>
    </div>
  );
};

export default OperationsTable;