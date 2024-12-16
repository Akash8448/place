"""
Authentication views for user login and registration.
"""
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from users.serializers.user_serializers import UserSerializer
from users.services.auth_service import AuthService

class LoginView(APIView):
    def post(self, request):
        auth_service = AuthService()
        user = auth_service.authenticate_user(
            request.data.get('email'),
            request.data.get('password')
        )
        
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'token': str(refresh.access_token),
                'user': UserSerializer(user).data
            })
        return Response(
            {'error': 'Invalid credentials'},
            status=status.HTTP_401_UNAUTHORIZED
        )

class RegisterView(APIView):
    def post(self, request):
        auth_service = AuthService()
        user = auth_service.register_user(request.data)
        
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'token': str(refresh.access_token),
                'user': UserSerializer(user).data
            }, status=status.HTTP_201_CREATED)
        return Response(
            {'error': 'Registration failed'},
            status=status.HTTP_400_BAD_REQUEST
        )