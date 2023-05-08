import ButtonCard from "@/components/ui/buttoncard";
import { Card } from "@nextui-org/react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function reports() {
  return (
    <div style={{ padding: "24px" }}>
      <div style={{ padding: "12px", display: "flex", justifyContent: "center", gap: "16px" }}>
        <Card css={{ mw: "400px" }} variant='bordered'>
          <Card.Body style={{ display: "flex", gap: "12px" }}>
            <ButtonCard text='Sales Report' />
            <ButtonCard text='Marketing Report' />
            <ButtonCard text='Financial Report' />
            <ButtonCard text='Inventory Report' />
            <ButtonCard text='HR Report' />
            <ButtonCard text='Customer Report' />
          </Card.Body>
        </Card>
        <Card css={{ mw: "400px" }} variant='bordered'>
          <Card.Body style={{ display: "flex", gap: "12px" }}>
            <ButtonCard text='Production Efficiency Report' />
            <ButtonCard text='Website Traffic Report' />
            <ButtonCard text='Vendor Performance Report' />
            <ButtonCard text='Research and Development Report' />
            <ButtonCard text='Quality Control Report' />
            <ButtonCard text='Project Management Report' />
          </Card.Body>
        </Card>
        <Card css={{ mw: "400px" }} variant='bordered'>
          <Card.Body style={{ display: "flex", gap: "12px" }}>
            <ButtonCard text='Employee Satisfaction Report' />
            <ButtonCard text='Supply Chain Analysis Report' />
            <ButtonCard text='Social Media Engagement Report' />
            <ButtonCard text='Safety and Security Report' />
            <ButtonCard text='Environmental Impact Report' />
            <ButtonCard text='Customer Service Feedback Report' />
          </Card.Body>
        </Card>
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
