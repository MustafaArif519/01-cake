FROM python:3.11.1-alpine3.17

# 
ENV pythonunbuffered 1 

WORKDIR /backend

# Copy the requirements file to the docker image
COPY requirements.txt requirements.txt

# Creates virtual environment and install dependencies inside Docker image
RUN pip install -r requirements.txt

COPY . .

CMD python manage.py runserver 0.0.0.0:8000