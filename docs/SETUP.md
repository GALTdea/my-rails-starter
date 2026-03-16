# Setup

## First-time setup

### Prerequisites
- Ruby 4.0.1 (rbenv or asdf recommended)
- Bundler 2.x
- Node.js + npm (for daisyUI)
- SQLite3

### Setup

  git clone <your-repo-url>
  cd <app-name>
  bundle install
  npm install
  bin/rails db:create db:migrate
  bin/dev

Visit http://localhost:3000

### Verify

  bundle exec rspec        # 80 examples, 0 failures
  bundle exec rubocop      # 0 offenses

## Credentials

Rails 8 uses encrypted credentials — no .env file needed.

To view or edit credentials:

  bin/rails credentials:edit

The master key is in config/master.key (gitignored).
Never commit config/master.key.
When deploying, set the RAILS_MASTER_KEY environment
variable in your hosting platform (e.g. Hatchbox).
