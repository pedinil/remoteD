# app/database/__init__.py
from app.database.models import db

def init_db(app):
    db.init_app(app)
    with app.app_context():
        db.create_all()
