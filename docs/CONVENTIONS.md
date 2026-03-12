## UI conventions
- Always use daisyUI semantic class as the base component
- Add Tailwind utilities for spacing, sizing, and layout
- Class order: layout → spacing → typography → color → state
- Never write custom CSS unless no Tailwind/daisyUI equivalent exists
- Dark mode via daisyUI data-theme attribute, not Tailwind dark: prefix

## Controller conventions  
- Always call authorize in every action (Pundit)
- Use before_action for shared authorization on resourceful controllers
- Flash keys: notice (success), alert (warning), error (failure)

## Form conventions
- Always use Rails form helpers (form_with)
- Never write raw HTML form tags
- daisyUI pattern: form-control wraps label + input + helper text

## Turbo conventions
- Prefer Turbo Frames for partial page updates
- Use Turbo Streams for multi-element updates from controller actions
- Add data-turbo-confirm for destructive actions