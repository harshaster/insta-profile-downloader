from flask import Flask
from flask import render_template
from insta_profile_pic import download_pic

app=Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return render_template("index.html")


@app.route("/<string:username>",methods=["GET","POST"])
def download(username):

    found = download_pic(username)
    if found:
        return found
    else:
        return "NotFound"


if __name__=="__main__":
    app.run()
