import { Table } from '@nextui-org/react';

const columns = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'admin',
    label: 'ADMIN',
  },
  {
    key: 'first',
    label: 'FIRST',
  },
  {
    key: 'last',
    label: 'LAST',
  },
  {
    key: 'title',
    label: 'TITLE',
  },
  {
    key: 'phone',
    label: 'PHONE',
  },
  {
    key: 'inactive',
    label: 'INACTIVE',
  },
];

export type user = {
  id: string;
  admin: string;
  first: string;
  last: string;
  title: string;
  phone: string;
  inactive: string;
};

export default function FilteredUserTable({
  data,
  inputValue,
  checkboxValue,
}: {
  data: any | undefined;
  inputValue: string;
  checkboxValue: string[];
}) {
  const filteredData: user[] = data!
    .filter((user: { inactive: string }) => checkboxValue.length === 0 || checkboxValue.includes(user.inactive))
    .filter((user: { id: string }) => user.id.toLowerCase().includes(inputValue.toLowerCase()));

  return (
    <Table bordered compact selectionMode='single' shadow={false} aria-label='Table of users'>
      <Table.Header columns={columns}>{(column) => <Table.Column key={column.key}>{column.label}</Table.Column>}</Table.Header>
      <Table.Body items={filteredData}>
        {(filteredData) => (
          <Table.Row key={filteredData.id}>
            {(columnKey) => <Table.Cell>{filteredData[columnKey as keyof typeof filteredData]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
