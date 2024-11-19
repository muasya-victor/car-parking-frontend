import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "@/views/auth/view/RegisterView.vue"
import TheDashboardView from "@/components/TheDashboardView.vue";
import CustomerList from "@/views/customers/CustomerList.vue";
import CreateEditCustomer from "@/views/customers/CreateEditCustomer.vue";
import Landing from "@/components/Landing.vue";
import about from "@/views/about.vue";
import BookingList from "@/views/bookings/BookingList.vue";
import RegisterForm from "@/views/auth/forms/RegisterForm.vue";
import LoginView from "@/views/auth/LoginView.vue";
import SlotList from "@/views/slots/SlotList.vue";
import PaymentList from "@/views/payments/PaymentList.vue";
import MakePayment from "@/views/payments/MakePayment.vue";

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
    name:'register-user',
    path: '/register-user',
    component: RegisterForm,
    meta: {
      slug: 'Register User',
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
    name:'login',
    path: '/login',
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
        name:'users',
        path: '',
        component: CustomerList,
        meta: {
          slug: 'Users',
        },
        children: [
          {
            name:'user-edit',
            path: 'users/:id',
            component: RegisterForm,
            meta: {
              slug: 'Update Customer',
            },
          },
          {
            name:'user-create',
            path: 'user-create',
            component: RegisterForm,
            meta: {
              slug: 'Register User',
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
      },
      {
        name: 'parking-slots',
        path: 'parking-slots',
        component: SlotList,
        meta: {
          slug: 'Parking Slots',
        },
      },
      {
        name: 'payments',
        path: 'payments',
        component: PaymentList,
        meta: {
          slug: 'Parking Slots',
        },
        children: [
          {
            name: 'make-payment',
            path: 'make-payment',
            component: MakePayment,
            meta: {
              slug: 'Parking Slots',
            },
          }
        ]
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;