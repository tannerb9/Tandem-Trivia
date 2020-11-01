from rest_framework import serializers
from .models import *

class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'question_text']

class AnswerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Answer
        fields = ['id', 'answer_text', 'true_or_false', 'question_id']

class HighscoreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Highscore
        fields = ['id', 'user_initials', 'score']
