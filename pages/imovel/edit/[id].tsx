import { MuiEditInferencer } from "@refinedev/inferencer/mui";
import { GetServerSideProps } from "next";
import { authProvider } from "src/authProvider";

export default function ImovelEdit() {
  return <MuiEditInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const { authenticated, redirectTo } = await authProvider.check(context);

  if (!authenticated) {
    return {
      props: {},
      redirect: {
        destination: `${redirectTo}?to=${encodeURIComponent("/imovel")}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
