from ..db import db

class SoundEffect(db.Model):
    __tablename__='soundeffects'
    id = db.Column(db.Integer, primary_key=True)
    