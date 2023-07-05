import os
import datetime as dt

from flask import jsonify, flash, request
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash

db=SQLAlchemy()