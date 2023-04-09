import { User } from '@/pages/manage';
import { Table } from '@geist-ui/core';

export default function FilteredUserTable({
  data,
  inputValue,
  checkboxValue,
}: {
  data: User[] | undefined;
  inputValue: string;
  checkboxValue: string[];
}) {
  const filteredData = data!
    .filter((user) => checkboxValue.length === 0 || checkboxValue.includes(user.inactive))
    .filter((user) => user.id.toLowerCase().includes(inputValue.toLowerCase()));

  return (
    <Table data={filteredData}>
      <Table.Column prop='id' label='user id' width={300} />
      <Table.Column prop='admin' label='admin' width={150} />
      <Table.Column prop='first' label='first' width={150} />
      <Table.Column prop='last' label='last' width={150} />
      <Table.Column prop='title' label='title' width={150} />
      <Table.Column prop='phone' label='phone number' width={150} />
      <Table.Column prop='inactive' label='inactive' width={150} />
    </Table>
  );
}
