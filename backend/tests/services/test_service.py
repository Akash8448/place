"""
Service layer for test-related operations.
"""
from datetime import datetime
from tests.models import TestAttempt, Answer

class TestService:
    def start_test(self, student, test):
        return TestAttempt.objects.create(
            student=student,
            test=test,
            score=0
        )
    
    def submit_test(self, attempt, answers):
        score = 0
        for answer_data in answers:
            question = answer_data['question']
            selected_answer = answer_data['selected_answer']
            is_correct = question.correct_answer == selected_answer
            
            Answer.objects.create(
                attempt=attempt,
                question=question,
                selected_answer=selected_answer,
                is_correct=is_correct
            )
            
            if is_correct:
                score += question.marks
        
        attempt.score = score
        attempt.completed_at = datetime.now()
        attempt.is_completed = True
        attempt.save()
        
        return attempt