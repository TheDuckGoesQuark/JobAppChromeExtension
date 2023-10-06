from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    google_api_token: str
    google_client_id: str

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()
