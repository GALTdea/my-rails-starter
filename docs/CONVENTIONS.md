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

## UI Patterns

### Layout selection
- Public/marketing pages: layouts/application
- Authenticated pages: layouts/dashboard
  (set automatically by ApplicationController determine_layout based on user_signed_in?)
- Auth pages: layouts/devise
  (set automatically via devise_controller? check)

### Component hierarchy
1. daisyUI semantic class as base
   (btn, card, alert, input, select, etc.)
2. Tailwind utilities for spacing and layout
   (mt-4, flex, gap-3, max-w-2xl, etc.)
3. Never write custom CSS unless absolutely no Tailwind/daisyUI equivalent exists

### Flash messages
Use these flash keys consistently:
- flash[:notice] — success (renders alert-success)
- flash[:alert]  — warning/error (renders alert-error)
Rendered via shared/_flash.html.erb in all layouts.

### Pagination
Always use pagy. Never kaminari.
Controller: @pagy, @records = pagy(collection)
View: render "shared/pagination", pagy: @pagy
Pagy::Backend included in ApplicationController.
Pagy::Frontend included in ApplicationHelper.

### Page headers
Use the shared partial for consistency:
  render "shared/page_header",
    title: "Page Title",
    subtitle: "Optional subtitle"

### Forms
Always use Rails form helpers (form_with).
Never write raw HTML form tags.
Input pattern:
  <div class="form-control">
    label with class="label" > span.label-text
    input with class="input input-bordered w-full"
  </div>
Select pattern: class="select select-bordered w-full"
Submit: class="btn btn-primary"