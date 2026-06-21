from flask import Blueprint, request, jsonify
import joblib

from config import (
    MODEL_PATH,
    VECTORIZER_PATH,
    MODEL_ACCURACY
)

predict_bp = Blueprint(
    "predict",
    __name__
)

model = joblib.load(
    MODEL_PATH
)

vectorizer = joblib.load(
    VECTORIZER_PATH
)

@predict_bp.route(
    "/predict",
    methods=["POST"]
)
def predict():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No JSON data provided"}), 400

        message = data.get(
            "message",
            ""
        )

        transformed = vectorizer.transform(
            [message]
        )

        prediction = model.predict(
            transformed
        )[0]

        probability = model.predict_proba(
            transformed
        )[0]

        spam_probability = round(
            probability[1] * 100,
            2
        )

        result = (
            "Spam"
            if prediction == 1
            else "Not Spam"
        )

        return jsonify({
            "prediction": result,
            "probability": spam_probability,
            "accuracy": MODEL_ACCURACY
        })
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({
            "error": str(e),
            "traceback": traceback.format_exc()
        }), 500