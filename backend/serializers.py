from rest_framework import serializers
from .models import *

class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        url = serializers.HyperlinkedIdentityField(
            view_name='questions',
            lookup_field='id'
        )
        fields = ['id', 'question_text']

class AnswerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Answer
        url = serializers.HyperlinkedIdentityField(
            view_name='answers',
            lookup_field='id'
        )
        fields = ['id', 'answer_text', 'true_or_false', 'question_id']

class HighscoreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Highscore
        url = serializers.HyperlinkedIdentityField(
            view_name='highscores',
            lookup_field='id'
        )
        fields = ['id', 'user_initials', 'score']
