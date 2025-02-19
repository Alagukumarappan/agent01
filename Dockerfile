# Use python 3.12-slim
FROM python:3.12-slim

# Set the working directory
WORKDIR /app

# Install system dependencies needed for Poetry and building packages
RUN apt-get update && apt-get install -y curl build-essential && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python - && \
    ln -s /root/.local/bin/poetry /usr/local/bin/poetry

# Copy only the necessary files for dependency installation
COPY pyproject.toml poetry.lock* /app/

# Configure Poetry to install dependencies into the system environment
RUN poetry config virtualenvs.create false && poetry install --no-interaction --no-ansi

# Copy the rest of the application code
COPY . /app

# Expose the port and run the application using Uvicorn
CMD ["uvicorn", "app.LanggraphOpenAIResearchAssistant:app", "--host", "0.0.0.0", "--port", "80"]