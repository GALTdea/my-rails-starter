# db/seeds.rb
# Creates minimal seed data for development.
# Safe to run multiple times (find_or_create_by).

puts "Seeding database..."

# Default admin user
admin = User.find_or_create_by!(email: "admin@example.com") do |u|
  u.name     = "Admin User"
  u.password = "password123"
  u.password_confirmation = "password123"
  u.admin    = true
end
puts "  admin user: #{admin.email}"

# Default regular user
user = User.find_or_create_by!(email: "user@example.com") do |u|
  u.name     = "Regular User"
  u.password = "password123"
  u.password_confirmation = "password123"
  u.admin    = false
end
puts "  regular user: #{user.email}"

# Default space for admin
if Space.respond_to?(:find_or_create_by!)
  space = Space.find_or_create_by!(name: "Default Space") do |s|
    s.status = :active if s.respond_to?(:status=)
  end
  puts "  space: #{space.name}"
end

puts "Done! Seed data loaded."
puts ""
puts "Login credentials:"
puts "  Admin — admin@example.com / password123"
puts "  User  — user@example.com / password123"
