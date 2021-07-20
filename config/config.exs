# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :angotia_engine,
  ecto_repos: [AngotiaEngine.Repo],
  generators: [binary_id: true]

# Configures the endpoint
config :angotia_engine, AngotiaEngineWeb.Endpoint,
  http: [port: 4100],
  url: [host: "localhost"],
  secret_key_base: "QrkiletchCYWsdLT7yPE4Ak8fzH5gZWD3vz6IciVuawb3otdDskD8C0QFxDd0wZ5",
  render_errors: [view: AngotiaEngineWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: AngotiaEngine.PubSub,
  live_view: [signing_salt: "08BOumru"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
