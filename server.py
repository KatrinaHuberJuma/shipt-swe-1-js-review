"""Server for JavaScript: Sharkwords."""

from flask import Flask, render_template
import random

app = Flask(__name__)

WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

@app.route("/")
def homepage():
    return render_template("index.html")


@app.route("/demo")
def demo():
    return render_template("demo.html")


@app.route("/sharkwords")
def sharkwords():
    return render_template("sharkwords.html")
  
@app.route("/word")
def word():
  random_word = random.choice(WORDS)
  print("*"*20, "\n", random_word)
  return {"word" : random_word, "weather": "sunny"}



if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
