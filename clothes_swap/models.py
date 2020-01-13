from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

class Item(models.Model):
    image = models.CharField(max_length=500)
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    size = models.CharField(max_length=10)
    original_price = models.CharField(max_length=10)
    category = models.CharField(max_length=50)
    owner = models.ForeignKey(User, related_name='items', on_delete=models.CASCADE) # the owner of the item.
    is_swapped = models.BooleanField(default=False)

    def __str__(self):
        return f'Item {self.id} - {self.owner} - {self.title}'


class SwapRequester(models.Model):
    requester = models.ForeignKey(User, related_name='swap_requesters', on_delete=models.CASCADE)
    item = models.ForeignKey(Item, related_name='swap_requesters', on_delete=models.CASCADE, blank=True, null=True)
    item_to_swap = models.ForeignKey(Item, related_name='swap_requester', on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
      return self.requester


# class SwapApproval(models.Model):
#     swapper = models.ForeignKey(User, related_name='swap_approval', on_delete=models.CASCADE)
#     item = models.ForeignKey(Item, related_name='swap_approval', on_delete=models.CASCADE, blank=True, null=True)
    