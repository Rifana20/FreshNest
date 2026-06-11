

import environ
from pathlib import Path
from supabase import create_client

BASE_DIR = Path(__file__).resolve().parent.parent

env = environ.Env()
environ.Env.read_env(BASE_DIR / ".env")

SUPABASE_URL = env("SUPABASE_URL")
SUPABASE_KEY = env("SUPABASE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)