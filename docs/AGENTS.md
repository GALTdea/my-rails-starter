# AGENTS.md — Rails Starter Template

## What this project is
Personal Ruby on Rails 8.1 starter template. Reused as the foundation 
for new apps. Not a finished product — a maintained, evolving base.

## Current Status
- [x] Base rails-tabler-starter running on Ruby 3.4.4 / Rails 8.1.2
- [x] AI documentation layer created
- [x] rails_admin removed
- [x] kaminari replaced with pagy
- [ ] Bootstrap/Tabler replaced with Tailwind + daisyUI
- [x] App module renamed from RailsTabler8
- [ ] friendly_id added
- [ ] meta-tags added
- [ ] .cursorrules completed

Update this list as each step is completed.

## Read these files before making changes
- docs/ARCHITECTURE.md — system design, models, request lifecycle
- docs/CONVENTIONS.md — all coding and UI conventions
- docs/DECISIONS.md — why key choices were made
- db/schema.rb — source of truth for the data model
- config/routes.rb — current route structure

## Tech stack
- Ruby 3.4.4, Rails 8.1.2, SQLite (swap to PostgreSQL per app)
- Hotwire (Turbo + Stimulus), importmap, propshaft
- Tailwind CSS + daisyUI — no Bootstrap, no custom CSS
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