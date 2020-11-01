from django.db import models

# Create your models here.
class Question(models.Model):
    question_text = models.TextField()

class Answer(models.Model):
    answer_text = models.CharField(max_length=200)
    true_or_false = models.BooleanField()
    question = models.ForeignKey(Question, on_delete=models.CASCADE)

class Highscore(models.Model):
    user_initials = models.CharField(max_length=3)
    score = models.IntegerField()

    class Meta:
        ordering = ["-score"]
