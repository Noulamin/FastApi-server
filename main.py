from fastapi import FastAPI

# Create an instance of the FastAPI class
app = FastAPI()

# Define a simple endpoint
@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI! lol car go brrrrr"}