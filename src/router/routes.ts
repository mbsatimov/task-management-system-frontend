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
    path: '/task/:id',
    component: () => import('@/views/TaskDetail/TaskDetailView.vue'),
  },
  {
    path: '/mentors',
    component: () => import('@/views/Mentors/MentorsView.vue'),
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
