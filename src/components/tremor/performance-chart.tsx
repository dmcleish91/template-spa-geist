import { useState } from "react";
import { AreaChart, Card, Flex, Icon, Text, Title, Toggle, ToggleItem } from "@tremor/react";
import { AlertCircle } from "react-feather";

export const performance = [
  {
    date: "2021-01-01",
    Sales: 900.73,
    Profit: 173,
    Customers: 73,
  },
  {
    date: "2021-01-02",
    Sales: 1000.74,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-03-13",
    Sales: 882,
    Profit: 682,
    Customers: 682,
  },
  {
    date: "2021-04-01",
    Sales: 1200.82,
    Profit: 228,
    Customers: 82,
  },
  {
    date: "2021-05-03",
    Sales: 1080.6,
    Profit: 198,
    Customers: 60,
  },
  {
    date: "2021-06-01",
    Sales: 950.9,
    Profit: 147,
    Customers: 90,
  },
  {
    date: "2021-07-02",
    Sales: 1100.5,
    Profit: 215,
    Customers: 105,
  },
  {
    date: "2021-08-01",
    Sales: 950.2,
    Profit: 167,
    Customers: 62,
  },
  {
    date: "2021-09-03",
    Sales: 1150.3,
    Profit: 231,
    Customers: 87,
  },
  {
    date: "2021-10-01",
    Sales: 1050.4,
    Profit: 185,
    Customers: 95,
  },
];

// Basic formatters for the chart values
const dollarFormatter = (value: number) => `$ ${Intl.NumberFormat("us").format(value).toString()}`;

const numberFormatter = (value: number) => `${Intl.NumberFormat("us").format(value).toString()}`;

export default function ChartView() {
  const [selectedKpi, setSelectedKpi] = useState("Sales");

  // map formatters by selectedKpi
  const formatters: { [key: string]: any } = {
    Sales: dollarFormatter,
    Profit: dollarFormatter,
    Customers: numberFormatter,
  };

  return (
    <Card style={{ width: "1235px" }}>
      <div className='md:flex justify-between'>
        <div>
          <Flex justifyContent='start' className='space-x-0.5' alignItems='center'>
            <Title> Performance History </Title>
            <Icon icon={AlertCircle} variant='simple' tooltip='Shows day-over-day (%) changes of past performance' />
          </Flex>
          <Text> Daily increase or decrease per domain </Text>
        </div>
        <div className='mt-6 md:mt-0'>
          <Toggle color='zinc' defaultValue={selectedKpi} onValueChange={(value) => setSelectedKpi(value)}>
            <ToggleItem value='Sales' text='Sales' className='border-none' />
            <ToggleItem value='Profit' text='Profit' className='border-none' />
            <ToggleItem value='Customers' text='Customers' className='border-none' />
          </Toggle>
        </div>
      </div>
      <AreaChart
        data={performance}
        index='date'
        categories={[selectedKpi]}
        colors={["blue"]}
        showLegend={false}
        valueFormatter={formatters[selectedKpi]}
        yAxisWidth={56}
        className='h-96 mt-8'
      />
    </Card>
  );
}
