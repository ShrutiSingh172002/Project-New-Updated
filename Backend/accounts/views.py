from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .serializers import RegisterSerializer, UserSerializer
from .models import CustomUser

@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "message": "User registered successfully.",
                "user": UserSerializer(user).data
            }, status=201)
        return Response(serializer.errors, status=400)

@method_decorator(csrf_exempt, name='dispatch')
class LoginView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        if not email or not password:
            return Response({
                "error": "Email and password are required."
            }, status=400)
        
        user = authenticate(request, username=email, password=password)
        
        if user:
            return Response({
                "message": "Login successful.",
                "user": UserSerializer(user).data
            }, status=200)
        else:
            return Response({
                "error": "Invalid credentials."
            }, status=401)

@method_decorator(csrf_exempt, name='dispatch')
class LogoutView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        return Response({
            "message": "Logout successful."
        }, status=200)

@method_decorator(csrf_exempt, name='dispatch')
class UserProfileView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        if not email or not password:
            return Response({
                "error": "Email and password are required."
            }, status=400)
        
        user = authenticate(request, username=email, password=password)
        
        if user:
            return Response(UserSerializer(user).data, status=200)
        else:
            return Response({
                "error": "Invalid credentials."
            }, status=401)
    
    def put(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        if not email or not password:
            return Response({
                "error": "Email and password are required for authentication."
            }, status=400)
        
        user = authenticate(request, username=email, password=password)
        
        if user:
            update_data = {k: v for k, v in request.data.items() if k not in ['email', 'password']}
            
            serializer = UserSerializer(user, data=update_data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            return Response({
                "error": "Validation failed",
                "details": serializer.errors
            }, status=400)
        else:
            return Response({
                "error": "Invalid credentials."
            }, status=401)
