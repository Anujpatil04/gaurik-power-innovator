from flask import Flask, render_template, request, abort
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", year=datetime.now().year)

@app.route("/health")
def health():
    return {"status": "ok"}

@app.errorhandler(404)
def page_not_found(error):
    return render_template("404.html"), 404

if __name__ == "__main__":
    # Local development only. For production, use a WSGI server such as Waitress or Gunicorn.
    app.run(host="127.0.0.1", port=5000, debug=True)
