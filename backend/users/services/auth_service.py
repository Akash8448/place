"""
Service layer for authentication-related operations.
"""
from django.contrib.auth import authenticate
from users.models.user import User

class AuthService:
    def authenticate_user(self, email, password):
        user = authenticate(username=email, password=password)
        return user if user and user.is_active else None
    
    def register_user(self, data):
        try:
            user = User.objects.create_user(
                username=data['email'],
                email=data['email'],
                password=data['password'],
                user_type=data['user_type']
            )
            return user
        except Exception:
            return None