export default {
  Base: '/api',
  Tree: {
    Base: '/tree',
    Get: '',
    Add: '',
    Delete: '',
  },
  Users: {
    Base: '/users',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
} as const;
