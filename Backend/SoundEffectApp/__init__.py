import secrets

from flask import Flask, render_template, get_flashed_messages, flash
from flask_login import LoginManager, current_user
from flask_sqlalchemy import SQLAlchemy
from .db import db

def create_app(test_config=None):
    app = Flask(__name__)
    
    app.config.from_mapping(
        SECRET_KEY=secrets.token_urlsafe(32),
        SQLALCHEMY_DATABASE_URI="postgresql://ijxlyikrhgssou:f8346f85c40991d6d00dd33b3870a7faa6c61149e5686463134705d8330a56e7@ec2-44-206-204-65.compute-1.amazonaws.com:5432/d7s6nrer3ue3op",
        SQLAlchemy_TRACK_MODIFICATIONS=False
    )
    
    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)
    
    db.init_app(app)    
    from .views.sound_effect_view import bp as sound_effect_bp
    app.register_blueprint(sound_effect_bp)
    
    return app