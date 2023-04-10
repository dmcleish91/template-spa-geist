import { Table } from '@nextui-org/react';

const columns = [
  {
    key: 'name',
    label: 'NAME',
  },
  {
    key: 'role',
    label: 'ROLE',
  },
  {
    key: 'status',
    label: 'STATUS',
  },
];
const rows = [
  {
    key: '1',
    name: 'Tony Reichert',
    role: 'CEO',
    status: 'Active',
  },
  {
    key: '2',
    name: 'Zoey Lang',
    role: 'Technical Lead',
    status: 'Paused',
  },
  {
    key: '3',
    name: 'Jane Fisher',
    role: 'Senior Developer',
    status: 'Active',
  },
  {
    key: '4',
    name: 'William Howard',
    role: 'Community Manager',
    status: 'Vacation',
  },
];
export default function FilteredUserTable({
  data,
  inputValue,
  checkboxValue,
}: {
  data: any | undefined;
  inputValue: string;
  checkboxValue: string[];
}) {
  const filteredData = data!
    .filter((user: { inactive: string }) => checkboxValue.length === 0 || checkboxValue.includes(user.inactive))
    .filter((user: { id: string }) => user.id.toLowerCase().includes(inputValue.toLowerCase()));

  return (
    <Table
      aria-label='Example table with dynamic content'
      css={{
        height: 'auto',
        minWidth: '100%',
      }}>
      <Table.Header columns={columns}>{(column) => <Table.Column key={column.key}>{column.label}</Table.Column>}</Table.Header>
      <Table.Body items={rows}>
        {(item) => <Table.Row key={item.key}>{(columnKey) => <Table.Cell>{item[columnKey as keyof typeof item]}</Table.Cell>}</Table.Row>}
      </Table.Body>
    </Table>
  );
}
