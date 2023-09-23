from flask import Flask, render_template, request

app = Flask(__name__)
            

# @app.route("/")
# def hello():
#     return render_template("index.html")

# # @app.route("/greet") #route that's using (get) method
# @app.route("/greet",methods=["POST"])
# def greet():
#     return render_template("greet.html", name=request.form.get("name","World"))
    

##################################
#using single route
@app.route("/",methods=["GET", "POST"])
def index():
    if request.method == "POST":
        return render_template("greet.html", name=request.form.get("name", "world"))
    return render_template("index.html")
if __name__ == "__main__":
    app.run()