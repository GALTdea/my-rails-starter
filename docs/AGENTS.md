# AGENTS.md — Rails Starter Template

## What this project is
Personal Ruby on Rails 8.1 starter template. Reused as the foundation 
for new apps. Not a finished product — a maintained, evolving base.

## Current Status — v1.0.0

### Completed
- [x] Base rails-tabler-starter running on Ruby 4.0.1 / Rails 8.1.2
- [x] AI documentation layer created
- [x] rails_admin removed
- [x] kaminari replaced with pagy
      (pagy configured in controller, helper, initializer, pagination partial)
- [x] Tailwind CSS 4.2.0 + daisyUI 5.5.19 (tailwindcss-rails 4.4.0, npm plugin)
- [x] App module renamed to MyRailsStarter
- [x] friendly_id installed and configured
      (slugs table migrated, User model updated)
- [x] meta-tags installed and configured
      (wired into all 3 layouts)
- [x] 3 layouts rebuilt in Tailwind + daisyUI
      (application, dashboard, devise)
- [x] Shared partials created
      (flash, user_menu, user_menu_compact, page_header, pagination)
- [x] Devise views rebuilt in Tailwind + daisyUI
- [x] Landing page rebuilt in Tailwind + daisyUI
- [x] Setup/AppSettings view rebuilt
- [x] Error pages rebuilt (404, 422, 500)
- [x] Turbo Drive re-enabled
- [x] Importmap cleaned (no Tabler/Bootstrap pins)
- [x] RuboCop clean: 0 offenses
- [x] RSpec passing: 80 examples, 0 failures

### Intentionally deferred (rebuild per app)
- [ ] spaces/ views (Bootstrap, rebuild when needed)
- [ ] users/ views (Bootstrap, rebuild when needed)
- [ ] spaces/roles views
- [ ] spaces/subscriptions views
- [ ] Devise remaining views
      (password reset, edit registration, etc.)

### Optional modules (documented, not installed)
- [ ] Multitenancy (docs/modules/multitenancy.md)
- [ ] Billing (docs/modules/billing.md)
- [ ] File uploads (docs/modules/file_uploads.md)
- [ ] API layer (docs/modules/api.md)

## Read these files before making changes
- docs/ARCHITECTURE.md — system design, models, request lifecycle
- docs/CONVENTIONS.md — all coding and UI conventions
- docs/DECISIONS.md — why key choices were made
- db/schema.rb — source of truth for the data model
- config/routes.rb — current route structure

## Tech stack
- Ruby 4.0.1, Rails 8.1.2, SQLite (swap to PostgreSQL per app)
- Hotwire (Turbo + Stimulus), importmap, propshaft
- Tailwind CSS 4.2.0 + daisyUI 5.5.19 (loaded via npm as @plugin); config in app/assets/tailwind/application.css
- Devise + devise_invitable — authentication
- Pundit — authorization, one policy per resource
- Solid Queue — background jobs, no Redis required
- Kamal — deployment
- RSpec + FactoryBot — testing
- Pagy — pagination
- friendly_id — slug-based URLs
- meta-tags — SEO

## What NOT to do
- Do not use Bootstrap or Tabler CSS classes anywhere
- Do not bypass Pundit — never do role checks in controllers directly
- Do not add Sidekiq or Redis — Solid Queue handles all jobs
- Do not use rails_admin — it has been removed
- Do not use kaminari — pagy is the pagination library
- Do not create service objects unless logic is reused 3+ places
- Do not modify db/schema.rb directly — always use migrations
- Do not install new gems without confirming with the developer first

## How to run the app
bin/dev

## How to run tests
bundle exec rspec

## How to run linting
bundle exec rubocop

## How to create the first admin user
bundle exec rails c
> User.first.update(admin: true)
