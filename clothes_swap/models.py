from django.db import models # importing the model module from django so we can create model classes
from django.contrib.auth import get_user_model # importing our user model through the get_user_model method. Again this is project specific, in this case I'vwe imported the user so I can attach it an an Owner field on a post and a comment, If you did not want/need to attach the creating user to your resource, would would not do this.
User = get_user_model()

class Item(models.Model):
    image = models.CharField(max_length=500)
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    size = models.CharField(max_length=10)
    original_price = models.CharField(max_length=10)
    category = models.CharField(max_length=50)
    owner = models.ForeignKey(User, related_name='item', on_delete=models.CASCADE) # the owner of the item.
    is_swapped = models.BooleanField(default=False)

    def __str__(self):
        return f'Item {self.id} - {self.owner} - {self.title}'


class SwapRequester(models.Model):
    requester = models.ForeignKey(User, related_name='swap_requesters', on_delete=models.CASCADE, unique=True)
    item = models.ForeignKey(Item, related_name='swap_requesters', on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
      return self.requester