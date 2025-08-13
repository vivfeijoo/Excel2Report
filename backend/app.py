from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config
from routes import api

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)
jwt = JWTManager(app)

app.register_blueprint(api, url_prefix="/api")

if __name__ == "__main__":
    app.run(debug=True)
