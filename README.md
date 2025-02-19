# agent01

//direct run
Step 1: pip install: pip install --no-cache-dir --upgrade -r ./requirements.txt
step 2: run uvicorn: uvicorn app.main:app --reload

/automated run
// Poetry install
step 1: pip install poetry
step 2: poetry --version
step 3: poetry install

//docker run
step 1: docker build: docker build -t fastapi-app .
step 2: docker run: docker run -p 8000:80 fastapi-app