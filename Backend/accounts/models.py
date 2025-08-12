from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
import string
import random


class CustomUserManager(BaseUserManager):
    def create_user(self, official_email, full_name=None, password=None, **extra_fields):
        if not official_email:
            raise ValueError("Email is required")
        email = self.normalize_email(official_email)
        user = self.model(official_email=email, full_name=full_name, **extra_fields)
        if password:
            user.set_password(password)
        else:
            user.set_password('defaultPassword123')
        user.save()
        return user

    def create_superuser(self, official_email, full_name=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(official_email, full_name, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    user_unique_code = models.CharField(max_length=20, unique=True, editable=False, null=True, blank=True)
    full_name = models.CharField(max_length=255, blank=True, null=True)
    official_email = models.EmailField(unique=True)
    personal_email = models.EmailField(blank=True, null=True)
    official_phone = models.CharField(max_length=20, blank=True, null=True)
    personal_phone = models.CharField(max_length=20, blank=True, null=True)
    company_name = models.CharField(max_length=255, blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    department = models.CharField(max_length=100, blank=True, null=True)
    gst_number = models.CharField(max_length=15, blank=True, null=True)
    pin_code = models.CharField(max_length=10, blank=True, null=True)
    company_address = models.TextField(blank=True, null=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'official_email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def save(self, *args, **kwargs):
        if not self.user_unique_code:
            if self.gst_number and self.gst_number.strip():
                # Generate from GST number + 2 random numbers (0-99)
                attempts = 0
                max_attempts = 100
                while attempts < max_attempts:
                    random_digits = random.randint(0, 99)
                    self.user_unique_code = f"{self.gst_number}{random_digits:02d}"
                    if not CustomUser.objects.filter(user_unique_code=self.user_unique_code).exists():
                        break
                    attempts += 1
                
                # If we couldn't find a unique code after max attempts, add more randomness
                if attempts >= max_attempts:
                    random_digits = random.randint(100, 999)
                    self.user_unique_code = f"{self.gst_number}{random_digits:03d}"
            else:
                # If no GST number, generate a temporary code that can be updated later
                attempts = 0
                max_attempts = 100
                while attempts < max_attempts:
                    self.user_unique_code = f"TEMP{random.randint(1000, 9999)}"
                    if not CustomUser.objects.filter(user_unique_code=self.user_unique_code).exists():
                        break
                    attempts += 1
                
                # If we couldn't find a unique code after max attempts, add more randomness
                if attempts >= max_attempts:
                    self.user_unique_code = f"TEMP{random.randint(10000, 99999)}"
        
        # If user has GST number but no unique code, or if GST number was updated
        elif self.gst_number and self.gst_number.strip() and not self.user_unique_code.startswith(self.gst_number):
            # Update unique code to match new GST number
            attempts = 0
            max_attempts = 100
            while attempts < max_attempts:
                random_digits = random.randint(0, 99)
                new_code = f"{self.gst_number}{random_digits:02d}"
                if not CustomUser.objects.filter(user_unique_code=new_code).exclude(id=self.id).exists():
                    self.user_unique_code = new_code
                    break
                attempts += 1
            
            # If we couldn't find a unique code after max attempts, add more randomness
            if attempts >= max_attempts:
                random_digits = random.randint(100, 999)
                self.user_unique_code = f"{self.gst_number}{random_digits:03d}"
        
        super().save(*args, **kwargs)

    def __str__(self):
        return self.official_email
