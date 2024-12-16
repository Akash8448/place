"""
Service layer for job-related operations.
"""
from jobs.models import JobApplication

class JobService:
    def apply_for_job(self, job, student, data):
        return JobApplication.objects.create(
            job=job,
            student=student,
            resume=data.get('resume'),
            cover_letter=data.get('cover_letter')
        )
    
    def has_applied(self, job, student):
        return JobApplication.objects.filter(
            job=job,
            student=student
        ).exists()