import Page from "../app/components/page";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/:slug",
    exact: true,
    layout: DefaultLayout,
    component: Page,
    preLoadData: async ({match, api}) => {
      const { params } = match;
      return api.fetch(`https://developdaly.com/wp-json/wp/v2/pages?slug=${params.slug}`, { swcache: 20000 });
    }
  }
];

export default routes;