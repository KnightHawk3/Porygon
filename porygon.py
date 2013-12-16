# Imports
import sqlite3
from flask import Flask, request, session, g, redirect, url_for, \
    abort, render_template, flash

# Configuration
DATABASE = 'porygon.db'
DEBUG = True
SECRET_KEY = 'password'
USERNAME = 'admin'
PASSWORD = 'admin'

# Start app
app = Flask(__name__)
app.config.from_object(__name__)

# connect to database
def connect_db():
    return sqlite3.connect(app.config['DATABASE'])

# create the database
def init_db():
    with app.app_context():
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()

# open database connection
def get_db():
    if not hasattr(g, 'sqlite_db'):
        g.sqlite_db = connect_db()
    return g.sqlite_db

# close database connection
@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'sqlite_db'):
        g.sqlite_db.close()

@app.route('/')
def show_index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0')
