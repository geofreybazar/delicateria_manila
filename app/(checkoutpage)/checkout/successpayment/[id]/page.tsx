import SuccessfulPayment from "@/components/SuccessfulPayment/SuccessfulPayment";

const SuccessPaymentPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return <SuccessfulPayment id={id} />;
};

export default SuccessPaymentPage;
