from flask import Flask, redirect, render_template, request, session
from flask_session import Session

app = Flask(__name__)

# config session
app.config["SESSION_PERMANENT"]=False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


