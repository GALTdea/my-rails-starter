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
