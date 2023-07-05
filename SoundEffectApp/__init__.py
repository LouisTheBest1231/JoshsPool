import secrets

from flask import Flask, render_template, get_flashed_messages, flash
from flask_login import LoginManager, current_user
from flask_sqlalchemy import SQLAlchemy
from .db import db

def create_app(test_config=None):
    app = Flask(__name__)
    
    app.config.from_mapping(
        SECRET_KEY=secrets.token_urlsafe(32),
        SQLALCHEMY_DATABASE_URI="postgresql://cvsvfhwtmxjjyq:aff235eb724eb20cbb8ff41e79d2bf8ffffe1ecb6c0fc80b1a88bd8731800515@ec2-54-208-11-146.compute-1.amazonaws.com/d9jg2e93n52rg8",
        SQLAlchemy_TRACK_MODIFICATIONS=False
    )
    
    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)
        
    db.init_app(app)
    return app