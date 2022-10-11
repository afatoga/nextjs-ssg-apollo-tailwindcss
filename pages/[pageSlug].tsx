import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { gql, useQuery } from "@apollo/client";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import DOMPurify from "isomorphic-dompurify";

import { initializeApollo, addApolloState } from "../lib/apolloClient";
import Layout from "../components/Layout";
import { useTranslation } from "next-i18next";
import { GET_PAGE_BY_SLUG } from "../lib/queries/general";

export default function SSG({ pageSlug }: { pageSlug: string }) {
  const router = useRouter();
  const { t } = useTranslation("services");

  const { loading, error, data } = useQuery(GET_PAGE_BY_SLUG, {
    variables: {
      uri: `/${pageSlug}`,
      language: router.locale.toUpperCase(),
    },
  });

  let content = data?.nodeByUri?.translation?.content;
  if (content) content = DOMPurify.sanitize(content);

  // const posts = data?.posts?.edges?.map((edge: PostEdge) => edge.node) || [];
  // const havePosts = Boolean(posts.length);

  const changeLocale = (value: string) => {
    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  return (
    <Layout>
      <h1>{t("title")}</h1>

      {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}

      <div onClick={() => changeLocale("en")}>change locale</div>
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_PAGE_BY_SLUG,
    variables: {
      uri: `/${context.params.pageSlug}`,
      language: context.locale.toUpperCase(),
    },
  });

  return addApolloState(apolloClient, {
    props: {
      ...(await serverSideTranslations(context.locale, ["common", "services"])),
      pageSlug: context.params.pageSlug,
    },
  });
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { pageSlug: "homepage" }, locale: "cs" },
      { params: { pageSlug: "sluzby" }, locale: "cs" },
      { params: { pageSlug: "services" }, locale: "en" },
      { params: { pageSlug: "uslugi" }, locale: "ru" },
    ],
    fallback: false,
  };
};
