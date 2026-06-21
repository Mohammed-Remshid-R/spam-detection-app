from flask import Flask, jsonify
from flask_cors import CORS

from routes.predict import predict_bp

app = Flask(__name__)

# Enable CORS
CORS(
    app,
    resources={
        r"/*": {
            "origins": "*"
        }
    }
)

# Register Routes
app.register_blueprint(predict_bp)


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "status": "success",
        "message": "Spam Detection API Running 🚀"
    })


@app.route("/health", methods=["GET"])
def health():
    return jsonify({
        "status": "healthy",
        "service": "Spam Detection Backend"
    })


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=7860,
        debug=False
    )