require 'rack'
require 'erb'
class Test
  def call(env)
    Rack::Response.new(render("index.html.erb"))
  end

  def render(template)
    path = File.expand_path("../views/#{template}", __FILE__)
    ERB.new(File.read(path)).result(binding)
  end
end
use Rack::Static, :urls => ["/stylesheets", "/javascripts", "/images"], :root => "./"
run Test.new
