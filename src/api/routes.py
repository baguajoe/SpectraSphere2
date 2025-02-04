import os
import re
import logging
from flask import Flask, request, jsonify, Blueprint
from api.models import db, User, Subscription, Product  # Ensure all models are imported
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from api.send_email import send_email
# from flask_limiter import Limiter
# from flask_limiter.util import get_remote_address
from html import escape

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

# Logging setup
logging.basicConfig(level=logging.INFO)

# Rate limiter
# limiter = Limiter(get_remote_address, app=app)

@api.route("/contact-us", methods=["POST"])
# @limiter.limit("5 per minute")
def contactUs():
    data = request.json
    email = data.get("email")
    comment = data.get("comment")

    # Validate email
    if not email or not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        return jsonify({"success": False, "message": "Valid email is required"}), 400

    # Validate comment
    if not comment or len(comment.strip()) == 0:
        return jsonify({"success": False, "message": "Please provide a valid comment"}), 400
    if len(comment) > 500:
        return jsonify({"success": False, "message": "Comment should not exceed 500 characters"}), 400

    # Get admin email
    admin_email = os.getenv("GMAIL")
    if not admin_email:
        logging.error("Admin email not configured")
        return jsonify({"success": False, "message": "Server configuration error"}), 500

    # Send email
    try:
        email_value = f"From: {escape(email)}\n\nComment:\n{escape(comment)}"
        send_email(admin_email, email_value, "New Contact Form")
        logging.info(f"Comment received from: {email}")
        return jsonify({
            "success": True,
            "message": "Thank you for your message! We'll get back to you soon.",
            "details": "Your feedback has been sent to our team. We will get back to you as soon as we can."
        }), 200
    except Exception as e:
        logging.error(f"Error sending email: {str(e)}")
        return jsonify({"success": False, "message": "Internal server error"}), 500


@api.route("/partnership", methods=["POST"])
def handle_partnership():
    data = request.json
    email = data.get("email")
    
    # Validate email
    if not email or not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        return jsonify({"success": False, "message": "Valid email is required"}), 400

    # Format email content
    email_content = f"""
Partnership Application Details:

1. Contact Information:
   - Email: {escape(email)}
   - Business Name: {escape(data.get('businessName', 'Not provided'))}
   - Location: {escape(data.get('location', 'Not provided'))}
   - Preferred Contact Method: {escape(data.get('contactMethod', 'Email'))}

2. Business Information:
   - Business Type: {escape(data.get('businessType', 'Not provided'))}
   - Current Tools/Platforms: {escape(data.get('currentTools', 'Not provided'))}
   - Business Challenges: {escape(data.get('challenges', 'Not provided'))}

3. Partnership Goals:
   {escape(', '.join(data.get('goals', ['None specified'])))}

4. Additional Comments:
   {escape(data.get('comments', 'No additional comments'))}
"""

    # Get admin email
    admin_email = os.getenv("GMAIL")
    if not admin_email:
        logging.error("Admin email not configured")
        return jsonify({"success": False, "message": "Server configuration error"}), 500

    # Send email
    try:
        send_email(admin_email, email_content, "New Partnership Application")
        logging.info(f"Partnership application received from: {email}")
        return jsonify({
            "success": True,
            "message": "Thank you for your partnership application!",
            "details": "Your application has been received. Our team will review it and contact you within 2-3 business days."
        }), 200
    except Exception as e:
        logging.error(f"Error sending partnership email: {str(e)}")
        return jsonify({"success": False, "message": "Internal server error"}), 500

@api.route("/personalization-data", methods=["POST"])
def handle_personalization():
    data = request.json
    
    # Format email content with all the personalization fields
    email_content = f"""
Personalization Data Form Submission:

1. Basic Preferences:
   - Favorite Strain: {escape(data.get('favoriteStrain', 'Not specified'))}
   - Category Preference: {escape(data.get('category', 'Not specified'))}
   - Potency Preference: {escape(data.get('potencyPreference', 'Not specified'))}
   - Consumption Method: {escape(data.get('consumptionMethod', 'Not specified'))}
   - Flavor/Aroma: {escape(data.get('flavor', 'Not specified'))}

2. Usage Patterns:
   - Preferred Time: {escape(data.get('preferredTime', 'Not specified'))}
   - Experience Level: {escape(data.get('experienceLevel', 'Not specified'))}
   - Social Setting: {escape(data.get('socialSetting', 'Not specified'))}
   - Frequency: {escape(data.get('frequency', 'Not specified'))}
   - Activity Preference: {escape(data.get('activityPreference', 'Not specified'))}

3. Health & Wellness:
   - Health Conditions: {escape(data.get('healthConditions', 'Not specified'))}
   - Desired Effects: {escape(', '.join(data.get('effects', ['None specified'])))}
   - Energy Level Preference: {escape(data.get('energyLevel', 'Not specified'))}
   - Mood Preference: {escape(data.get('moodPreference', 'Not specified'))}
   - Goals: {escape(data.get('goals', 'Not specified'))}
   - Allergies: {escape(data.get('allergies', 'Not specified'))}

4. Product Preferences:
   - Product Types: {escape(', '.join(data.get('productTypes', ['None specified'])))}
   - Price Range: {escape(data.get('priceRange', 'Not specified'))}
   - Storage Preference: {escape(data.get('storagePreference', 'Not specified'))}
   - Package Type: {escape(data.get('packageType', 'Not specified'))}
   - Taste Sensitivity: {escape(data.get('tasteSensitivity', 'Not specified'))}
   - Preferred Vendors: {escape(data.get('preferredVendors', 'Not specified'))}

5. Additional Information:
   - Comments: {escape(data.get('additionalComments', 'No additional comments'))}
"""

    # Get admin email
    admin_email = os.getenv("GMAIL")
    if not admin_email:
        logging.error("Admin email not configured")
        return jsonify({"success": False, "message": "Server configuration error"}), 500

    # Send email
    try:
        send_email(admin_email, email_content, "New Personalization Data Submission")
        logging.info("Personalization data form submitted successfully")
        return jsonify({
            "success": True,
            "message": "Thank you for sharing your preferences!",
            "details": "We've received your information and will use it to enhance your experience."
        }), 200
    except Exception as e:
        logging.error(f"Error sending personalization data email: {str(e)}")
        return jsonify({"success": False, "message": "Internal server error"}), 500

# @api.route("/signup", methods=["POST"])
# def handle_signup():
#     data = request.json
#     email = data.get("email")
    
#     # Validate email
#     if not email or not re.match(r"[^@]+@[^@]+\.[^@]+", email):
#         return jsonify({"success": False, "message": "Valid email is required"}), 400

#     # Format email content
#     email_content = f"""
# New User Sign-up Details:

# 1. Contact Information:
#    - Email: {escape(email)}

# 2. Cannabis Preferences:
#    - Favorite Strain: {escape(data.get('favoriteStrain', 'Not specified'))}
#    - Category Preference: {escape(data.get('category', 'Not specified'))}
#    - Preferred Potency: {escape(data.get('potencyPreference', 'Not specified'))}
#    - Preferred Consumption Method: {escape(data.get('consumptionMethod', 'Not specified'))}
#    - Favorite Flavor/Aroma: {escape(data.get('flavor', 'Not specified'))}

# 3. Desired Effects:
#    {escape(', '.join(data.get('effects', ['None specified'])))}

# 4. Additional Comments:
#    {escape(data.get('comments', 'No additional comments'))}
# """

#     # Get admin email
#     admin_email = os.getenv("GMAIL")
#     if not admin_email:
#         logging.error("Admin email not configured")
#         return jsonify({"success": False, "message": "Server configuration error"}), 500

#     # Send email
#     try:
#         send_email(admin_email, email_content, "Personalization Data Form")
#         logging.info(f"Sign-up received from: {email}")
#         return jsonify({
#             "success": True,
#             "message": "Thank you for signing up!",
#             "details": "We've received your preferences and will keep you updated on our latest developments."
#         }), 200
#     except Exception as e:
#         logging.error(f"Error sending signup email: {str(e)}")
#         return jsonify({"success": False, "message": "Internal server error"}), 500