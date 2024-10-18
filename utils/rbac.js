export const permissions = [
    {
        role: 'user',
        actions: [
            'get_profile',
            'update_profile',
            'add_todo',
            'update_todo',
            'get_todo'
        ]
    },
    {
        role: 'admin',
        actions: [
            'get_profile',
            'update_profile',
            'add_todo',
            'update_todo',
            'get_todo',
            'get_todos',
            'delete_todo'
        ]
    }
]