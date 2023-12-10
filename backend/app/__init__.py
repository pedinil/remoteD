# app/__init__.py
from flask import Flask
from flask_cors import CORS
from app.views.medication_api import medication_api_bp
from app.database import init_db

def create_app():
    app = Flask(__name__)

   
    cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
    
    # Config
    app.config.from_object('config.Config')

    # Register blueprints
    app.register_blueprint(medication_api_bp, url_prefix='/api')

    # Initialize the database
    init_db(app)

    return app
