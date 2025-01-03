"""
This module takes care of starting the API Server, Loading the DB, and Adding the endpoints.
"""
from flask import Flask, request, jsonify, Blueprint
from api.models import db, User, Subscription, Product  # Ensure all models are imported
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from api.send_email import send_email
import os

# Define the Blueprint
api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# Example Endpoint
@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the Google Inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

# User Routes
@api.route('/users', methods=['POST'])
def create_user():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    
    if not name or not email:
        return jsonify({'error': 'Name and email are required'}), 400
    
    # Create a new user
    user = User(name=name, email=email)
    db.session.add(user)
    db.session.commit()
    
    return jsonify({'message': 'User created successfully'}), 201

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{'id': user.id, 'name': user.name, 'email': user.email} for user in users])

# Subscription Routes
@api.route('/subscriptions', methods=['POST'])
def create_subscription():
    data = request.json
    user_id = data.get('user_id')
    if not user_id:
        return jsonify({'error': 'User ID is required'}), 400
    subscription = Subscription(user_id=user_id)
    db.session.add(subscription)
    db.session.commit()
    return jsonify({'message': 'Subscription created successfully'}), 201

@api.route('/subscriptions', methods=['GET'])
def get_subscriptions():
    subscriptions = Subscription.query.all()
    return jsonify([{'id': sub.id, 'user_id': sub.user_id, 'subscription_date': sub.subscription_date} for sub in subscriptions])

# Product Routes
@api.route('/products', methods=['POST'])
def create_product():
    data = request.json
    name = data.get('name')
    price = data.get('price')
    stock = data.get('stock')
    if not name or not price or not stock:
        return jsonify({'error': 'Name, price, and stock are required'}), 400
    product = Product(name=name, price=price, stock=stock)
    db.session.add(product)
    db.session.commit()
    return jsonify({'message': 'Product created successfully'}), 201

@api.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([{'id': prod.id, 'name': prod.name, 'price': prod.price, 'stock': prod.stock} for prod in products])

@api.route("/contact-us", methods=["POST"])
def contactUs():
    data = request.json
    email = data.get("email")
    comment = data.get("comment")
    if not email:
        return jsonify({"message": "Email is required"}), 400    
    if not comment:
        return jsonify({"message": "Please give us your comment."}), 400 
    
    # Get email from environment variable
    admin_email = os.getenv("GMAIL")
    if not admin_email:
        return jsonify({"message": "Server configuration error"}), 500
        
    email_value = email + "\n\n" + comment
    send_email(admin_email, email_value, "Comment from the user")
    return jsonify({"message": "Thank you for your comment."}), 200
