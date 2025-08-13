from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required
from werkzeug.utils import secure_filename
import os
from models import users
from utils import generate_graph_and_pdf

api = Blueprint("api", __name__)
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@api.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    for user in users:
        if user["username"] == username:
            return jsonify({"msg": "User already exists"}), 400

    users.append({"username": username, "password": password})
    return jsonify({"msg": "User registered successfully"}), 200

@api.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    for user in users:
        if user["username"] == username and user["password"] == password:
            token = create_access_token(identity=username)
            return jsonify(access_token=token), 200

    return jsonify({"msg": "Invalid credentials"}), 401

@api.route("/upload", methods=["POST"])
@jwt_required()
def upload_file():
    if "file" not in request.files:
        return jsonify({"msg": "No file part"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"msg": "No selected file"}), 400

    filename = secure_filename(file.filename)
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)

    try:
        generate_graph_and_pdf(file_path)
        return jsonify({"msg": "Report generated successfully"}), 200
    except Exception as e:
        return jsonify({"msg": str(e)}), 500
