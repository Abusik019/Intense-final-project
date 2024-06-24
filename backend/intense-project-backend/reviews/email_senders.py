import pytz
from django.core.mail import send_mail

from config.settings import EMAIL_HOST_USER
from django.template.loader import render_to_string


def send_review_notification(instance, created, **kwargs):
    """
    Функция отправки уведомления о новом комментарии под постом автора.
    """
    if created:
        author = instance.author
        author_username = author.username
        post = instance.post.title
        post_id = instance.post.id

        subject = 'У вас новый комментарий!'
        message = f'Комментарий от {author_username} был опубликован под постом "{post}"'
        from_email = EMAIL_HOST_USER

        recipient = [instance.post.author.email]

        moscow_tz = pytz.timezone('Europe/Moscow')
        time_moscow = instance.created_at.astimezone(moscow_tz)

        html_message = render_to_string('review_created_email.html', {
            'post_id': post_id,
            'post': post,
            'author_username': author_username,
            'text': instance.text,
            'created_at': time_moscow.strftime('%B-%d | %H:%M |'),
        })

        send_mail(subject, message, from_email, recipient, fail_silently=False, html_message=html_message)


def send_reply_notification(instance, created, **kwargs):
    """
    Функция отправки уведомления об ответе на коментарий.
    """
    if created:
        author = instance.author
        author_username = author.username
        post = instance.post.title
        post_id = instance.post.id

        subject = 'Вам ответили на комментарий!'
        message = f'{author_username} ответил на ваш комментарий под лекцией "{post}"'
        from_email = EMAIL_HOST_USER

        recipient = [instance.parent.author.email]

        moscow_tz = pytz.timezone('Europe/Moscow')
        time_moscow = instance.created_at.astimezone(moscow_tz)

        html_message = render_to_string('reply_email.html', {
            'post_id': post_id,
            'post': post,
            'author_username': author_username,
            'text': instance.text,
            'created_at': time_moscow.strftime('%B-%d | %H:%M |'),
        })

        send_mail(subject, message, from_email, recipient, fail_silently=False, html_message=html_message)
