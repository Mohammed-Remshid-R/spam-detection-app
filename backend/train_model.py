import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Load dataset
raw_mail_data = pd.read_csv("mail_data.csv")

# Handle missing values
mail_data = raw_mail_data.fillna("")

mail_data["Category"] = (
    mail_data["Category"]
    .astype(str)
    .str.strip()
    .str.lower()
    .map({
        "ham": 0,
        "spam": 1
    })
)

# Remove rows with invalid labels (if any)
mail_data = mail_data.dropna(subset=["Category"])


x = mail_data["Message"]
y = mail_data["Category"].astype(int)

# Split dataset
x_train, x_test, y_train, y_test = train_test_split(
    x,
    y,
    test_size=0.2,
    random_state=3,
    stratify=y
)

# TF-IDF Vectorization
vectorizer = TfidfVectorizer(
    min_df=1,
    stop_words="english",
    lowercase=True
)

x_train_features = vectorizer.fit_transform(x_train)
x_test_features = vectorizer.transform(x_test)

# Train Model
model = LogisticRegression(max_iter=1000)

model.fit(
    x_train_features,
    y_train
)

# Predictions
train_prediction = model.predict(x_train_features)
test_prediction = model.predict(x_test_features)

# Accuracy
train_accuracy = accuracy_score(
    y_train,
    train_prediction
)

test_accuracy = accuracy_score(
    y_test,
    test_prediction
)

print(f"Training Accuracy : {train_accuracy:.4f}")
print(f"Testing Accuracy  : {test_accuracy:.4f}")

# Save Model
joblib.dump(
    model,
    "model/spam_model.pkl"
)

# Save Vectorizer
joblib.dump(
    vectorizer,
    "model/tfidf_vectorizer.pkl"
)

print("Model Saved Successfully")