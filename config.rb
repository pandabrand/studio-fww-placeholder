page './index.html', layout: false


activate :external_pipeline,
  name: :webpack,
  command: build? ? "yarn run build" : "yarn run start",
  source: ".tmp/dist",
  latency: 1

configure :development do
  activate :livereload
end

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'images'

configure :build do
  activate :asset_hash, ignore: [/\.jpg\Z/, /\.png\Z/]
end