from django.db import models
from users.models import User


# Create your models here.

#***create payment history model.

#***create company proile table



class userProjectsList_catFishFarming(models.Model):
    #user_id = models.OneToOneField(User, on_delete=models.CASCADE)
    owner =  models.ForeignKey(User, related_name='owner', on_delete=models.SET_NULL, null=True)
    spec_id = models.PositiveBigIntegerField()
    grantAccess = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    accessExipration_date = models.DateTimeField(auto_now_add=True)
    ponds_id = models.PositiveBigIntegerField()
    workers_id = models.PositiveBigIntegerField()
    farm_id = models.PositiveBigIntegerField()
    title = models.CharField(max_length=1000)
    summary = models.CharField(max_length=2000, default="Project summarized scope goes here")
    
    



# specifications tables 

#catfish farming 

# class catfishFarming_spec(models.Model):
#     user_id = models.PositiveBigIntegerField()
    # locaton
    # farm_name
    # cycles : hatching, fries, fingerlins, grow_out, broodstock
    # activities

# class catfishFarming_Activities(models.Model):
#     user_id = models.PositiveBigIntegerField()
    # water changing 
    # sorting 
    # Counting 
    # Feeding 
    # Medication 
    # Securing 
    # Sales
    # Pond_Treatment
    # Emergencies
    

# class catfishFarming_pondsList(models.Model):
#     user_id = models.PositiveBigIntegerField()


# class projects(models.Model):
#     user_id = models.PositiveBigIntegerField()


# projects permit list 
   # founder_id = 
   # permit_grantor
   # user_id
   # permit_type


