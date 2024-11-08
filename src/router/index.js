import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/auth/LoginView.vue"
import RegisterView from "@/views/auth/view/RegisterView.vue"
import TheDashboardView from "@/components/TheDashboardView.vue";
import CustomerList from "@/views/customers/CustomerList.vue";
import CreateEditCustomer from "@/views/customers/CreateEditCustomer.vue";

const routes = [
  {
    name:'register',
    path: '/register',
    component: RegisterView,
    requiresAuth: true,
    roles: [],
    meta: {
      slug: 'User Registration',
      requiresAuth: false,
    },
  },
  {
    name:'login',
    path: '/',
    component: LoginView,
    meta: {
      slug: 'Login',
      requiresAuth: false,
    },
  },
  {
    name:'dashboard',
    path: '/dashboard',
    component: TheDashboardView,
    meta: {
      requiresAuth: true,
      slug: 'Dashboard',
    },
    children : [
      {
        name:'customer',
        path: 'customer',
        component: CustomerList,
        meta: {
          slug: 'Customers',
        },
        children: [
          {
            name:'customer-edit',
            path: ':id',
            component: CreateEditCustomer,
            meta: {
              slug: 'Update Customer',
            },
          },
          {
            name:'customer-create',
            path: 'customer-create',
            component: CreateEditCustomer,
            meta: {
              slug: 'Register Customer',
            },
          },
        ]
      },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;