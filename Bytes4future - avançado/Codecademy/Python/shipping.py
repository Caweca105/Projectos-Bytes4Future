weight = 100
cost_ground_premium = 125.00

if weight <= 2:
  cost_ground = weight * 1.5 + 20
elif weight <= 50:
  cost_ground = weight * 1.5 + 50
elif weight <= 75:
  cost_ground = weight * 1.5 + 75
else:
  cost_ground = weight * 1.5 + 100

print(cost_ground)
print("Ground Shipping Premium $", cost_ground_premium)

if weight <= 2:
  cost_drone = weight * 3 + 20
elif weight <= 50:
  cost_drone = weight * 3 + 50
elif weight <= 75:
  cost_drone = weight * 3 + 75
else:
  cost_drone = weight * 3 + 100

print(cost_drone)
print("Drone Shipping $", cost_drone)