FROM python:3.11.1-alpine3.17

# 
ENV pythonunbuffered 1 

WORKDIR /backend

# Copy the requirements file to the docker image
COPY ./requirements.txt /requirements.txt

# Creates virtual environment and install dependencies inside Docker image
# RUN pip install -r /requirements.txt

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r /requirements.txt

# COPY . .

COPY ./scripts /scripts

ENV PATH="/backend/scripts:/py/bin:$PATH"

RUN chmod -R +x /scripts

COPY . .


EXPOSE 80

CMD ["/scripts/run.sh"]