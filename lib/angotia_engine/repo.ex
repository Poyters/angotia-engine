defmodule AngotiaEngine.Repo do
  use Ecto.Repo,
    otp_app: :angotia_engine,
    adapter: Ecto.Adapters.Postgres
end
