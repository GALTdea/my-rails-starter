# Architecture Decision Log

## 2026-03-12 — Chose Devise over authentication-zero
Reason: rails-tabler-starter already had Devise fully integrated with 
the Space/multitenancy model and role system. The integration cost of 
switching to authentication-zero outweighed the AI-friendliness benefit 
at this stage. Revisit if starting a greenfield app.

## 2026-03-12 — Chose SQLite over PostgreSQL as default
Reason: Solid Queue, Solid Cache, and Solid Cable work well with SQLite 
for solo dev and small apps. Each app cloned from this starter can 
switch to PostgreSQL independently via database.yml and the pg gem.

## 2026-03-12 — Removed rails_admin
Reason: Redundant with the custom admin area. Heavyweight, not 
Tailwind-compatible, added unnecessary complexity to the asset pipeline.

## 2026-03-12 — Chose pagy over kaminari
Reason: Faster, lighter, better daisyUI pagination component support.

## 2026-03-12 — Re-enabled Turbo Drive
Turbo Drive was disabled in the original starter to prevent conflicts with Bootstrap/Tabler JS. Re-enabled after Bootstrap removal since daisyUI is CSS-only and has no Turbo conflicts.

## 2026-03-12 — Chose 3 fixed layouts over 9 Bootstrap layout variants
Original starter had 9 layout variants driven by AppSettings.interface_layout. Replaced with 3 purposeful layouts: application (marketing), dashboard (authenticated), devise (auth). Simpler, more AI-friendly, easier to maintain. Old layouts archived in app/views/body/_archive/.

## 2026-03-12 — Removed interface_layout and login_layout from SettingsHelper
These were Bootstrap/Tabler theming helpers. Kept multi_tenant_mode? and show_landing_page? as they are genuinely useful across apps.

## 2026-03-12 — friendly_id reserved_words not configurable globally in v5.x
FriendlyId 5.x does not support config.reserved_words= globally. Reserved words must be set per-model if needed. Global initializer kept as documentation only.

---

This file is invaluable six months later when you've forgotten why something is the way it is — and it's invaluable to AI agents that would otherwise make suggestions that contradict your deliberate choices.

---

## The `.cursorrules` File

This lives at the project root, not in `docs/`. Cursor reads it automatically at the start of every session without you pasting anything. Keep it short — it's a quick-load file, not a full reference:
```
This is a personal Ruby on Rails 8.1 starter template.
Read docs/AGENTS.md before making any changes.

Stack: Rails 8.1, Ruby 3.4.4, Hotwire, Tailwind CSS, daisyUI, 
Devise, Pundit, Solid Queue, SQLite, Kamal, RSpec

NEVER generate: Bootstrap classes, Sidekiq, Redis, rails_admin, 
kaminari, custom CSS, service objects for single-use logic

UI rule: daisyUI semantic classes as base + Tailwind utilities. 
No exceptions.

Auth: Devise. Authorization: Pundit — always call authorize in 
every controller action.

When unsure: read docs/CONVENTIONS.md before generating code.
Full context: docs/AGENTS.md, docs/ARCHITECTURE.md