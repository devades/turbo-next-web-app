export interface NavLink {
    name: string;
    href: string;
    private: boolean;
    admin: boolean;
    subLinks?: NavLink[];
  }
  export const NavLinks = {
    public: [
      {
        name: "Home",
        href: "/",
        private: false,
        admin: false,
      },
      {
        name: "Blog",
        href: "/blog",
        private: false,
        admin: false,
      },
      {
        name: "Interview Prep",
        href: "/interview-prep/companies",
        private: true,
        admin: false,
        subLinks: [
          {
            name: "Home",
            href: "/interview-prep/",
            private: true,
            admin: false,
          },
          {
            name: "Dashboard",
            href: "/interview-prep/dashboard",
            private: true,
            admin: false,
          },
          {
            name: "Companies",
            href: "/interview-prep/companies",
            private: true,
            admin: false,
          },
          {
            name: "Roles",
            href: "/interview-prep/roles",
            private: true,
            admin: false,
          },
        ],
      },
    ],
    private: [
      {
        name: "My Account",
        href: "/account",
        private: true,
        admin: false,
        subLinks: [
          {
            name: "Profile",
            href: "/account",
            private: true,
            admin: false,
          },
        ],
      },
    ],
    admin: [
      {
        name: "Admin",
        href: "/admin",
        private: true,
        admin: true,
        subLinks: [
          {
            name: "Admin Home",
            href: "/admin",
            private: true,
            admin: true,
          },
          {
            name: "Manage Users",
            href: "/admin/users",
            private: true,
            admin: true,
          },
        ],
      },
    ],
  };
  