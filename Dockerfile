FROM node:22 AS frontend-builder

WORKDIR /app/frontend

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ .

RUN npm run build


FROM python:3.11

WORKDIR /app

COPY backend/ ./backend/

RUN pip install --no-cache-dir -r backend/requirements.txt

COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

EXPOSE 7860

CMD ["python", "backend/app.py"]