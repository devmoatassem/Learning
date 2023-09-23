from flask import Flask, redirect, render_template, request 
import sqlite3

app=Flask(__name__)

# database connection
conn = sqlite3.connect("sportFest.db")

# cursor object to execute commands
cursor = conn.cursor()
#create table
cursor.execute("CREATE TABLE IF NOT EXISTS T1 (_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, sport TEXT NOT NULL)")
conn.commit()
conn.close()

PARTICIPANTS={}

SPORTS_LIST=[
    "Cricket",
    "Football",
    "Hockey",
    "Volyball",
    "Snooker"
]

@app.route("/")
def index():
    return render_template("form.html",sports_list=SPORTS_LIST)


@app.route("/register", methods=["GET","POST"])
def register():
    name = request.form.get("name")
    game = request.form.get("game")
    
    # print(f"{name},{game}")
    if not name or game not in SPORTS_LIST:
        return render_template("register.html",message="Sorry Failed to Register")
    else:
        # database connection
        conn = sqlite3.connect("sportFest.db")

        # cursor object to execute commands
        cursor = conn.cursor()
        cursor.execute("INSERT INTO T1 (name, sport) VALUES (?, ?)", (name, game))
        conn.commit()
        conn.close()
        return render_template("register.html",message="Sucessfully Registered")


@app.route("/listP")
def show_list():
    # database connection
    conn = sqlite3.connect("sportFest.db")
    # cursor object to execute commands
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM T1")
    list = cursor.fetchall()
    
    conn.close()
    
    
    
    return render_template("list.html",data = list)


if __name__ == "__main__":
    app.run(debug=True)