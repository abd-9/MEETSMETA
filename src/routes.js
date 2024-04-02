import Layout1 from "../src/pages/Layout1/Layout1";
import WalletLayout from "./pages/WalletLayout";
import LandingLayout from "./pages/LandingLayout";

const routes = [
  { path: "/dashboard", component: Layout1 },
  { path: "/wallet", component: WalletLayout },
  { path: "/landing", component: LandingLayout },
];

export default routes;

export const SECTIONS_ROUTE = {
  overview: "/dashboard/overview",
  status: "/dashboard/status",
  settings: {
    theme: "/dashboard/settings/theme",
    payment: "/dashboard/settings/payment",
    main: "/dashboard/settings/theme",
    plan: "/dashboard/settings/plan",
    notifications: "/dashboard/settings/notifications",
  },
  profile: {
    view: "/dashboard/profile/view",
    edit: "/dashboard/profile/edit",
  },
  contract: {
    add: "/dashboard/contract/add",
    list: "/dashboard/contract/list",
  },
  collection: {
    list: "/dashboard/collection/list",
  },
};
