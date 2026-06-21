from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

from routes.predict import predict_bp

app = Flask(
    __name__,
    static_folder="../frontend/dist",
    static_url_path=""
)

CORS(app)

app.register_blueprint(predict_bp)


@app.route("/")
def serve():
    return send_from_directory(
        app.static_folder,
        "index.html"
    )


@app.route("/<path:path>", methods=["GET"])
def static_proxy(path):
    file_path = os.path.join(
        app.static_folder,
        path
    )

    if os.path.exists(file_path):
        return send_from_directory(
            app.static_folder,
            path
        )

    return send_from_directory(
        app.static_folder,
        "index.html"
    )


@app.route("/health")
def health():
    return jsonify({
        "status": "healthy"
    })


if __name__ == "__main__":
    import os

    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 7860)),
        debug=False
    )