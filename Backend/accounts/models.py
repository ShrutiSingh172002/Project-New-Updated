from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, official_email, full_name, password=None, **extra_fields):
        if not official_email:
            raise ValueError("Email is required")
        email = self.normalize_email(official_email)
        user = self.model(official_email=email, full_name=full_name, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, official_email, full_name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(official_email, full_name, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    full_name = models.CharField(max_length=255)
    official_email = models.EmailField(unique=True)
    personal_email = models.EmailField(blank=True, null=True)
    official_phone = models.CharField(max_length=20)
    personal_phone = models.CharField(max_length=20)
    company_name = models.CharField(max_length=255)
    location = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    gst_number = models.CharField(max_length=15)
    pin_code = models.CharField(max_length=10)
    company_address = models.TextField()

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'official_email'
    REQUIRED_FIELDS = ['full_name']

    objects = CustomUserManager()

    def __str__(self):
        return self.official_email
