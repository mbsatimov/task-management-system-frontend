export const routes = [
  {
    path: '/',
    component: () => import('@/views/Overview/OverviewView.vue'),
  },
  {
    path: '/task',
    component: () => import('@/views/Task/TaskView.vue'),
  },
  {
    path: '/mentors',
    component: () => import('@/views/MentorsView.vue'),
  },
  {
    path: '/messages',
    component: () => import('@/views/MessagesView.vue'),
  },
  {
    path: '/settings',
    component: () => import('@/views/SettingsView.vue'),
  },
];
