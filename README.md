---

title: SpamShield AI
emoji: 🛡️
colorFrom: blue
colorTo: purple
sdk: docker
pinned: false
-------------

# SpamShield AI

An AI-powered Spam Detection Web Application that classifies Email and SMS messages as **Spam** or **Not Spam** using Machine Learning.

Built with **React + TypeScript**, **Flask**, and **Scikit-Learn**, the application provides real-time spam prediction, confidence scores, prediction history, dark mode support, and a modern responsive interface.

---

## Live Demo

Deploy on:

* Hugging Face Spaces (Docker)
* GitHub

---

## Features

* Spam Detection using Machine Learning
* Real-Time Prediction
* Spam Probability Score
* Model Accuracy Display
* Prediction History
* Dark Mode Support
* Responsive UI
* REST API Integration
* Local Storage Support
* Hugging Face Deployment Ready

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Axios
* CSS

### Backend

* Flask
* Flask-CORS
* Pandas
* NumPy

### Machine Learning

* Scikit-Learn
* Logistic Regression
* TF-IDF Vectorization

### Deployment

* Docker
* Hugging Face Spaces
* GitHub

---

## Project Structure

```text
spam-detection-app/
├── Dockerfile
├── package.json
├── README.md
│
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── mail_data.csv
│   ├── requirements.txt
│   ├── train_model.py
│   │
│   ├── model/
│   │   ├── spam_model.pkl
│   │   └── tfidf_vectorizer.pkl
│   │
│   └── routes/
│       └── predict.py
│
└── frontend/
    ├── package.json
    ├── vite.config.ts
    │
    └── src/
        ├── App.tsx
        ├── main.tsx
        │
        ├── components/
        ├── pages/
        └── services/
```

---

## Machine Learning Workflow

### Dataset

The model is trained using SMS Spam Collection Dataset.

### Data Preprocessing

* Missing value handling
* Label Encoding
* Text Cleaning

### Feature Extraction

TF-IDF Vectorization is used to convert text into numerical features.

### Model

Logistic Regression Classifier

### Accuracy

```text
Training Accuracy : ~97%
Testing Accuracy  : 96.85%
```

---

## API Endpoint

### Predict Spam

```http
POST /predict
```

Request:

```json
{
  "message": "WINNER!! Claim your free prize now"
}
```

Response:

```json
{
  "prediction": "Spam",
  "probability": 98.72,
  "accuracy": 96.85
}
```

---

## Local Installation

### Clone Repository

```bash
git clone https://github.com/Mohammed-Remshid-R/spam-detection-app.git

cd spam-detection-app
```

---

## Backend Setup

```bash
cd backend

pip install -r requirements.txt

python train_model.py

python app.py
```

Backend runs on:

```text
http://localhost:7860
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Run Complete Project

From root directory:

```bash
npm install

npm run dev
```

This starts:

```text
Frontend → http://localhost:5173

Backend → http://localhost:7860
```

---

## Docker Deployment

Build Image

```bash
docker build -t spamshield-ai .
```

Run Container

```bash
docker run -p 7860:7860 spamshield-ai
```

Open:

```text
http://localhost:7860
```

---

## Hugging Face Deployment

1. Create a new Hugging Face Space
2. Select SDK → Docker
3. Push project repository

```bash
git remote add hf https://huggingface.co/spaces/<username>/<space-name>

git push hf main
```

The application will automatically build and deploy.

---

## Future Improvements

* Multiple ML Models
* Deep Learning Spam Detection
* Email File Upload (.eml)
* User Authentication
* Analytics Dashboard
* Spam Keyword Highlighting
* Real-Time Monitoring

---

## Author

**Mohammed Remshid R**

GitHub:
https://github.com/Mohammed-Remshid-R

LinkedIn:
https://www.linkedin.com

---

## License

This project is licensed under the MIT License.
