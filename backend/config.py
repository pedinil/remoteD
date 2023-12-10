# config.py
class Config:
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'  # Use a different database URI as needed
    SQLALCHEMY_TRACK_MODIFICATIONS = False
