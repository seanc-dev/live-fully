export const cookies = [
  {
    name: "Necessary / Essential Cookies",
    type: "Persistent Cookies",
    admin: "Us",
    purpose:
      "These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.",
  },
  {
    name: "Cookies Policy / Notice Acceptance Cookies",
    type: "Persistent Cookies",
    admin: "Us",
    purpose:
      "These Cookies identify if users have accepted the use of cookies on the Website.",
  },
  {
    name: "Functionality Cookies",
    type: "Persistent Cookies",
    admin: "Us",
    purpose:
      "These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.",
  },
  {
    name: "Tracking and Performance Cookies",
    type: "Persistent Cookies",
    admin: "Us",
    purpose:
      "These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new advertisements, pages, features or new functionality of the Website to see how our users react to them.",
  },
];

interface listItem {
  strong: string;
  text?: string;
}

type listType = "dataUsage";

// export const lists: {
//   listType: listItem[]
// } = {
export const lists = {
  dataUsage: [
    {
      strong: "",
      text: "",
    },
    {
      strong: "",
      text: "",
    },
  ],
};
