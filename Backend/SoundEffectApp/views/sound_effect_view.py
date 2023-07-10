from flask import Blueprint, render_template, url_for, redirect, abort, flash, g, escape, request, current_app
from ..db import db

bp = Blueprint("sound_effect", __name__, url_prefix="/test/")

def get_sound_effect_table():
    with current_app.app_context():
        return db.Table('soundeffects', db.metadata, autoload_with=db.engine)

@bp.route("/", methods=['GET', 'POST'])
def display_db():
    sound_effect_table = get_sound_effect_table()
    results = db.session.query(sound_effect_table).all()
    string = "<ul>"
    for r in results:
        string += f'<li> {r.name} </li>'
    string += '</ul>'
    # print(f"Result: {results}")
    return string