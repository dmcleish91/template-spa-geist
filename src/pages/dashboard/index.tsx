import { Text, Metric, Flex, ProgressBar } from "@tremor/react";
import { Card } from "@nextui-org/react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import ChartView from "@/components/tremor/performance-chart";

export default function dashboard() {
  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          padding: "12px",
          display: "flex",
          justifyContent: "center",
          gap: "16px",
        }}>
        <Card css={{ mw: "400px" }} variant='bordered'>
          <Card.Body>
            <Text>Sales</Text>
            <Metric>$ 71,465</Metric>
            <Flex className='mt-4'>
              <Text>32% of annual target</Text>
              <Text>$ 225,000</Text>
            </Flex>
            <ProgressBar percentageValue={32} className='mt-2' />
          </Card.Body>
        </Card>
        <Card css={{ mw: "400px" }} variant='bordered'>
          <Card.Body>
            <Text>Website Traffic</Text>
            <Metric>12,365</Metric>
            <Flex className='mt-4'>
              <Text>25% increase from last month</Text>
              <Text>9,865</Text>
            </Flex>
            <ProgressBar percentageValue={25} className='mt-2' />
          </Card.Body>
        </Card>
        <Card css={{ mw: "400px" }} variant='bordered'>
          <Card.Body>
            <Text>Customer Retention Rate</Text>
            <Metric>85%</Metric>
            <Flex className='mt-4'>
              <Text>5% decrease from last quarter</Text>
              <Text>90%</Text>
            </Flex>
            <ProgressBar percentageValue={85} className='mt-2' />
          </Card.Body>
        </Card>
      </div>
      <div
        style={{
          padding: "12px",
          display: "flex",
          justifyContent: "center",
          gap: "16px",
        }}>
        <ChartView />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
