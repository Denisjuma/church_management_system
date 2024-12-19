from django.contrib import admin # type: ignore
from .models import Event, Announcement,Service,ServiceRequest, Donation # type: ignore
# Register your models here.
admin.site.register(Event)
admin.site.register(Announcement)
admin.site.register(Service)
admin.site.register(ServiceRequest)
admin.site.register(Donation)
