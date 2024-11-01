export const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login/LoginView.vue'),
    meta: {
      hideSidebar: true,
    },
  },
  {
    path: '/',
    component: () => import('@/views/Overview/OverviewView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/task',
    component: () => import('@/views/Task/TaskView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/task/:id',
    component: () => import('@/views/TaskDetail/TaskDetailView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/mentors',
    component: () => import('@/views/Mentors/MentorsView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/messages',
    component: () => import('@/views/Messages/MessagesView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/settings',
    component: () => import('@/views/Settings/SettingsView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];
