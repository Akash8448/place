from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import MockTest, Question, TestAttempt, Answer
from .serializers import (
    MockTestSerializer, 
    QuestionSerializer,
    TestAttemptSerializer,
    TestResultSerializer
)
from users.models import StudentProfile

class MockTestViewSet(viewsets.ModelViewSet):
    queryset = MockTest.objects.filter(is_active=True)
    serializer_class = MockTestSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=['post'])
    def start(self, request, pk=None):
        test = self.get_object()
        student = StudentProfile.objects.get(user=request.user)
        
        # Check if test already attempted
        if TestAttempt.objects.filter(student=student, test=test, is_completed=True).exists():
            return Response(
                {'error': 'Test already attempted'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        attempt = TestAttempt.objects.create(
            student=student,
            test=test,
            score=0
        )
        
        return Response(TestAttemptSerializer(attempt).data)

    @action(detail=True, methods=['post'])
    def submit(self, request, pk=None):
        test = self.get_object()
        student = StudentProfile.objects.get(user=request.user)
        
        try:
            attempt = TestAttempt.objects.get(
                student=student,
                test=test,
                is_completed=False
            )
        except TestAttempt.DoesNotExist:
            return Response(
                {'error': 'No active test attempt found'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        answers = request.data.get('answers', [])
        score = 0
        
        for answer_data in answers:
            question = Question.objects.get(id=answer_data['question_id'])
            is_correct = question.correct_answer == answer_data['selected_answer']
            
            Answer.objects.create(
                attempt=attempt,
                question=question,
                selected_answer=answer_data['selected_answer'],
                is_correct=is_correct
            )
            
            if is_correct:
                score += question.marks
        
        attempt.score = score
        attempt.is_completed = True
        attempt.save()
        
        return Response(TestResultSerializer(attempt).data)