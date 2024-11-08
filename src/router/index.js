import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/auth/LoginView.vue"
import RegisterView from "@/views/auth/view/RegisterView.vue"
import TheDashboardView from "@/components/TheDashboardView.vue";
import TransactionView from "@/views/transactions/TransactionView.vue";
import ViewSingleInvoice from "@/views/invoices/ViewSingleInvoice.vue";
import InvoiceList from "@/views/invoices/InvoiceList.vue";
import CustomerList from "@/views/customers/CustomerList.vue";
import CreateEditCustomer from "@/views/customers/CreateEditCustomer.vue";
import CreateInvoice from "@/views/invoices/CreateInvoice.vue";
import OrganizationView from "@/views/organization/OrganizationView.vue";
import BookingForm from "@/components/BookingForm.vue";
import Landing from "@/components/Landing.vue";
import about from "@/views/about.vue";
import BookingList from "@/views/bookings/BookingList.vue";
import RegisterForm from "@/views/auth/forms/RegisterForm.vue";

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
    name:'landing',
    path: '/',
    component: Landing,
    meta: {
      slug: 'booking',
      requiresAuth: false,
    },
  },
  {
    name:'about',
    path: '/about',
    component: about,
    meta: {
      slug: 'About',
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
        name:'users',
        path: '',
        component: CustomerList,
        meta: {
          slug: 'Users',
        },
        children: [
          {
            name:'user-edit',
            path: ':id',
            component: RegisterForm,
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
      {
        name: 'bookings',
        path: 'bookings',
        component: BookingList,
        meta: {
          slug: 'Bookings',
        },
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;