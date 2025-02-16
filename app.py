from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Resume Optimizer API is running!"

if __name__ == '__main__':
    app.run(debug=True)
